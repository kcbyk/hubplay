import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { ResolveError, resolveStreams } from "../lib/stream/resolver.js";
import {
  extractIframes,
  extractJsonLd,
  extractPlayerUrls,
  extractSourcesFromPage,
} from "../lib/stream/dom-scraper.js";

const fixtures = path.join(path.dirname(fileURLToPath(import.meta.url)), "fixtures");
const page = await fs.readFile(path.join(fixtures, "page.html"), "utf8");
const master = await fs.readFile(path.join(fixtures, "master.m3u8"), "utf8");

const media = {
  title: "Örnek Film",
  poster: "https://img.example.com/poster.jpg",
  year: 1922,
  sources: [
    { server: "Kanal A", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", isTrailer: true },
    { server: "Ana Sunucu", url: "https://media.example.com/hls/movie-1/master.m3u8" },
    { server: "Ana Sunucu", url: "https://media.example.com/hls/movie-1/master.m3u8" },
    { server: "Yedek", url: "https://media.example.com/files/movie-1.mp4", quality: "1080p" },
  ],
};

test("resolver returns the public contract and drops trailers", async () => {
  const payload = await resolveStreams({
    media,
    fetchPlaylist: async () => master,
    providerLabel: "Test",
    providerId: "test",
  });

  assert.equal(payload.title, "Örnek Film");
  assert.equal(payload.poster, "https://img.example.com/poster.jpg");
  assert.equal(payload.is_trailer, false);
  assert.equal(payload.sources.length, 2, "duplicate HLS entry collapsed");

  const [hls, mp4] = payload.sources;
  assert.equal(hls.type, "hls");
  assert.equal(hls.file, "https://edge.example.com/movie/1080p/index.m3u8?token=abc");
  assert.equal(hls.quality, "1080p");
  assert.equal(hls.variants.length, 3);
  assert.equal(hls.verified, true);

  assert.equal(mp4.type, "mp4");
  assert.equal(mp4.file, "https://media.example.com/files/movie-1.mp4");
  assert.equal(mp4.quality, "1080p");

  assert.equal(payload.meta.provider, "test");
  assert.equal(payload.meta.year, 1922);
});

test("maxHeight caps the chosen HLS rendition", async () => {
  const payload = await resolveStreams({
    media,
    maxHeight: 360,
    fetchPlaylist: async () => master,
  });

  assert.equal(payload.sources[0].quality, "360p");
});

test("an unreachable playlist is reported, not fatal", async () => {
  const payload = await resolveStreams({
    media,
    fetchPlaylist: async () => {
      throw new Error("boom");
    },
  });

  assert.equal(payload.sources[0].type, "hls");
  assert.equal(payload.sources[0].verified, false);
  assert.match(payload.sources[0].resolve_error, /boom/);
});

test("trailers can be requested explicitly", async () => {
  const payload = await resolveStreams({ media, includeTrailers: true, fetchPlaylist: async () => master });
  const trailer = payload.sources.find((source) => source.is_trailer);
  assert.ok(trailer, "trailer present when asked for");
  assert.equal(trailer.file, "https://www.youtube.com/embed/dQw4w9WgXcQ");
});

test("unknown hosts fall back to embed type", async () => {
  const payload = await resolveStreams({
    media: { title: "X", sources: [{ server: "Bilinmeyen", url: "https://player.example.com/e/123" }] },
  });
  assert.equal(payload.sources[0].type, "embed");
});

test("resolver rejects empty or malformed media", async () => {
  await assert.rejects(() => resolveStreams({}), ResolveError);
  await assert.rejects(
    () => resolveStreams({ media: { title: "Only trailer", sources: [{ url: "https://youtu.be/x" }] } }),
    /No playable source/,
  );
});

test("iframes are extracted with lazy attributes and trailer flags", () => {
  const iframes = extractIframes(page, "https://site.example.com/film/x/");

  assert.equal(iframes.length, 2, "about:blank iframe skipped");
  assert.equal(iframes[0].src, "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1");
  assert.equal(iframes[0].isTrailer, true);
  assert.equal(iframes[1].src, "https://media.example.com/embed/movie-1", "data-src resolved");
  assert.equal(iframes[1].isTrailer, false);
});

test("player config URLs are read without evaluation", () => {
  const urls = extractPlayerUrls(page, "https://site.example.com/film/x/");
  assert.deepEqual(
    urls.map((entry) => entry.url).sort(),
    [
      "https://media.example.com/files/movie-1-trailer.mp4",
      "https://media.example.com/hls/movie-1/master.m3u8",
    ],
  );
  assert.equal(urls.find((entry) => entry.url.endsWith("trailer.mp4")).isTrailer, true);
});

test("schema.org metadata is parsed", () => {
  const jsonLd = extractJsonLd(page);
  assert.equal(jsonLd.title, "Örnek Film");
  assert.equal(jsonLd.year, "1922");
  assert.equal(jsonLd.trailer, "https://www.youtube.com/embed/dQw4w9WgXcQ");
});

test("page sources put the main feature before the trailer", () => {
  const sources = extractSourcesFromPage(page, "https://site.example.com/film/x/");
  assert.equal(sources.at(-1).isTrailer, true);
  assert.equal(sources[0].isTrailer, false);
});
