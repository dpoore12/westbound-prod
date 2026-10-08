# Their band set up on stage, with ours (8 Oct 2026; Dan: "can you do exactly how they had their band set up on stage")

## Bob Dominator's "Dark Night" stage, as read frame by frame (f60V8jZN4xA)
- **Drums** centre-back on a black riser (the kit is behind the guitarist at 8.5 s; the drummer's close-up at 6.6-8.2 s).
- **Backline** across the back: tall amp stacks, road cases, a black backdrop; truss roof with moving lights; line arrays hung
  either side; monitor wedges along the front edge.
- **Guitarist** (long hair, leather vest) stage LEFT, in front of the amps, headbanging (8.5-9.4 s); later standing back by the
  amp stacks at the back right of frame (15 s), small and soft behind the singer.
- **Bassist** (dreads) stage RIGHT, crouched low and wide (3.8-4.7 s); a second guitar's headstock sweeps the foreground.
- **Singers** (two, headset mics) own the open front of the stage and strut around each other (10-21 s).
- **Crew** in black at the sides by the road cases (12-19 s). Their own hard shadows on the floor.
- The band is never all sharp in one frame: wides keep one or two in focus and the rest small or soft behind.

## Ours, mapped onto it
| Theirs | Ours | Position |
|---|---|---|
| drummer | Rex (rule 29: background only; small at the kit in wides, never a close-up) | centre-back on the riser |
| guitarist | Cass (Les Paul) | stage left, in front of the amp stacks |
| bassist | Max (black bass) | stage right, low, by the road cases (D3 is already this) |
| two singers | Sammy (one singer; headset) | front, the open stage |
| crew | crew in black, no instruments | the sides, by the cases |

## How it gets built (the rules that apply)
- One hero per Midjourney frame (the only way a face holds). So the positioned frames are per man: **CB** Cass stage left at the
  amps (no drum kit in his frame, so no empty kit), **D3** Max stage right (done), Sammy front (D1, D4, D7 done).
- **BP**, the band plate: the whole stage from the pit, EMPTY (kit on the riser, amps, cases). Then the OpenArt swap chain
  (Nano Banana Pro, plate as @image1 + Characters, two per pass, gated after every pass: Sammy + Cass, then Max, then Rex at
  the kit) = the one wide where all four are in their places, the W1_p4 precedent. Rex only through this wide.
- Video: the wide moves like theirs (a walk across the open stage past the band, the players small behind), 10 s H3 2K 9:16;
  the per-man frames get their own moving-camera takes. A five-man wide animated close is the "cartoon" risk (29 Sep); the band
  stays small and soft in the wide, as in theirs.

## Midjourney cards (attach the named hero; `--ar 9:16 --style raw`; 4 per job)
**BP, the band plate. IN SHOT: nobody. Attach: nothing.**
```
wide phone photo from the photo pit in front of a huge open-air rock festival main stage on a summer afternoon, looking up at the empty stage: a black drum riser centre-back with a black drum kit and gold cymbals on it, tall guitar amplifier stacks at the back on both sides, black road cases, a black stage backdrop, a scaffolding truss roof with moving lights, line-array speaker towers hanging either side, monitor wedges along the front edge of the stage, taped cables on the black floor, nobody on stage, harsh afternoon sun, hard shadows, clear blue sky, natural colours, unretouched, shot on iPhone, 24mm --ar 9:16 --style raw
```
**CB, Cass stage left at the amps. IN SHOT: Cass only. Attach: `HEROES_LOCKED/2_CASS_HERO_LOCKED_guitar.png`.**
```
candid phone photo from the stage floor of a huge open-air rock festival main stage on a summer afternoon, a guitarist standing stage left in front of tall black guitar amplifier stacks, light caramel skin, short black locs standing up and ending at the ears, a moustache and chin-strap goatee, a grey t-shirt, a sunburst Les Paul on a strap, both hands on the guitar, head down into a riff, road cases and a black backdrop behind him, no drum kit in the frame, harsh afternoon sun from the side, hard shadows on the stage floor, natural colours, no stage lights, no haze, unretouched, shot on iPhone, 35mm --ar 9:16 --style raw
```
**SB, Sammy front centre with the backline behind. IN SHOT: Sammy only (the kit and amps empty behind him are out of focus; Rex comes in on the swap). Attach: Sammy hero.**
```
candid phone photo from the front edge of a huge open-air rock festival main stage on a summer afternoon, a singer standing centre stage facing the camera, dark brown straight shoulder-length hair parted in the middle, a short trimmed beard, a cream henley shirt and leather cord necklaces, a thin black headset microphone along his cheek, one arm out to the crowd, behind him soft and out of focus a black drum riser with a drum kit, tall amplifier stacks and a black backdrop under a truss roof, nobody else on stage, harsh afternoon sun, hard shadows, natural colours, unretouched, shot on iPhone, 35mm --ar 9:16 --style raw
```
