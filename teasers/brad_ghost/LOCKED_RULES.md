# Sammy Rane — LOCKED RULES (read every turn)
Source: Dan's handoff from the Perplexity/GPT session, 15 Sep 2026. Verbatim rules, Dan's authority.

1. Dan generates ALL video/image footage in Kling. Claude never generates video/images for teasers.
2. Claude only edits clips Dan provides. Cut, sync, add VO, add titles. That's it.
3. When Dan drops an mp3, use that file. Do not regenerate. Check the drop folder (~/Westbound/sammy/handoff/ and ~/Downloads) every turn before generating anything.
4. One teaser = one theme + 1-2 primary voices. More than that = stacking = shit. (Brad ghost v3 has 4 voices, each in its own beat: that is the ceiling.)
5. Never sanitize the emotion. Sammy is haunted, dark, dry. Dark dry raspy baritone, no polish, no reverb, no country twang.
6. Never push ElevenLabs `style` above 0.
7. Sammy voice settings: stability 0.4, similarity_boost 0.85.
8. Kling 3.0 Omni has no negative prompt field. Don't send Dan looking for one.
9. Tell Dan to disable Kling's "Native Audio" toggle UNLESS the shot is meant to carry native audio (stadium fireworks shot: keep it).
10. v24_LOCKED.mp4 (teaser1_v24_cost, 55 s, MD5 479b6f94d176dac780a9598597004762) is the reference for "close to working." Study it. Never modify it.
11. Don't over-direct voice takes. The cast voices already carry their tone (California GF is already sweet). Deliver the natural line.
12. Don't ask questions Dan already answered. Don't re-generate anything he approved ("LOCK that in and LOCK the way you did it in").
13. Rejected, never reuse: teaser1_v27_cost_mom.mp4, teaser1_v28_cost_mom.mp4, every over-produced multi-voice teaser.

## Voice cast (ElevenLabs, Dan-built; full roster in sammy_voice_cast.json when it lands)
- Sammy Rane (Danimal clone): 9hxACPAp0PycObOZREHQ
- Brad (dead older brother, the ghost): Sar0lU0nwIhB2kH7tEAY
- Announcer (KISS/arena style): vxackIkmyeL7nv8woJXo
- California GF: erc9nuooi3VSgEgjq9CT
- Mom, Dad, Manager, Marlin + 12 more (in the JSON)

## Songs (Suno, "hooked formula"): Play His Part (m4a), Radio Underwater (wav) — both finished and mixed.

## Dan's approved Kling shots (dan_kling_archive): divebar_mic_cigarette (Shot 1, approved), whiskey_hand, vinyl_needle, man_ta (cig profile, blue window), stadium_fireworks_rockgod (keep native audio).

## Active task: Brad Ghost Teaser, script v3, 30 s.
Voices: California GF opener ("Sammy... how do you make music like that?" intimate, half-asleep, in bed), Sammy x2 ("Pain", closer "Brad."), Announcer arena intro, Brad x4 ghost lines.
Structure: black opener → dive bar (divebar_mic clip) → cig profile → stadium fireworks (native audio spike) → whiskey hand → black + title card SAMMY RANE.
Deliver: one mp4, brad_ghost_teaser_v1.mp4.

## Where the handoff assets live on this Mac (staged 15 Sep 2026)
- ~/Westbound/sammy/handoff/reference/v24_LOCKED.mp4 (MD5 verified 479b6f94…)
- ~/Westbound/sammy/handoff/songs/ : Play His Part (m4a + wav), Radio Underwater (wav + RIGHT Arrangement wav)
- ~/Westbound/sammy/handoff/kling/ : dan_shot_divebar_mic_cigarette (832x1104 portrait, silent), dan_shot_stadium_fireworks_rockgod (1104x832, native audio), dan_shot_man_ta (2200x940), dan_shot_whiskey_hand (2200x940), vinyl_needle_kling_markremoved (my Kling pull with the corner mark filled; Dan's own vinyl_needle download not on this Mac)
- NOT on this Mac: sammy_voice_cast.json, brad_teaser_vo/ (9 VO takes), Brad Ghost script v3 text. They live in the Perplexity workspace.

## Voice roster confirmed reachable from the ElevenLabs Creative workspace (15 Sep 2026)
Sammy (cloned, Danimal) 9hxACPAp0PycObOZREHQ · Sammy Rane (generated alt) 2oMZ2VPbglKxfdeWgCDA · Brad (ghost) Sar0lU0nwIhB2kH7tEAY · Older Brother Narration 3p1WVQrVMwo6rkJHZ3ot · California GF (Girlfriend 1) erc9nuooi3VSgEgjq9CT · GF-2 NYC fWEnqJFD5uCcJxKAxHKJ · Tre (long lost love) EhRnO3ZUfGiqV4a8ooxF · Female best friend OPAWu2isNaI3a7Ef1whU · Mom UCRje3A4yPKVhtrbKCOi · Dad 3WV7oyfzrBJn54i1yFH5 · Manager BaGCBiDfTLPTHjogQ7jD · Security/best friend VSAUP2jnbYtyuu5BVeQN · Indiana friend lKYIF5qLWz7uHaR64hX7 · Drummer Max 3F17mxPJx7jTW0qPRzHh · Rex (British) R1G5ptRKIbLbqiANDOCm · Jamaican bandmate fD9eefCRBxmhIsIjJ3aw · Female bandmate PZfV2utJaNGrrjFdfLbF · Announcer vxackIkmyeL7nv8woJXo (from handoff)
- Sammy GF very soft heartache voice (Dan's new "Sammy Soft Girlfriend", 15 Sep): LFId7lIbVgo5xXe7AapH — "whisper of a female voice with heartache, very slight, very gentle, not loud at all". This is the voice for the Brad Ghost opener line unless Dan says otherwise.

## Brad Ghost Teaser v1 (15 Sep 2026) — build record
- Export: ~/Westbound/sammy/exports/brad_ghost_teaser_v1.mp4 (32 s, 2520x1080, 24 fps). Build: scratchpad ghost_build.py + ghost_v1.json.
- Picture: 0-4 black · 4-9 divebar mic (Dan's Kling, portrait, blur-fill) · 9-14 whiskey hand (Dan's Kling) · 14-20 stadium fireworks (Dan's Kling, native audio, slowed 0.83x to fill 6 s) · 20-25 cigarette profile (Dan's Kling man_ta) · 25-30 SLUG for the stadium-mic closing shot · 30.5-32 SAMMY RANE card.
- VO (ElevenLabs Creative, fresh takes, in handoff/vo/): GF = "Sammy GF very soft heartache" LFId7lIbVgo5xXe7AapH at 0.6 s · Sammy "Pain." 3.7 s · Brad lines 5.0 / 9.5 / 12.3 / 21.0 / 23.5 s · Announcer (THE ANNOUNCER- SAMMY RANE vxackIkmyeL7nv8woJXo, eleven_v3, pauses tightened) 16.0 s · Sammy closer 25.6 s. California GF take kept unused (01b). Voice settings could not be set through the Creative tool (defaults used); Dan's 0.4/0.85 needs the ElevenLabs UI or an API key.
- Music: Radio Underwater (RIGHT Arrangement) intro, song 2.0-14.96 s, instrumental (isolator confirmed vocals start ~16 s), looped once on a bar boundary; envelope 10% → 40% → 70% at the stadium → 15% → out at 25.0 s.
- v2 (Dan's B+ notes): closing line is now "I write this music at a price." (09b take, at 26.0 s); no text slugs in cuts ever, black instead until the shot exists; music must be audibly Radio Underwater: bed = intro riff 0-14 s → chorus (song 21.7 s downbeat) under the stadium 14-20 s → intro riff 20-25 s, levels 15/38/75/20 then out at 25.0. Export: exports/brad_ghost_teaser_v2.mp4. Config: scratchpad ghost_v2.json.
- v3/v4 (Dan: too short, ending horrible, keep him in shadow, use the verse): the lyric Dan quotes lives in "Radio Underwater- Sammy Rane and Westbound.wav" (254 s), NOT the RIGHT Arrangement (which drops "She started talking / My mind caved in / I shook, gave her a light"). Use that mix for anything lyric-driven. Verse timing in that mix: "I turned and caught that haunted grin" 32.9 s · "my world felt a cold wind" ~37.5 · "She started talking" 39.9 · "My mind caved in / I shook, gave her a light, felt like the end" 42.75-48.3 · "Her beauty stopped my soul from moving older" 48.75-54.5 · "All I heard was radio underwater" 55.5-59.0 · repeat lines 62-67.4. Tempo ~73 BPM (bar 3.28 s).
- v4 timeline: 0-25 as v2 (cig profile 4-9, whiskey 9-14, stadium 14-20, needle drop 20-25) · closer over black 25-27.5 · verse: dive bar mic (dark grade 0.7, slowed) 27.5-34.5 · whiskey (dark) 34.5-37.35 · cig profile 37.35-43.35 · stadium fireworks 43.35-50.1 · Sora stadium push 50.1-54.0 under "radio underwater" · black · SAMMY RANE 54.6-57.5. Song from 32.4 s at teaser 27.0, 85%, out at 54.15. Export: exports/brad_ghost_teaser_v4.mp4. Config: scratchpad ghost_v4.json. Dive bar and whiskey carry a shadow grade (assembler 'dark' option) to keep his face hidden.
- 15 Sep, after v4: NO unasked creative choices. No reordering Dan's shot list, no grading/slowing his clips, no non-Kling footage (Sora clip out), no alternate takes. Footage runs out = black. v5 = literal: his order 4-9 dive bar / 9-14 whiskey / 14-20 stadium / 20-25 cig profile, closer over black, verse over his five clips at native speed in shot-list order, black when they run out, card. Export exports/brad_ghost_teaser_v5.mp4.
- v7 (Dan's spoken cut, 16 Sep): 0-3.5 black (GF question 0.4, "Pain." 2.9) → 3.5 drinking whiskey spill (new Kling) and the verse music starts on that cut, low → tapping cigarette (new Kling) 8.5 → cig profile 13.5 → needle 18.5 → whiskey hand 23.5 → stadium fireworks 25.0-30.2 at full with native crowd → black → SAMMY RANE 30.5-32.5. No Brad lines, no announcer, no price line, no dive bar. Song: the 254 s mix from 32.4 s, gain 0.28 → 0.45 → 0.65 → 1.0 at 25.0, out at 30.4 after "radio underwater". Export exports/brad_ghost_teaser_v7.mp4. Config scratchpad ghost_v7.json. New clips: handoff/kling/dan_shot_drinking_whiskey_spill.mp4, dan_shot_just_tapping.mp4 (1464x628).
- v8 (16 Sep): Dan's PAIN clip (handoff/kling/dan_shot_pain.mp4, portrait, him drinking with eyes shut then head dropping into shadow) sits at 3.0-8.0 with "Pain." at 6.1 as the glass comes down. Everything after shifts +4.5 s from v7: drink+music 8.0, tapping 13.0, profile 18.0, needle 23.0, whiskey hand 28.0, stadium 29.5-34.7, card 35.0-37.0. Export exports/brad_ghost_teaser_v8.mp4, config ghost_v8.json.
- 16 Sep: the "Pain." line uses voice xODXMFB79x5WxAeut4j9 (Dan's choice), not the Danimal Sammy clone. Regenerate the take with it when Dan says go.
- v9 (16 Sep, Dan's five-beat script, "go"): 0-2.8 black + GF "Sammy... how do you make that music?" (heartache voice, take 10) · 2.8-7.0 PAIN clip, "Pain." at 5.8 in voice xODXMFB79x5WxAeut4j9 ("Sammy PAIN", take 11) · 7.0-9.5 tapping, 9.5-12.0 drink (dive bar fragments), Brad "play louder" at 7.3 · 12-15 cig profile (LA night), Manager "don't die on Sunset" at 12.3 (take 12, manager voice) · 15-20 stadium fireworks, native crowd, announcer v3 tight at 15.1 · HARD CUT silence at 20.0 · 20-25 whiskey hand reversed (glass set down), Sammy closer "price we paid" at 21.0 · 25-30 needle drop, vinyl crackle, Radio Underwater (254 s mix) from 0.0 rising at 25.6, SAMMY RANE overlaid on the vinyl from 27.6. Bed 0-20 = the 254 s mix verse from 32.4 s, 18% → 75%, cut dead at 20.0. Export exports/brad_ghost_teaser_v9.mp4, config ghost_v9.json.
- 16 Sep: Kling is connected to Claude directly (MCP, Dan's account 89631850, Premier, 7,525 credits at connect). Claude can upload a still, run image_to_video on 3.0 Turbo / 3.0 / 3.0 Omni / 2.5 / 2.6, poll, and download without a browser. Rule 1 unchanged: only on Dan's instruction, shot by shot.
- 16 Sep: beat 4 stage shot = dan_shot_raiding.mp4 (silhouette, arm raised, band walks on; 1464x628, silent), NOT the fireworks clip. Hold for more clips before the next cut.
- 16 Sep: dan_shot_alley.mp4 = the hall/alley scene clip (Dan: "for the hall alley scene thing"). Placement TBD by Dan.
- 16 Sep: Kling MCP Beat 1 attempt (3.0 Turbo, 50 credits) FAILED: turned the ember into a flame, no shadow move. Dan: stop going through Kling, too slow; cut locally. Clip kept at handoff/kling/claude_beat1_face_into_shadow.mp4, unused.
- v10 = script v4 cut locally: 0-3.5 black + GF · 3.5-5.0 cig profile with a post shadow-fade (everything to black except the ember), "Pain." (xODX) at 4.0 · 5-7.5 tapping, 7.5-10 drink, Brad at 5.3 · 10-14 alley doorway, Manager at 10.3 · 14-18.3 stage walk-on (raiding clip) + fireworks clip 18.3-20 with its crowd audio rising, announcer at 15.0 · 20-27 dive bar mic clip as the STAND-IN for the stadium-mic close-up, closer at 21.0, the hook "All I heard was radio underwater" lands at 23.8 right after the line · 27-30 stage (raiding clip) with SAMMY RANE over it, fade out. Song from 31.7 s, 10% → 100% at 20. Export exports/brad_ghost_teaser_v10.mp4, config ghost_v10.json.
- v11 (Dan: "you lost the head-into-shadows shot, and his face is in the end"): beat 1 = PAIN clip (src 2.2-4.7, head dropping into shadow) 3.5-6.0 with "Pain." at 4.3; tapping 6-8, drink 8-10; alley 10-14; stage walk-on 14-18.3 + fireworks 18.3-20; payload line over the stage walk-on 20-25 (NO dive bar, no face); fireworks 25-30 with SAMMY RANE over it. The dive bar mic clip stays OUT of every cut unless Dan places it. Export exports/brad_ghost_teaser_v11.mp4.
- 16 Sep: v11 APPROVED by Dan ("you fucking DID IT"). Locked copy: exports/brad_ghost_teaser_v11_APPROVED.mp4 with its timeline JSON and the assembler beside it. Do not rebuild it; iterate from this file only when Dan asks.
