import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { parseRange } from "../lib/stream/range.js";
import { localLibraryProvider, resolveWithinRoot } from "../lib/stream/providers/local-library.js";

test("resolveWithinRoot allows nested paths and blocks escapes", () => {
  const root = path.resolve("/tmp/media");

  assert.equal(resolveWithinRoot(root, "movies/a.mp4"), path.join(root, "movies/a.mp4"));
  assert.equal(resolveWithinRoot(root, "/movies/a.mp4"), path.join(root, "movies/a.mp4"));
  assert.throws(() => resolveWithinRoot(root, "../secret.mp4"), /escapes/);
  assert.throws(() => resolveWithinRoot(root, "movies/../../secret.mp4"), /escapes/);
});

test("parseRange handles open, closed, suffix and invalid ranges", () => {
  assert.deepEqual(parseRange("bytes=0-499", 1000), { start: 0, end: 499 });
  assert.deepEqual(parseRange("bytes=500-", 1000), { start: 500, end: 999 });
  assert.deepEqual(parseRange("bytes=-200", 1000), { start: 800, end: 999 });
  assert.deepEqual(parseRange("bytes=900-5000", 1000), { start: 900, end: 999 });
  assert.deepEqual(parseRange("bytes=1000-", 1000), { invalid: true });
  assert.equal(parseRange("bytes=abc", 1000), null);
  assert.equal(parseRange(undefined, 1000), null);
});

test("local provider indexes a directory and exposes playable sources", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "hubplay-media-"));
  const previousRoot = process.env.MEDIA_ROOT;
  process.env.MEDIA_ROOT = root;

  try {
    await fs.mkdir(path.join(root, "Nosferatu (1922)"));
    await fs.writeFile(
      path.join(root, "Nosferatu (1922)", "meta.json"),
      JSON.stringify({ title: "Nosferatu", year: "1922", imdb: "7.9" }),
    );
    await fs.writeFile(path.join(root, "Nosferatu (1922)", "nosferatu.mp4"), "fake");
    await fs.writeFile(path.join(root, "Nosferatu (1922)", "nosferatu-trailer.mp4"), "fake");
    await fs.writeFile(path.join(root, "notes.txt"), "ignored");

    const results = await localLibraryProvider.search("nosf");
    assert.equal(results.length, 1);
    assert.equal(results[0].title, "Nosferatu");

    const item = await localLibraryProvider.getMedia("Nosferatu (1922)");
    assert.equal(item.sources.length, 2);
    assert.equal(item.sources[0].url, "/api/local/Nosferatu%20(1922)/nosferatu.mp4");
    assert.equal(item.sources[1].isTrailer, true);

    await assert.rejects(() => localLibraryProvider.getMedia("../etc/passwd"), /escapes/);
  } finally {
    if (previousRoot === undefined) delete process.env.MEDIA_ROOT;
    else process.env.MEDIA_ROOT = previousRoot;
    await fs.rm(root, { recursive: true, force: true });
  }
});
