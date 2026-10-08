# The band in their places: the swap chain on the band plate (8 Oct 2026)
OpenArt website, Nano Banana Pro, 9:16, 4K, Auto Polish off, 80 credits a pass, the plate as @image1 and the men as saved Characters
(rule 20). Two Characters in the first pass (what holds), then ONE man per pass, hero-gated after every pass before the next.
Base plate: `frames/BP_261ddf71_2.png` (PASS). Positions = Bob Dominator's Dark Night (BAND_SETUP.md).

## Pass 1: Sammy + Cass on the plate -> frames/oa/BS_p1_sammy_cass.png
`cards/BS_p1.txt`:
Keep the stage in @image1 pixel-identical: the same festival main stage, drum riser, amp stacks, road cases, monitors, cables, truss and daylight. Add two musicians exactly as their references. @sammy stands front centre on the open stage facing the camera, a thin black headset microphone along his cheek, cream henley, cord necklaces, his face exactly as his reference, mouth closed. @cass stands stage left (the viewer's left) in front of the tall amp stacks with his sunburst Les Paul on a strap, head down into a riff, his face exactly as his reference. Nobody at the drum kit, nobody else on stage. Real phone photo, harsh afternoon sun, hard shadows on the black floor, natural colour, unretouched.

## Pass 2: + Max -> frames/oa/BS_p2_max.png
`cards/BS_p2.txt`:
Keep everything in @image1 pixel-identical: the singer front centre and the guitarist at the amps on the left keep their exact faces, bodies and positions. Add one man: @max stands stage right (the viewer's right), crouched low and wide with a black electric bass on a strap, head down into the music, black cap worn forwards, black t-shirt, tattoo sleeves, by the road cases, his face exactly as his reference. Nobody at the drum kit. Same light, same shadows, same phone photo.

## Pass 3: + Rex at the kit -> frames/oa/BS_p3_rex.png
`cards/BS_p3.txt`:
Keep everything in @image1 pixel-identical: the singer front centre, the guitarist at the amps on the left and the bass player on the right keep their exact faces, bodies and positions. Add one man: @rex seated at the black drum kit on the riser at the back, small and partly hidden by the cymbals, sticks up mid-hit, small black wrap sunglasses, bleached spiky hair, black t-shirt, exactly as his reference. Same light, same shadows, same phone photo.

Gate after every pass: `uv run build/hero_gate.py FRAME OUT sammy=... cass=...` (every face large), read written into APPROVED_FRAMES.json.
