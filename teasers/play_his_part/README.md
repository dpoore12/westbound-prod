# Sammy Rane and Westbound — Play His Part, live at the Scoot Inn (full-song video)

**v5 APPROVED and locked, 29 Sep 2026** (Dan: "lock it"; on v4: "so well done except for the one little part"). Full song, 0:00–3:58, 1920×1080 24 fps.

- `play_his_part_v5_preview_720p.mp4` — 720p preview (the 1080p master lives in the studio as `exports/play_his_part_v5_APPROVED.mp4`).
- `cut_sheet_v5_APPROVED.json` — the cut. A sung take dropped at its slice's song time with `src_start 0` is in sync: every one was rendered by MiniMax H3 Max (via OpenArt) from a Midjourney close-up plus that exact vocal slice. Band takes sit on the beat grid (136 BPM) with the featured player chosen by the instrument that leads that second (Demucs stems).
- `frame_sheet_v5.jpg` — 12 frames across the cut.
- `midjourney_prompts.md` — the stage plates, Sammy's close-ups and the round-2 band frames (all made by Dan in Midjourney with the locked heroes attached). `cards/` — every H3 / Nano Banana prompt behind the takes and the swaps. `fix_list_v3.md` — Dan's notes on v3 and what each one changed.
- `source_frames/` — the stage plate, Dan's round-2 frames (Sammy hands-on-mic and eyes-closed, Cass, Max), the one-mic two-shot, and the two frames with Rex swapped in at the kit.

What the cut does: 21 sung close-ups of Sammy; Sammy and Cass singing the backing line together at one mic (2:56); Cass and Max singing their own backing lines; Cass on the guitar leads with Rex at the kit behind; the outro as a two-shot, Cass cranking, Max cool; the Scoot Inn's own crowd (H3 on Dan's crowd frames, never with the band, under 2 s). Song master and stems are not in this public repo.

## The widescreen (16:9), graded — v5_graded APPROVED and locked, 30 Sep 2026 (Dan: "lock it")
- `play_his_part_v5_graded_preview_720p.mp4` — preview (the 1920×1080 master lives in the studio as `exports/play_his_part_v5_graded_APPROVED.mp4`).
- `cut_sheet_v5_graded_APPROVED.json` — the 29 Sep v5 cut unchanged (same shots, times, takes, audio, the backing-vocal crop), with the grade of the locked vertical on top in its `resolve` block: a brightness-only shot match (23 shots), the room LUT `scoot_inn_night`, Super Scale 2x, rendered by DaVinci Resolve. The ungraded 29 Sep lock stays as it was.

## The vertical (9:16), graded — v5_916_graded APPROVED and locked, 30 Sep 2026 (Dan: "great for a vertical lock that")
- `play_his_part_v5_916_graded_preview_540x960.mp4` — preview (the 1080×1920 master lives in the studio as `exports/play_his_part_v5_916_graded_APPROVED.mp4`).
- `cut_sheet_v5_916_graded_APPROVED.json` — the same 47 shots, times, takes and audio as the 16:9 lock; each shot carries the 9:16 window it shows (a `zoom` with `bx`/`ax`, or a tighter box on the Cass shots so the drum kit stays out of frame with no player). `v5_916_windows.json` — every window and the reason it sits where it does. The `resolve` block records what DaVinci Resolve added on top: a brightness-only shot match (34 shots), one room LUT (`scoot_inn_night`), Super Scale 2x on every 768p source.
- `frame_sheet_v5_916.jpg` — 12 frames across the vertical.

## Shot list
| Song time | Clip | from |
|---|---|---|
| 0.00–3.76 | h3_C1r_cass_rex_094.85_8s.mp4 | 0.05 |
| 3.76–6.92 | h3_C2_cass_218.00_8s.mp4 | 0.04 |
| 6.92–8.27 | h3_crowd_scoot_31_6s.mp4 | 0.50 |
| 8.27–11.42 | h3_C1r_cass_rex_094.85_8s.mp4 | 4.02 |
| 11.42–15.00 | h3_B2_leni_rex_094.85_8s.mp4 | 0.05 |
| 15.00–19.55 | php_A_015.00_h3max768.mp4 | 0.00 |
| 19.55–22.20 | h3_C2_cass_218.00_8s.mp4 | 3.56 |
| 22.20–28.50 | php_C_022.20_h3max768.mp4 | 0.00 |
| 28.50–33.99 | php_D_028.50_h3max768.mp4 | 0.00 |
| 33.99–36.50 | h3_B2_leni_rex_094.85_8s.mp4 | 4.02 |
| 36.50–43.30 | php_E2_036.50_h3max768.mp4 | 0.00 |
| 43.30–50.50 | php_F_043.30_h3max768.mp4 | 0.00 |
| 50.50–58.33 | php_B2_050.50_h3max768.mp4 | 0.00 |
| 58.33–61.49 | h3_C1r_cass_rex_094.85_8s.mp4 | 0.05 |
| 61.49–62.86 | h3_crowd_scoot_39_6s.mp4 | 0.50 |
| 62.86–65.20 | h3_C1r_cass_rex_094.85_8s.mp4 | 3.58 |
| 65.20–72.70 | php_G_065.20_h3max768.mp4 | 0.00 |
| 72.70–79.50 | php_H2_072.70_h3max768.mp4 | 0.00 |
| 79.50–86.70 | php_I_079.50_h3max768.mp4 | 0.00 |
| 86.70–95.34 | php_J2_086.70_h3max768.mp4 | 0.00 |
| 95.34–99.41 | h3_C1r_cass_rex_094.85_8s.mp4 | 0.05 |
| 99.41–100.75 | h3_crowd_scoot_45_6s.mp4 | 0.50 |
| 100.75–103.91 | h3_M1_max_094.85_8s.mp4 | 0.05 |
| 103.91–106.60 | h3_C2_cass_218.00_8s.mp4 | 0.04 |
| 106.60–113.30 | php_K_106.60_h3max768.mp4 | 0.00 |
| 113.30–119.90 | php_L_113.30_h3max768.mp4 | 0.00 |
| 119.90–127.80 | php_M3_119.90_h3max768.mp4 | 0.00 |
| 127.80–137.00 | php_N2_127.80_h3max768.mp4 | 0.00 |
| 137.00–144.40 | php_O_137.00_h3max768.mp4 | 0.00 |
| 144.40–151.44 | php_P_144.40_h3max768.mp4 | 0.00 |
| 151.44–154.88 | php_BV3_148.40_h3max768.mp4 | 3.04 |
| 154.88–159.41 | php_Q_153.20_h3max768.mp4 | 1.68 |
| 159.41–162.10 | h3_C1r_cass_rex_094.85_8s.mp4 | 4.46 |
| 162.10–163.47 | h3_crowd_scoot_31_6s.mp4 | 2.15 |
| 163.47–165.30 | h3_B2_leni_rex_094.85_8s.mp4 | 0.05 |
| 165.30–174.71 | php_R_165.30_h3max768.mp4 | 0.00 |
| 174.71–175.80 | h3_C2_cass_218.00_8s.mp4 | 3.12 |
| 175.80–187.60 | php_BV1c_175.80_h3max768.mp4 | 0.00 |
| 187.60–191.87 | php_T_187.60_h3max768.mp4 | 0.00 |
| 191.87–199.30 | php_BV2_191.70_h3max768.mp4 | 0.17 zoom 1.7 |
| 199.30–208.74 | php_U3_199.30_h3max768.mp4 | 0.00 |
| 208.74–212.18 | h3_C1r_cass_rex_094.85_8s.mp4 | 0.05 |
| 212.18–213.53 | h3_crowd_scoot_39_6s.mp4 | 2.17 |
| 213.53–216.25 | h3_B2_leni_rex_094.85_8s.mp4 | 2.26 |
| 216.25–218.00 | h3_C2_cass_218.00_8s.mp4 | 4.45 |
| 218.00–229.70 | h3_OUT1_cass_max_rex_218.00_14s.mp4 | 0.00 |
| 229.70–238.15 | h3_OUT2_cass_max_rex_226.00_12s.mp4 | 3.70 |
