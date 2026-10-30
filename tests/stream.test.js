import assert from "node:assert/strict";
import test from "node:test";

import {
  DEFAULT_HEADERS,
  buildHeaders,
  registerHostRule,
  resetHostRules,
  ruleForUrl,
} from "../lib/stream/config.js";
import { detectStreamType, isPlayableStream, isTrailerUrl } from "../lib/stream/classify.js";

test("buildHeaders merges defaults, host rules and overrides", () => {
  resetHostRules();
  registerHostRule("media.example.com", {
    referer: "https://app.example.com/",
    origin: "https://app.example.com",
  });

  const headers = buildHeaders("https://media.example.com/video/master.m3u8", {
    "X-Trace": "abc",
    referer: "https://override.example.com/",
  });

  assert.equal(headers["user-agent"], DEFAULT_HEADERS["user-agent"]);
  assert.equal(headers.referer, "https://override.example.com/", "explicit override wins");
  assert.equal(headers.origin, "https://app.example.com");
  assert.equal(headers["x-trace"], "abc");
});

test("host rules apply to subdomains and are cleared by resetHostRules", () => {
  resetHostRules();
  registerHostRule("example.com", { referer: "https://example.com/" });

  assert.equal(ruleForUrl("https://a.b.example.com/x").referer, "https://example.com/");

  resetHostRules();
  assert.equal(buildHeaders("https://a.b.example.com/x").referer, undefined);
});

test("archive.org headers carry no referer", () => {
  resetHostRules();
  const headers = buildHeaders("https://archive.org/download/foo/bar.mp4");
  assert.equal(headers.referer, undefined);
  assert.match(headers["user-agent"], /Mozilla/);
});

test("trailers are detected by host and by name", () => {
  assert.equal(isTrailerUrl("https://www.youtube.com/embed/abc123"), true);
  assert.equal(isTrailerUrl("https://youtu.be/abc123"), true);
  assert.equal(isTrailerUrl("https://media.example.com/movie-trailer.mp4"), true);
  assert.equal(isTrailerUrl("https://media.example.com/film-fragman.mp4"), true);
  assert.equal(isTrailerUrl({ url: "https://media.example.com/a.mp4", isTrailer: true }), true);
  assert.equal(isTrailerUrl("https://archive.org/download/x/night_of_the_living_dead.mp4"), false);
});

test("stream types come from the extension, not the query string", () => {
  assert.equal(detectStreamType("https://cdn.example.com/a/master.m3u8?token=1&x=2"), "hls");
  assert.equal(detectStreamType("https://cdn.example.com/a/movie.mp4"), "mp4");
  assert.equal(detectStreamType("https://cdn.example.com/a/manifest.mpd"), "dash");
  assert.equal(detectStreamType("https://player.example.com/embed/abc"), "embed");
  assert.equal(detectStreamType({ url: "https://x.test/stream", type: "hls" }), "hls");
  assert.equal(isPlayableStream("embed"), false);
  assert.equal(isPlayableStream("hls"), true);
});
