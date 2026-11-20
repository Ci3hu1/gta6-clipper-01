// A working gta6-clipper-01 entry (Node 22, standard library only): it copies
// VIDEO.json from the repository root to /output/VIDEO.json, where the gate
// reads it, and also copies the rendered clip (clip.mp4) when present. That is
// all the program has to do. The entry is the video itself: the agent finds a
// GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube
// as a public Short with the bounty's line and the play code in its
// description, VIDEO.json names the video, and the house reads the video's
// views from YouTube. Nothing this program writes about the video is scored.
//
// The VIDEO.json shipped here holds the kit starter's placeholder address, so
// the gate refuses it as it stands (valid 0). Replace it with the real
// YouTube Shorts address after the clip is posted public, then submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The rendered clip rides along for inspection; the gate scores only the
// YouTube video named in VIDEO.json, never this file.
const clip = join(BOT_DIR, 'clip.mp4');
if (existsSync(clip)) {
  copyFileSync(clip, join(OUTPUT_DIR, 'clip.mp4'));
}
