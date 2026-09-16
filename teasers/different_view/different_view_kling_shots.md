# Different View — Kling shot plan (16 Sep 2026, Claude shoots, Dan unlocks)

Unlock first: `touch ~/Westbound/sammy/.allow-generation` (good for 2 h). Kling MCP is connected as Dan (7,525 credits at last check).
Every shot: image-to-video from the still named below, 5 s, native audio OFF, no text in frame. Portrait stills come back portrait and go in with `fitblur` like the Ghost clips; a 21:9 source (the EYES frame) comes back 21:9 and goes in with `crop`.
When a clip lands: `uv run build/intake.py "<file>" kling dan_shot_dv_<slot>` then change that slot in the sheet from `still` to `clip` (one line), re-render as the next version.

## Priority 1 — the four that carry the teaser
| slot | teaser | source still | motion to ask for |
|---|---|---|---|
| 08 reveal | 0:19–0:25 | **Dan's new roommate frame** (solo, backlit at a window, sunset behind, face in shadow) | He turns his head toward camera-left; as he turns, the light catches his face and he grins. Slow, one move. Camera locked. |
| 17b eyes | 0:46–0:48 | images/new/…5dd9cfc2…_2.png (EYES hero, 21:9) | Eyes closed at the start; they open slowly and lock on the lens. No other motion. Camera locked. |
| 18 match cut | 0:48–0:55 | images/all/…roaring_into_a_vintage_Sh…_2.png (258) | Slow push-in; crowd lights and phone lights flicker; he sings. A true match cut needs a Midjourney pair of the SAME stage empty vs packed (same seed/prompt), then two shots with the same push. |
| 01 cold open | 0:00–0:03 | images/all/…rural_Indiana_farm_road…_3.png (297) | He stands still looking down the road, wind in the corn, then steps off toward the road. Camera locked, low. (The script's pickup tailgate needs its own Midjourney frame if Dan wants the truck.) |

## Priority 2 — motion helps
| slot | teaser | source still | motion |
|---|---|---|---|
| 02 highway | 0:03–0:04 | images/all/…Interstate_70…_2.png (318) | A single old car passes away from camera kicking dust into the light. Camera locked. |
| 03 arriving | 0:04–0:05 | images/all/…Echo_Park…_1.png (313) | Slow drive-by dolly, palms drift, neon flickers. |
| 04 from behind | 0:05–0:09 | images/all/…walking_away_from_camera…_0.png (304) | He walks away from camera, bag on his shoulder; slight handheld. |
| 15 pool | 0:39–0:41 | images/all/…poolside_party…_1.png (118) | Water ripples, smoke drifts from the cigarette, party moves softly behind him; he barely moves. |
| 17a mic | 0:43–0:46 | images/from_zips/SINGING_on_stage_dive_bar…_1.png (386) | Slow push-in on him at the mic, eyes closed, hand gripping the stand. Camera only. |
| 13 club | 0:35–0:37 | images/all/…swarmed_by_photog…_1.png (221) | Strobe flashes, crowd jostles, he is pulled forward through it. |

## Stays as a still unless Dan says otherwise
06 apartment (047), 07 drink detail (356), 09 half-lit (357), 11 storefronts (314), 14 mirror (051), 16 sunglasses bar (284). Slots 05, 10, 12 already carry Dan's Kling clips.

## Model note
The script's Kling plan (Elements, v3 omni multi-image) is a web-app workflow. Through the MCP I can only do image-to-video from one still: v2.6 or v3.0 turbo for the montage, v3.0 omni for the reveal and the eyes. No negative prompt on 3.0 Omni.
