# Radio Underwater — live at the Whisky a Go Go — debug handoff

This folder is for outside review of one specific problem: **Kling's multi-Element binding puts the right faces in a shot but swaps which face is doing which job.**

## The task

`radio_underwater_whisky_brief.{pdf,txt}` is the full 39-shot generation brief for a live-performance video: one song, four band members, each a Kling "Element" (a reusable face/character): Sammy (vocals), Cass (guitar), Rex (bass), Max (drums). `band_cast.md` has the plain-language description of each.

## What worked

`clips/shot16_silent.mp4` (from `frames/shot16_frame_a/b/c.png`, one Element bound): Sammy's face holds correctly through a 6-second handheld performance shot. Single-Element binding is reliable.

## What failed

`clips/band_walkout_test_SWAPPED_IDENTITIES.mp4` (from `frames/band_a.png`, all four Elements bound at once): the prompt explicitly bound Rex to "bass, stage right" and Max to "drums, at the back." The model rendered all four correct faces in the right places on stage, but **swapped Rex and Max's faces onto each other's instruments** — the drummer has Rex's blond spiky hair and sunglasses, the bassist has Max's red hair and cap. Cass (guitar, stage left) and Sammy (vocals, center) bound correctly.

`shots.json` has the generation IDs and settings for both jobs. `STATUS.md` is the running log.

## The question for review

Is there a known, more reliable way to bind 3-4 Kling Elements to distinct roles/positions in one frame or shot (a different prompt structure, a per-element `bindName` convention, generating positions one at a time and compositing, a different model version), or is 2+ characters per shot inherently unreliable enough with the current Element system that the brief's original design — mostly single-Element close-ups, band members only silhouetted or out of focus in wides — was correct and shouldn't have been overridden?

No paid API keys or account credentials are in this folder. The actual song audio (needed for lip-sync timing) is intentionally not included here; it stays out of the public repo per this project's existing rule.
