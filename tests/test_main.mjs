import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..');

test('main.ts copies VIDEO.json to the output dir', () => {
  const out = mkdtempSync(join(tmpdir(), 'gta6-clipper-out-'));
  try {
    execFileSync('node', ['main.ts'], {
      cwd: REPO,
      env: { ...process.env, MAKEFUN_BOT_DIR: REPO, MAKEFUN_OUTPUT_DIR: out },
      stdio: 'pipe',
    });
    const copied = JSON.parse(readFileSync(join(out, 'VIDEO.json'), 'utf8'));
    const original = JSON.parse(readFileSync(join(REPO, 'VIDEO.json'), 'utf8'));
    assert.deepEqual(copied, original);
    assert.equal(typeof copied.url, 'string');
  } finally {
    rmSync(out, { recursive: true, force: true });
  }
});

test('clip.mp4 exists, is 1080x1920 and ~32s', () => {
  const clip = join(REPO, 'clip.mp4');
  assert.ok(existsSync(clip), 'clip.mp4 must be bundled in the repo');
  const probe = JSON.parse(
    execFileSync(
      'ffprobe',
      ['-v', 'error', '-show_entries', 'stream=width,height,codec_name', '-show_entries', 'format=duration', '-of', 'json', clip],
      { encoding: 'utf8' },
    ),
  );
  const video = probe.streams.find((s) => s.width);
  assert.equal(video.width, 1080);
  assert.equal(video.height, 1920);
  const duration = Number(probe.format.duration);
  assert.ok(duration >= 30 && duration <= 35, `duration ${duration}s out of range`);
});

test('VIDEO.json is a JSON object with a url string', () => {
  const data = JSON.parse(readFileSync(join(REPO, 'VIDEO.json'), 'utf8'));
  assert.equal(typeof data.url, 'string');
  assert.ok(data.url.length > 0);
});

test('STRATEGY.md is non-blank', () => {
  const text = readFileSync(join(REPO, 'STRATEGY.md'), 'utf8').trim();
  assert.ok(text.length > 200, 'STRATEGY.md must be a real strategy note');
});
