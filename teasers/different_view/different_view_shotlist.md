# Different View teaser — shot manifest (from Script v3, 15 Sep 2026)
Script: `handoff/scripts/different_view_teaser_script_v3.pdf`. Cut sheet: `cuts/different_view_v2.json` (one slot per shot; a slot is black until the clip lands).
Teaser time 0:00 = song 123.0 s. Music: the master, 123.0 → 178.0, hard cut at 0:55, then 2 s black, 2 s title, end 0:59.

Drop a clip in ~/Downloads, then: `cd ~/Westbound/sammy && uv run build/intake.py "<file>" kling dan_shot_dv_<slot>` and it goes into the slot. Kling native audio OFF on every shot (the song is the bed). 5-second Kling clips cover every slot below.

| slot | teaser | needs | beat | shot | script says | v1 |
|------|--------|------:|------|------|-------------|----|
| 01 | 0:00–0:03 | 3 s | 1 | pickup tailgate | Sammy, 19, in the bed of a parked pickup at the edge of town, pre-dawn, boots off the tailgate, empty two-lane, sagging porch, faded flag, church sign. Drops off the tailgate at the end. Sammy Element, younger styling if possible. | black |
| 02 | 0:03–0:04 | 1 s | 1 | highway dawn | Wide low angle, single dusty car kicking dust into golden light. | black |
| 03 | 0:04–0:05 | 1 s | 1 | LA skyline | Through the windshield, heat haze, palms. POV. | black |
| 04 | 0:05–0:09 | 4 s | 2 | Sunset sidewalk | Sammy from behind, long hair, worn jacket, duffle; crowd blurred, he is still. | black |
| 05 | 0:09–0:11 | 2 s | 2 | hand + cigarette | Tight on his calloused hand, cigarette between fingers. Script asks whether `dan_shot_divebar_mic_cigarette.mp4` covers it; that clip stays out unless Dan places it (rule 7). | black |
| 06 | 0:11–0:17 | 6 s | 3 | apartment | Shitty LA apartment, Sammy on the floor tuning a guitar; the roommate laughing at a phone in soft focus behind him, second guitar case by his chair. First glimpse of the roommate, face soft. | black |
| 07 | 0:17–0:19 | 2 s | 3 | two beers | Two cheap beers on a coffee table, condensation, shallow focus. | black |
| 08 | 0:19–0:25 | 6 s | 4 | FACE REVEAL | Roommate backlit at the window, sunset behind, face in shadow; turns his head; at 0:23 exactly on "face" the light catches him: clear, close, ordinary, grinning. First lit face in the teaser. Roommate Element so he matches 06, 11, 13, 16, 17. | black |
| 09 | 0:25–0:26 | 1 s | 4 | Sammy half-lit | Sammy close, half-lit, not smiling, something softened, looking at his friend. | black |
| 10 | 0:26–0:29 | 3 s | 5 | neon alley | Sammy and the roommate walking a neon alley toward a club door with a line; roommate nods to the bouncer, they skip the line. Both Elements, night, wet street. | black |
| 11 | 0:29–0:32 | 3 s | 5 | car window | Sunset Strip storefronts blurred past a car window at speed, a girl's bare feet on the dash. | black |
| 12 | 0:32–0:35 | 3 s | 5 | dive bar slide | Roommate slides Sammy a whiskey, a woman leans in to light his cigarette. Script: "could reuse dan_shot_whiskey_hand.mp4 for the slide". | whiskey_hand clip, per the script's note |
| 13 | 0:35–0:37 | 2 s | 6 | wrist | A girl's hand pulling Sammy by the wrist through a packed club, strobe, she looks back laughing. Sammy Element. | black |
| 14 | 0:37–0:39 | 2 s | 6 | mirror, 3am | Stranger's apartment, lines on a mirror, a credit card, Sammy's reflection; roommate on the couch behind him playing guitar. Both Elements. Kling may refuse drug imagery; script fallback: pill bottle and whiskey on the mirror, or just the reflection. | black |
| 15 | 0:39–0:41 | 2 s | 6 | rooftop pool | Hollywood Hills rooftop at sunrise, Sammy shirtless in the pool, cigarette held dry, woman asleep on a lounger. Sammy Element. Hero shot of the montage. | black |
| 16 | 0:41–0:43 | 2 s | 6 | empty club, day | Sammy hungover in sunglasses with a guitar sound-checking to an empty room, one work light; roommate stage left tuning. Both Elements. | black |
| 17 | 0:43–0:48 | 5 s | 7 | mic, eyes closed → open | Sammy at the mic in the empty club, sunglasses off, eyes closed, gripping the stand; slow push-in; he opens his eyes to camera. | black |
| 18 | 0:48–0:55 | 7 s | 7 | MATCH CUT packed club | Same framing, the club packed, phones up, roaring, roommate lit at stage left with his guitar. Cinematography must match slot 17. | black |
| — | 0:55–0:57 | | 8 | black, silence | Hard cut to black at 0:55. | black |
| — | 0:57–0:59 | | 8 | title | SAMMY RANE / "Different View" / coming soon, serif, same treatment as Brad Ghost. | card |

## VO takes (in handoff/vo/, generated 15 Sep from Dan's cast through the Creative tool, default settings; drop your own mp3 with the same name to replace one)
| # | speaker | voice | line | lands | file to drop |
|---|---------|-------|------|-------|--------------|
| 1 | DAD | 3WV7oyfzrBJn54i1yFH5, style 0 | "Ain't nothing out there for you but trouble, son." | starts ~0:00.5 over the pickup shot, finished before the engine at 0:03 | `dv_01_dad_trouble.mp3` (2.46 s, placed at 0.4) |
| 2 | SAMMY | 9hxACPAp0PycObOZREHQ, stability 0.4, similarity 0.85, style 0 | "They were right about the trouble. ... Wrong about everything else." (alt: "He wasn't like us. ... Thank God.") | starts ~0:49; "everything else" at ~0:51 | `dv_02_sammy_answer.mp3` (3.85 s, placed at 48.0; "everything" lands ~50.95) |
Roommate: no lines.

## Timing facts to settle before the final cut (measured on the master)
- Sung "the rest is up to you" runs 0:47.4 → 0:50.3 teaser time (song 170.4 → 173.4). The script places Sammy's "everything else" at ~0:51, which is just after the sung line ends.
- The chorus vocal ("We were living on small town time") starts at 0:52.7 teaser time (song 175.7). The script's hard cut at 0:55 (song 178.0) lands 2.3 s into that vocal; a cut "just as the chorus is about to hit" is 0:52.6.
- The script gives the tail two ways: the beat table has TITLE at 0:53 → 0:55 with a 55 s runtime; the prose has the hard cut at 0:55, then 2 s black, then a 2 s title. v1 follows the prose (59 s total). One number in the sheet changes it.
