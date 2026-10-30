import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  parseAttributeList,
  parsePlaylist,
  pickBestVariant,
} from "../lib/stream/hls.js";

const fixtures = path.join(path.dirname(fileURLToPath(import.meta.url)), "fixtures");
const read = (name) => fs.readFile(path.join(fixtures, name), "utf8");

test("attribute lists respect quoted commas", () => {
  const attrs = parseAttributeList('BANDWIDTH=1,CODECS="avc1.4d401f,mp4a.40.2",RESOLUTION=1280x720');
  assert.equal(attrs.BANDWIDTH, "1");
  assert.equal(attrs.CODECS, "avc1.4d401f,mp4a.40.2");
  assert.equal(attrs.RESOLUTION, "1280x720");
});

test("master playlist resolves variants and renditions to absolute URLs", async () => {
  const playlist = parsePlaylist(await read("master.m3u8"), "https://media.example.com/hls/master.m3u8");

  assert.equal(playlist.isMaster, true);
  assert.equal(playlist.variants.length, 3);
  assert.equal(playlist.variants[0].uri, "https://media.example.com/hls/360p/index.m3u8");
  assert.equal(playlist.variants[1].quality, "720p");
  assert.equal(playlist.variants[2].uri, "https://edge.example.com/movie/1080p/index.m3u8?token=abc");
  assert.equal(playlist.variants[0].codecs, "avc1.42e01e,mp4a.40.2");

  assert.equal(playlist.renditions.length, 2);
  assert.equal(playlist.renditions[0].uri, "https://media.example.com/hls/audio/tr/index.m3u8");
  assert.equal(playlist.renditions[0].language, "tr");
  assert.equal(playlist.renditions[1].uri, "https://cdn.example.com/subs/en.m3u8");
});

test("pickBestVariant prefers the highest quality, and honours a cap", async () => {
  const { variants } = parsePlaylist(await read("master.m3u8"), "https://media.example.com/hls/master.m3u8");

  assert.equal(pickBestVariant(variants).quality, "1080p");
  assert.equal(pickBestVariant(variants, { maxHeight: 800 }).quality, "720p");
  assert.equal(pickBestVariant(variants, { maxHeight: 100 }).quality, "360p", "falls back to the smallest");
  assert.equal(pickBestVariant([]), null);
});

test("media playlist exposes segments, duration and end-of-list", async () => {
  const playlist = parsePlaylist(await read("media.m3u8"), "https://media.example.com/hls/720p/index.m3u8");

  assert.equal(playlist.isMaster, false);
  assert.equal(playlist.segments.length, 3);
  assert.equal(playlist.targetDuration, 6);
  assert.equal(playlist.endList, true);
  assert.equal(playlist.segments[0].uri, "https://media.example.com/hls/720p/seg-0.ts");
  assert.equal(playlist.segments[1].uri, "https://edge.example.com/movie/seg-1.ts");
  assert.equal(playlist.segments[2].uri, "https://media.example.com/hls/shared/seg-2.ts");
  assert.equal(playlist.totalDuration, 16.5);
});

test("non-playlist input is rejected", () => {
  assert.throws(() => parsePlaylist("<html></html>", "https://x.test/"), /#EXTM3U/);
});
