/**
 * Local media library provider.
 *
 * Point `MEDIA_ROOT` at a folder of files you own and HubPlay serves them
 * through `/api/local/...` with HTTP Range support, so seeking works exactly
 * like a normal video host.
 *
 * Layout (all optional metadata):
 *
 *   media/
 *     Nosferatu (1922)/
 *       meta.json           { "title": "...", "poster": "https://...", "imdb": "7.9" }
 *       nosferatu.mp4
 *       nosferatu.m3u8      (any HLS variant/segment files alongside it)
 *     short-film.webm
 */

import fs from "node:fs/promises";
import path from "node:path";

const VIDEO_EXTENSIONS = new Set([".mp4", ".m4v", ".webm", ".mkv", ".mov", ".m3u8"]);

export function mediaRoot() {
  return path.resolve(process.env.MEDIA_ROOT || path.join(process.cwd(), "media"));
}

/**
 * Join `relative` onto `root`, refusing anything that escapes it.
 * Exported because it is the security-critical bit and deserves a test.
 */
export function resolveWithinRoot(root, relative) {
  const absoluteRoot = path.resolve(root);
  const cleaned = String(relative || "").replace(/^[/\\]+/, "");
  const target = path.resolve(absoluteRoot, cleaned);

  if (target !== absoluteRoot && !target.startsWith(absoluteRoot + path.sep)) {
    throw new Error("Path escapes media root");
  }
  return target;
}

function titleFromName(name) {
  return path
    .basename(name, path.extname(name))
    .replace(/[._]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function toServeUrl(relativePath) {
  const segments = relativePath.split(path.sep).filter(Boolean).map(encodeURIComponent);
  return `/api/local/${segments.join("/")}`;
}

function isVideo(name) {
  return VIDEO_EXTENSIONS.has(path.extname(name).toLowerCase());
}

async function readMeta(directory) {
  try {
    const raw = await fs.readFile(path.join(directory, "meta.json"), "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function sourcesFromDirectory(directory, relativeDirectory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && isVideo(entry.name))
    .map((entry) => ({
      server: "Yerel Kütüphane",
      url: toServeUrl(path.join(relativeDirectory, entry.name)),
      isTrailer: /trailer|fragman|teaser/i.test(entry.name),
      name: entry.name,
    }))
    // Main feature first, trailers last, then alphabetical.
    .sort((a, b) => Number(a.isTrailer) - Number(b.isTrailer) || a.name.localeCompare(b.name))
    .map(({ name, ...source }) => source);
}

async function describeEntry(root, entry) {
  const absolute = path.join(root, entry.name);

  if (entry.isFile()) {
    if (!isVideo(entry.name)) return null;
    return {
      id: entry.name,
      title: titleFromName(entry.name),
      poster: null,
      year: null,
      sources: [
        {
          server: "Yerel Kütüphane",
          url: toServeUrl(entry.name),
          isTrailer: /trailer|fragman|teaser/i.test(entry.name),
        },
      ],
    };
  }

  if (!entry.isDirectory()) return null;

  const meta = await readMeta(absolute);
  const sources = await sourcesFromDirectory(absolute, entry.name);
  if (sources.length === 0) return null;

  return {
    id: entry.name,
    title: meta.title || titleFromName(entry.name),
    poster: meta.poster || null,
    year: meta.year || null,
    imdb: meta.imdb || null,
    description: meta.description || null,
    sources,
  };
}

export const localLibraryProvider = {
  name: "local",
  label: "Yerel Kütüphane",

  async search(query = "", { limit = 50 } = {}) {
    const root = mediaRoot();
    let entries;
    try {
      entries = await fs.readdir(root, { withFileTypes: true });
    } catch {
      return [];
    }

    const needle = String(query).toLowerCase().trim();
    const items = [];

    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const item = await describeEntry(root, entry);
      if (!item) continue;
      if (needle && !item.title.toLowerCase().includes(needle)) continue;
      items.push({
        id: item.id,
        title: item.title,
        year: item.year,
        poster: item.poster,
        imdb: item.imdb,
        description: item.description,
      });
      if (items.length >= limit) break;
    }

    return items;
  },

  async getMedia(id) {
    if (!id) throw new Error("localLibraryProvider.getMedia: id required");

    const root = mediaRoot();
    const decoded = decodeURIComponent(String(id));
    const target = resolveWithinRoot(root, decoded);
    const stat = await fs.stat(target);

    if (stat.isFile()) {
      if (!isVideo(target)) throw new Error(`Not a playable file: ${decoded}`);
      const relative = path.relative(root, target);
      return {
        id: decoded,
        providerId: this.name,
        title: titleFromName(target),
        poster: null,
        year: null,
        imdb: null,
        description: null,
        sources: [
          {
            server: this.label,
            url: toServeUrl(relative),
            isTrailer: /trailer|fragman|teaser/i.test(target),
          },
        ],
      };
    }

    if (!stat.isDirectory()) throw new Error(`Unsupported entry: ${decoded}`);

    const meta = await readMeta(target);
    const relative = path.relative(root, target);
    const sources = await sourcesFromDirectory(target, relative);

    return {
      id: decoded,
      providerId: this.name,
      title: meta.title || titleFromName(target),
      poster: meta.poster || null,
      year: meta.year || null,
      imdb: meta.imdb || null,
      description: meta.description || null,
      sources,
    };
  },
};

export default localLibraryProvider;
