/**
 * Internet Archive provider.
 *
 * A legitimate, no-API-key catalogue of public-domain and openly licensed
 * cinema: the `feature_films`, `silent_films`, `classic_tv` and `moviesandfilms`
 * collections. Metadata comes from the public advanced-search and
 * `/metadata/<identifier>` endpoints; playback URLs point at archive.org's own
 * derivative files.
 *
 * Docs: https://archive.org/advancedsearch.php and https://archive.org/developers/md-read.html
 */

import { requestJson } from "../http.js";

const SEARCH_ENDPOINT = "https://archive.org/advancedsearch.php";
const METADATA_ENDPOINT = "https://archive.org/metadata";
const THUMB_ENDPOINT = "https://archive.org/services/img";

const DEFAULT_COLLECTION = "feature_films";

/** Formats archive.org derives that are worth offering, in preference order. */
const VIDEO_FORMAT_PREFERENCE = [
  { test: /h\.?264|mpeg4|mp4/i, score: 100 },
  { test: /^512kb mpeg4$/i, score: 90 },
  { test: /matroska|webm/i, score: 70 },
  { test: /ogg video|theora/i, score: 40 },
];

const VIDEO_EXTENSIONS = [".mp4", ".m4v", ".webm", ".ogv", ".mkv", ".mov"];

function coerceText(value) {
  if (Array.isArray(value)) return value.filter(Boolean).join(" ");
  return value == null ? "" : String(value);
}

function stripHtml(value) {
  return coerceText(value)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(value, length = 400) {
  if (!value) return "";
  return value.length <= length ? value : `${value.slice(0, length - 1).trimEnd()}…`;
}

function scoreVideoFile(file) {
  const name = String(file.name || "").toLowerCase();
  const format = String(file.format || "");

  for (const rule of VIDEO_FORMAT_PREFERENCE) {
    if (rule.test.test(format) || rule.test.test(name)) return rule.score;
  }
  return 10;
}

function isVideoFile(file) {
  const name = String(file.name || "").toLowerCase();
  if (!VIDEO_EXTENSIONS.some((extension) => name.endsWith(extension))) return false;
  // Skip generated thumbnails that share a video extension.
  if (/thumb|sample|preview\.gif/.test(name)) return false;
  return true;
}

function toNumber(value) {
  const number = Number.parseFloat(value);
  return Number.isFinite(number) ? number : null;
}

function normaliseSearchDoc(doc) {
  const identifier = doc.identifier;
  return {
    id: identifier,
    title: stripHtml(doc.title || identifier),
    year: doc.year ? String(doc.year).slice(0, 4) : null,
    imdb: null, // archive.org does not expose ratings; kept for schema parity
    poster: `${THUMB_ENDPOINT}/${encodeURIComponent(identifier)}`,
    description: truncate(stripHtml(doc.description), 280),
    downloads: doc.downloads ?? null,
    url: `https://archive.org/details/${identifier}`,
  };
}

export const internetArchiveProvider = {
  name: "internet-archive",
  label: "Internet Archive",

  /**
   * @param {string} query free-text search
   * @param {{ limit?: number, page?: number, collection?: string|null,
   *           year?: string|number|null }} [options]
   */
  async search(query, options = {}) {
    const {
      limit = 24,
      page = 1,
      collection = DEFAULT_COLLECTION,
      year = null,
    } = options;

    const clauses = ["mediatype:movies"];
    if (collection) clauses.push(`collection:(${collection})`);
    if (year) clauses.push(`year:${year}`);
    if (query && query.trim()) clauses.push(query.trim());

    const params = new URLSearchParams();
    params.set("q", clauses.join(" AND "));
    params.set("rows", String(Math.min(Math.max(limit, 1), 100)));
    params.set("page", String(Math.max(page, 1)));
    params.set("output", "json");
    for (const field of ["identifier", "title", "year", "description", "downloads"]) {
      params.append("fl[]", field);
    }
    params.append("sort[]", "downloads desc");

    const { data } = await requestJson(`${SEARCH_ENDPOINT}?${params.toString()}`);

    const docs = data?.response?.docs;
    if (!Array.isArray(docs)) return [];

    return docs.filter((doc) => doc?.identifier).map(normaliseSearchDoc);
  },

  /** @param {string} identifier archive.org item identifier */
  async getMedia(identifier) {
    if (!identifier) throw new Error("internetArchiveProvider.getMedia: identifier required");

    const { data } = await requestJson(`${METADATA_ENDPOINT}/${encodeURIComponent(identifier)}`);
    const metadata = data?.metadata;
    if (!metadata) throw new Error(`No archive.org item named "${identifier}"`);

    const files = Array.isArray(data.files) ? data.files : [];

    const playable = files
      .filter(isVideoFile)
      .map((file) => ({ file, score: scoreVideoFile(file) }))
      .sort((a, b) => b.score - a.score || toNumber(b.file.size) - toNumber(a.file.size))
      .slice(0, 4)
      .map(({ file }) => ({
        server: "Internet Archive",
        url: `https://archive.org/download/${encodeURIComponent(identifier)}/${encodeURIComponent(file.name)}`,
        isTrailer: /trailer|teaser|fragman/i.test(String(file.name)),
        size: toNumber(file.size) ?? undefined,
        language: metadata.language ? coerceText(metadata.language).split(/[,;]/)[0].trim() : undefined,
      }));

    return {
      id: identifier,
      providerId: this.name,
      title: stripHtml(metadata.title || identifier),
      poster: `${THUMB_ENDPOINT}/${encodeURIComponent(identifier)}`,
      year: metadata.year || (metadata.date ? String(metadata.date).slice(0, 4) : null),
      imdb: null,
      description: truncate(stripHtml(metadata.description), 600),
      sources: playable,
    };
  },
};

export default internetArchiveProvider;
