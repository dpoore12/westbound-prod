# SAMMY RANE TEASER 1 — LOCKED PRODUCTION STATE (2026-09-14)

## Status
- v18: audio, music curve, VOs, announcer, title card ALL LOCKED
- Only remaining fix: stage clip (Sammy warped on top of drums, floating bandmate)

## LOCKED Audio Assets
- Song: `uploaded_attachments/e9e734fe5d034ce88aa85a1b06a4fc76/Radio-Underwater-Sammy-Rane-and-Westbound.wav` at -ss 26.5
- Snake VO: `vo4/02_snake.mp3` (ElevenLabs Cassius `n1B7UeEflN4Q3sCsoNW6`) → adelay 13s
- Friend VO: `vo4/03_friend_v3.mp3` (ElevenLabs Pauly `OBLxU3DhFiBOh33EeRvi`) → adelay 22s
- Announcer: `ann_orus.mp3` (Gemini TTS Orus voice, bracket direction) → adelay 38.5s
- Music curve: 10% at 0-15s → ramp 10%→30% at 15-25s → ramp 30%→60% at 25-35s → 60% flat to end
- Fade out song at 43-45s

## LOCKED Video Intro
- Source: `uploaded_attachments/f6e695f0458c44cd88313a6034f1cc94/teaser1_v1_with_footage.mp4`
- Trim 0-30s, natural full play, NO stream_loop
- Dark grade ramping in at 21.5-29.5s (brightness -0.20 → -0.35)
- Vignette + 2520x1080 scale

## LOCKED Title Card
- Text: "SAMMY RANE"
- Font: DejaVu Sans Bold 280pt, white with 6px black stroke
- Position: center
- Fade in at 38.5s (rides Orus roar), fade out with music at 43-45s

## LOCKED Stage Shot Recipe (WORKS — must regen until placement holds)
1. GPT Image 2.5 Sunburst hero still with tight composition prompt
   - Explicit: "ONE drummer center behind him, ONE bassist to his left, ONE guitarist to his right"
   - Explicit: "back to camera facing crowd, arm raised"
   - Reference: `/home/user/workspace/sammy_stage_hero.png`
2. Kling v2 Master image-to-video with negative prompt including "duplicated band members, mirrored drummers, floating figures"
3. If Kling drifts (like v18 where Sammy is on top of drums), regen OR fall back to MiniMax H3 with first+last frame lock

## LOCKED ffmpeg Template
- Saved: `/home/user/workspace/teaser_template.sh`
- Inputs 0-5, filter graph, all encoding params

## Version Log
- v9: first good silhouette (30s)
- v11-v14: announcer iteration (all rejected)
- v15: Orus announcer approved, frozen last 5s from clip stretch bug
- v16: Kling T2V, band doubled/mirrored — REJECTED
- v17: Kling I2V from hero still, composition clean but no title
- v18: v17 + SAMMY RANE title card — LOCKED except Sammy on top of drums issue
- v19 (tomorrow): regen stage clip until placement holds

## Credentials (session-approved, all live)
- custom-cred:api.elevenlabs.io
- custom-cred:api.klingai.com
- custom-cred:api.higgsfield.ai (backup)

## Reference Files
- Hero still: `/home/user/workspace/sammy_stage_hero.png`
- Current Kling stage clip: `/home/user/workspace/kling_stage_v2.mp4`
- Current locked teaser: `/home/user/workspace/teaser1_v18.mp4`
