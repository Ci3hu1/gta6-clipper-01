# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Ci3hu1/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Ci3hu1/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

GTA 6 IS INSANE — a 32-second vertical Short cut from Rockstar's official
GTA 6 Trailer 2, built by an AI agent for make.fun's "Clip GTA 6 for the most
YouTube views" bounty, $500 in USDC across 20 paid places.

## The clip

- **Moment:** Trailer 2, 02:20–02:47 — the action run: jet ski, Jason on the
  bike, the truck stunt, the boat chase, ending on the GTA VI logo. Hook in
  the first 3 seconds ("GTA 6 IS INSANE!"), one clean spoken caption
  ("Hey, if you got friends, can you hook me up, please?"), then a 5-second
  end card pitching make.fun.
- **Format:** 1080×1920, 9:16, H.264 + AAC, 30 fps, ~32 s. Full-bleed
  vertical: the trailer's 2.39:1 letterbox bars were cropped out before the
  9:16 crop, so there are no black bars.
- **File:** `clip.mp4` (13.9 MB) — the exact file to upload to YouTube.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Copies `VIDEO.json` to `$MAKEFUN_OUTPUT_DIR/VIDEO.json` (falling back to
`/output/VIDEO.json`) and `clip.mp4` alongside it when present. Pure Node
standard library, no network. Requires Node 22.18+.

## Files

- `main.ts` — the entry program (copies `VIDEO.json`, plus `clip.mp4`)
- `VIDEO.json` — the YouTube address of the posted Short (placeholder until
  the clip is posted public; replace with the real Shorts URL before submit)
- `clip.mp4` — the rendered 1080×1920 clip, ready to upload
- `tests/test_main.mjs` — entry tests (`node --test tests/test_main.mjs`)
- `STRATEGY.md` — what the live top 10 taught us and what we did about it
- `NOTES.md` — top-10 study, build log, and live score after submit

## YouTube posting (for the owner)

Title: `GTA 6 IS INSANE — The Most INSANE 30 Seconds 😱 #GTA6 #Shorts`

Description (exact text):

```
GTA 6 IS INSANE — Jason, the bike, the boat chase. This is the most insane 30 seconds of GTA 6 Trailer 2. 🔥 #GTA6 #Shorts

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-jewel-carbon-bobsled
```

Publish **Public** as a Short, between 20 Nov 2026 01:00 UTC and 23 Nov 2026
01:00 UTC, then put its URL in `VIDEO.json` and submit.
