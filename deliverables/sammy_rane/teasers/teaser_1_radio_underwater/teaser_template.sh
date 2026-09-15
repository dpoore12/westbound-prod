#!/usr/bin/env bash
# SAMMY RANE TEASER 1 — LOCKED ASSEMBLY TEMPLATE
# Only STAGE_CLIP changes; everything else is locked.
#
# Usage: STAGE_CLIP=/path/to/new_stage.mp4 OUT=teaser1_v19.mp4 bash teaser_template.sh

set -euo pipefail
cd /home/user/workspace

INTRO="${INTRO:-uploaded_attachments/f6e695f0458c44cd88313a6034f1cc94/teaser1_v1_with_footage.mp4}"
SONG="${SONG:-uploaded_attachments/e9e734fe5d034ce88aa85a1b06a4fc76/Radio-Underwater-Sammy-Rane-and-Westbound.wav}"
SONG_START="${SONG_START:-26.5}"
VO_SNAKE="${VO_SNAKE:-vo4/02_snake.mp3}"
VO_FRIEND="${VO_FRIEND:-vo4/03_friend_v3.mp3}"
VO_ANN="${VO_ANN:-ann_orus.mp3}"
STAGE_CLIP="${STAGE_CLIP:-kling_stage_v2.mp4}"
OUT="${OUT:-teaser1_v19.mp4}"

ffmpeg -y \
  -i "$INTRO" \
  -ss "$SONG_START" -i "$SONG" \
  -i "$VO_SNAKE" \
  -i "$VO_FRIEND" \
  -i "$VO_ANN" \
  -i "$STAGE_CLIP" \
  -filter_complex "\
[0:v]trim=0:30,setpts=PTS-STARTPTS,eq=brightness='if(between(t,21.5,29.5),-0.20-((t-21.5)/8)*0.15,0)':contrast='if(between(t,21.5,29.5),0.75,1)':saturation='if(between(t,21.5,29.5),0.60,1)':eval=frame,vignette=angle=PI/5:mode=forward,scale=2520:1080,setsar=1[v_intro];\
[5:v]scale=2520:1080:force_original_aspect_ratio=increase,crop=2520:1080,setsar=1,tpad=stop_mode=clone:stop_duration=5,fade=t=out:st=13:d=2[v_stage_raw];\
[v_intro][v_stage_raw]concat=n=2:v=1:a=0,drawtext=text='SAMMY RANE':fontfile=/usr/share/fonts/truetype/dejavu/DejaVu-Sans-Bold.ttf:fontsize=280:fontcolor=white:borderw=6:bordercolor=black:x=(w-text_w)/2:y=(h-text_h)/2:alpha='if(lt(t,38.5),0,if(lt(t,39.5),(t-38.5)/1.0,if(lt(t,43),1,if(lt(t,45),1-(t-43)/2,0))))'[v];\
[0:a]atrim=0:30,asetpts=PTS-STARTPTS,volume=1.0,apad=whole_dur=45[origaudio];\
[1:a]atrim=0:45,asetpts=PTS-STARTPTS,volume='if(lt(t,15),0.10,if(lt(t,25),0.10+((t-15)/10)*0.20,if(lt(t,35),0.30+((t-25)/10)*0.25,0.60)))':eval=frame,afade=t=in:st=0:d=1.5,afade=t=out:st=43:d=2[song];\
[2:a]highpass=f=200,lowpass=f=3500,aecho=0.4:0.7:80:0.15,adelay=13000|13000,volume=0.7[voSnake];\
[3:a]highpass=f=200,lowpass=f=3500,aecho=0.3:0.5:60:0.1,adelay=22000|22000,volume=0.75[voFriend];\
[4:a]highpass=f=100,aecho=0.5:0.75:150|280:0.35|0.25,adelay=38500|38500,volume=1.3[voAnnouncer];\
[origaudio][song][voSnake][voFriend][voAnnouncer]amix=inputs=5:duration=first:normalize=0[mixed]" \
  -map "[v]" -map "[mixed]" \
  -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -r 24 \
  -c:a aac -b:a 192k -t 45 \
  "$OUT"

echo "Built: $OUT"
