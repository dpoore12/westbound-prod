# Brad Ghost Teaser ("Radio Underwater") — v15 (approved 16 Sep 2026)

`brad_ghost_teaser_v15_APPROVED.mp4` — 30 s, 2520x1080, H.264/AAC; 720p copy alongside. Same cut as the locked v11 with three changes Dan asked for: the stacked end title over the fireworks shot (v13), Sammy in the shadows as the figure in the distance of the alley shot (v14), and the band walking out as Sammy plus exactly four, a woman and three men, two with guitars and one with drumsticks (v15). For v14 and v15 the first frame of Dan's own clip was edited with the Kling image tools (`source_frames/`) and the motion reshot from the edited frame (`clips/claude_ghost_alley_sammy.mp4`, `clips/claude_ghost_band_walkout.mp4`).

Cut sheet: `cut_sheet_v15_APPROVED.json` (studio renderer `build/cut.py` in `~/Westbound/sammy`). The Radio Underwater mix stays out of this public repo.

## Timeline (v15)
```
CUT ghost_v15_APPROVED  30 s  frame 21:9 (2520x1080)
PICTURE
    0.00-  3.50  black
    3.50-  6.00  clip   dan_shot_pain.mp4  from 2.2s  fitblur
    6.00-  8.00  clip   dan_shot_just_tapping.mp4  from 0s  crop
    8.00- 10.00  clip   dan_shot_drinking_whiskey_spill.mp4  from 0s  crop
   10.00- 14.00  clip   claude_ghost_alley_sammy.mp4  from 0s  fitblur
   14.00- 18.30  clip   claude_ghost_band_walkout.mp4  from 0s  crop
   18.30- 20.00  clip   dan_shot_stadium_fireworks_rockgod.mp4  from 3s  fitblur
   20.00- 25.00  clip   claude_ghost_band_walkout.mp4  from 5s  crop
   25.00- 30.00  clip   dan_shot_stadium_fireworks_rockgod.mp4  from 0s  fitblur  [title "" at +1.5s]
VOICE
    0.30  10_gf_that_music.mp3  (2.32 s)  peak 0.45
    4.30  11_pain_xodx.mp3  (0.79 s)  peak 0.65
    6.30  03_brad_louder.mp3  (2.51 s)  peak 0.7
   10.30  12_manager_sunset.mp3  (2.23 s)  peak 0.7
   15.00  08_announcer_v3_tight.wav  (4.84 s)  peak 0.85
   21.00  09_sammy_closer.mp3  (2.55 s)  peak 0.85
MUSIC
  Radio Underwater- Sammy Rane and Westbound.wav  song from 31.7s, in at 0s  gain 0.1@0 > 0.12@3.5 > 0.2@5 > 0.35@10 > 0.55@13.9 > 0.9@14.4 > 1@20 > 1@27 > 0.7@29.3 > 0@30
NATIVE AUDIO
  dan_shot_stadium_fireworks_rockgod.mp4  at 14s  gain 0.3@14 > 0.9@18.3 > 0.9@19 > 0.9@19
ROOM TONE 0.004
SHEET OK
```

---

# Brad Ghost Teaser — v11 (approved 16 Sep 2026)

`brad_ghost_teaser_v11_APPROVED.mp4` — 30 s, 2520x1080, H.264/AAC. Dan's script v4, cut beat for beat.

Rebuild: `python ghost_build.py timeline_v11.json out.mp4` (needs PyAV, Pillow, numpy). The timeline references the clips and VO in this folder plus the Radio Underwater mix (`Radio Underwater- Sammy Rane and Westbound.wav`, kept out of the repo because the repo is public); point the `music.file` path at your local copy.

Clips are Dan's Kling generations. VO takes are Dan's ElevenLabs cast: GF (soft heartache), Sammy PAIN voice, Brad, Manager, Announcer, Sammy (Danimal clone). Rules and the shot-by-shot record are in `LOCKED_RULES.md`.
