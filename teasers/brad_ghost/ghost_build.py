"""Brad Ghost Teaser assembler: Dan's Kling clips + VO takes + Radio Underwater bed -> 2520x1080 H.264/AAC."""
import sys, json, math, numpy as np, av
from fractions import Fraction
from PIL import Image, ImageDraw, ImageFont, ImageFilter
W, H, FPS, SR = 2520, 1080, 24, 48000
GEORGIA = '/System/Library/Fonts/Supplemental/Georgia.ttf'; HELV = '/System/Library/Fonts/Helvetica.ttc'
def font(p, s):
    try: return ImageFont.truetype(p, s)
    except Exception: return ImageFont.load_default()

def fit(im, mode):
    im = im.convert('RGB'); target = W / H; r = im.width / im.height
    if mode == 'crop' or r >= target * 0.98:
        if r > target: cw = int(im.height * target); x = (im.width - cw)//2; im = im.crop((x, 0, x+cw, im.height))
        elif r < target: ch = int(im.width / target); y = (im.height - ch)//2; im = im.crop((0, y, im.width, y+ch))
        return im.resize((W, H), Image.LANCZOS)
    # fitblur: full-height subject over a blurred, darkened enlargement of itself
    bg = im.resize((W, int(W / r)), Image.BILINEAR); y = (bg.height - H)//2; bg = bg.crop((0, y, W, y+H)).filter(ImageFilter.GaussianBlur(40))
    bg = Image.eval(bg, lambda v: int(v * 0.35))
    fw = int(H * r); fg = im.resize((fw, H), Image.LANCZOS); bg.paste(fg, ((W - fw)//2, 0)); return bg

def read_clip(path):
    c = av.open(path); fr = [f.to_ndarray(format='rgb24') for f in c.decode(video=0)]; fps = float(c.streams.video[0].average_rate); c.close(); return fr, fps

def grade_dark(a, amt):
    f = a.astype(np.float32) / 255.0; f = np.clip((f - 0.06) / 0.94, 0, 1) ** (1 + amt); f *= (1 - 0.55 * amt); return (f * 255).astype(np.uint8)

def title_overlay(a, text, alpha, size=104, spacing=20):
    im = Image.fromarray(a).convert('RGBA'); f = font(GEORGIA, size)
    txt = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(txt)
    ws = [d.textlength(ch, font=f) for ch in text]; total = sum(ws) + spacing*(len(text)-1); x = (W-total)/2
    for ch, w in zip(text, ws): d.text((x, H/2 - size*0.6), ch, font=f, fill=(235, 230, 220, 255)); x += w + spacing
    shadow = Image.new('RGBA', (W, H), (0, 0, 0, 0)); shadow.paste((0, 0, 0, 200), mask=txt.split()[3]); shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    layer = Image.alpha_composite(shadow, txt); la = layer.split()[3].point(lambda v: int(v * alpha)); layer.putalpha(la)
    return np.asarray(Image.alpha_composite(im, layer).convert('RGB'))

def clip_frames(path, n, start=0.0, mode='crop', speed=1.0, hold_last=True, dark=0.0, reverse=False, title=None, shadow=None):
    fr, fps = read_clip(path); out = []
    if reverse: fr = fr[::-1]
    if shadow:
        h, w, _ = fr[0].shape; yy, xx = np.mgrid[0:h, 0:w]; ey, ex = shadow['ember']; rr = np.sqrt((yy-ey)**2 + (xx-ex)**2)
        keep = np.clip(1 - (rr - shadow.get('r', 40)) / shadow.get('halo', 90), 0, 1)[..., None].astype(np.float32)
    for i in range(n):
        src = int((start + i / FPS * speed) * fps); src = min(src, len(fr) - 1) if hold_last else src % len(fr)
        raw = fr[src]
        if shadow:
            t = i / FPS; k = min(1.0, max(0.0, (t - shadow['from']) / (shadow['to'] - shadow['from'])))
            raw = np.clip(raw.astype(np.float32) * (1 - k * (1 - keep) * 0.97), 0, 255).astype(np.uint8)
        f = fit(Image.fromarray(raw), mode); a = np.asarray(f)
        if dark: a = grade_dark(a, dark)
        if title:
            t = i / FPS; alpha = min(1.0, max(0.0, (t - title['at']) / title.get('fade', 1.0)))
            if alpha > 0: a = title_overlay(a, title['text'], alpha)
        out.append(a)
    return out

def slug_frames(label, n):
    im = Image.new('RGB', (W, H), (10, 10, 10)); d = ImageDraw.Draw(im); f = font(HELV, 44); tw = d.textlength(label, font=f)
    d.text(((W-tw)/2, H/2 - 22), label, font=f, fill=(90, 90, 90)); d.text((40, H-90), 'SLUG - shot not delivered yet', font=font(HELV, 22), fill=(60, 60, 60)); return [np.asarray(im)] * n

def card_frames(text, n, fade_in=14, size=104, spacing=20):
    im = Image.new('RGB', (W, H)); d = ImageDraw.Draw(im); f = font(GEORGIA, size)
    ws = [d.textlength(ch, font=f) for ch in text]; total = sum(ws) + spacing*(len(text)-1); x = (W-total)/2
    for ch, w in zip(text, ws): d.text((x, H/2 - size*0.6), ch, font=f, fill=(235, 230, 220)); x += w + spacing
    a = np.asarray(im).astype(np.float32); return [(a * min(1, (i+1)/fade_in)).astype(np.uint8) for i in range(n)]

def black(n): return [np.zeros((H, W, 3), np.uint8)] * n

# ---------- audio ----------
def load_audio(path, sr=SR):
    c = av.open(path); res = av.AudioResampler(format='fltp', layout='stereo', rate=sr); chunks = []
    for f in c.decode(audio=0):
        for rf in res.resample(f): chunks.append(rf.to_ndarray())
    for rf in res.resample(None): chunks.append(rf.to_ndarray())
    c.close(); return np.concatenate(chunks, axis=1).astype(np.float32)   # (2, n)

def env(points, n):
    t = np.arange(n) / SR; return np.interp(t, [p[0] for p in points], [p[1] for p in points]).astype(np.float32)

def mix(total, spec):
    n = int(total * SR); out = np.zeros((2, n), np.float32); rng = np.random.default_rng(3)
    if spec.get('room_tone'):
        rt = rng.normal(0, 1, n).astype(np.float32); X = np.fft.rfft(rt); fr = np.fft.rfftfreq(n, 1/SR); X[(fr < 150) | (fr > 5000)] = 0
        rt = np.fft.irfft(X, n).astype(np.float32); rt /= (np.abs(rt).max() + 1e-9); out += rt * spec['room_tone']
    for cr in spec.get('crackle', []):
        st = int(cr['at'] * SR); en = int(cr['end'] * SR); c = np.zeros(en - st, np.float32)
        for i in rng.integers(0, len(c) - 400, int((cr['end'] - cr['at']) * 45)):
            L = int(rng.integers(40, 400)); c[i:i+L] += rng.uniform(0.2, 1.0) * rng.normal(0, 1, L) * np.exp(-np.arange(L) / (L / 4))
        X = np.fft.rfft(c); fr = np.fft.rfftfreq(len(c), 1/SR); X[(fr < 800) | (fr > 9000)] = 0; c = np.fft.irfft(X, len(c)); c /= (np.abs(c).max() + 1e-9)
        hiss = rng.normal(0, 1, len(c)).astype(np.float32); Xh = np.fft.rfft(hiss); Xh[(fr < 2000) | (fr > 8000)] = 0; hiss = np.fft.irfft(Xh, len(c)); hiss /= (np.abs(hiss).max() + 1e-9)
        out[:, st:en] += (c * cr.get('gain', 0.25) + hiss * cr.get('hiss', 0.03))
    for m in spec.get('music', []):
        a = load_audio(m['file']); s = int(m['src_start'] * SR); at = int(m.get('at', 0.0) * SR); seg = a[:, s:s + (n - at)]
        peak = np.abs(seg).max() + 1e-9; seg = seg / peak * 0.9
        g = env(m['gain'], n); out[:, at:at + seg.shape[1]] += seg * g[at:at + seg.shape[1]]
    for nat in spec.get('native', []):
        a = load_audio(nat['file']); a = a / (np.abs(a).max() + 1e-9) * 0.9; st = int(nat['at'] * SR); seg = a[:, :n - st]
        g = env([(p[0] - nat['at'], p[1]) for p in nat['gain']], seg.shape[1]); out[:, st:st + seg.shape[1]] += seg * g
    for v in spec.get('vo', []):
        a = load_audio(v['file']); a = a / (np.abs(a).max() + 1e-9) * v.get('peak', 0.8); st = int(v['at'] * SR); seg = a[:, :max(0, n - st)]
        out[:, st:st + seg.shape[1]] += seg
    peak = np.abs(out).max()
    if peak > 0.98: out *= 0.98 / peak
    return out

def render(cfg, out_path):
    total = cfg['total']; frames = []
    for s in cfg['shots']:
        n = int(round(s['end'] * FPS)) - int(round(s['start'] * FPS)); k = s['kind']
        if k == 'black': frames += black(n)
        elif k == 'slug': frames += slug_frames(s['label'], n)
        elif k == 'clip': frames += clip_frames(s['path'], n, s.get('src_start', 0.0), s.get('mode', 'crop'), s.get('speed', 1.0), dark=s.get('dark', 0.0), reverse=s.get('reverse', False), title=s.get('title'), shadow=s.get('shadow'))
        elif k == 'card': frames += card_frames(s['text'], n)
        print(f"{s['start']:5.2f}-{s['end']:5.2f} {k:5s} {n:3d}f {s.get('path', s.get('label', s.get('text', '')))[-48:]}", flush=True)
    assert len(frames) == int(round(total * FPS)), (len(frames), total * FPS)
    audio = mix(total, cfg['audio'])
    o = av.open(out_path, 'w'); vs = o.add_stream('libx264', rate=FPS); vs.width, vs.height, vs.pix_fmt = W, H, 'yuv420p'; vs.options = {'crf': '18', 'preset': 'medium'}
    ast = o.add_stream('aac', rate=SR); ast.layout = 'stereo'
    for i, f in enumerate(frames):
        vf = av.VideoFrame.from_ndarray(np.ascontiguousarray(f), format='rgb24'); vf.pts = i; vf.time_base = Fraction(1, FPS)
        for p in vs.encode(vf): o.mux(p)
    for p in vs.encode(): o.mux(p)
    for i in range(0, audio.shape[1], 1024):
        af = av.AudioFrame.from_ndarray(np.ascontiguousarray(audio[:, i:i+1024]), format='fltp', layout='stereo'); af.sample_rate = SR; af.pts = i; af.time_base = Fraction(1, SR)
        for p in ast.encode(af): o.mux(p)
    for p in ast.encode(): o.mux(p)
    o.close(); print('wrote', out_path)

if __name__ == '__main__':
    render(json.load(open(sys.argv[1])), sys.argv[2])
