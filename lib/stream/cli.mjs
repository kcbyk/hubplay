#!/usr/bin/env node
/**
 * Stream layer CLI.
 *
 *   node lib/stream/cli.mjs providers
 *   node lib/stream/cli.mjs search "metropolis" [--provider internet-archive] [--limit 10] [--json]
 *   node lib/stream/cli.mjs resolve internet-archive night_of_the_living_dead [--max-height 720] [--trailers] [--json]
 *   node lib/stream/cli.mjs resolve url https://example.com/master.m3u8
 *   node lib/stream/cli.mjs playlist https://example.com/master.m3u8
 *
 * Only aim this at content you own, are licensed to distribute, or that is
 * explicitly free to share.
 */

import process from "node:process";

import { getProvider, listProviders } from "./registry.js";
import { resolveFromProvider, resolveStreams } from "./resolver.js";
import { parsePlaylist } from "./hls.js";
import { requestText } from "./http.js";

function parseArgs(argv) {
  const positional = [];
  const flags = {};

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg.startsWith("--")) {
      const [rawKey, inlineValue] = arg.slice(2).split("=");
      const key = rawKey.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      if (inlineValue !== undefined) {
        flags[key] = inlineValue;
      } else if (argv[i + 1] && !argv[i + 1].startsWith("--")) {
        flags[key] = argv[i + 1];
        i += 1;
      } else {
        flags[key] = true;
      }
      continue;
    }
    positional.push(arg);
  }

  return { positional, flags };
}

function printTable(rows, columns) {
  if (rows.length === 0) {
    console.log("(sonuç yok)");
    return;
  }

  const widths = columns.map((column) =>
    Math.max(column.label.length, ...rows.map((row) => String(column.value(row) ?? "").length)),
  );

  const header = columns.map((column, index) => column.label.padEnd(widths[index])).join("  ");
  console.log(header);
  console.log(widths.map((width) => "─".repeat(width)).join("  "));
  for (const row of rows) {
    console.log(
      columns.map((column, index) => String(column.value(row) ?? "").padEnd(widths[index])).join("  "),
    );
  }
}

const commands = {
  providers() {
    printTable(listProviders(), [
      { label: "NAME", value: (item) => item.name },
      { label: "LABEL", value: (item) => item.label },
    ]);
  },

  async search(positional, flags) {
    const query = positional.join(" ").trim();
    const providerName = flags.provider || "internet-archive";
    const provider = getProvider(providerName);
    if (!provider) throw new Error(`Unknown provider "${providerName}"`);

    const items = await provider.search(query, { limit: Number(flags.limit) || 12 });

    if (flags.json) {
      console.log(JSON.stringify(items, null, 2));
      return;
    }

    printTable(items, [
      { label: "ID", value: (item) => item.id },
      { label: "BAŞLIK", value: (item) => item.title.slice(0, 48) },
      { label: "YIL", value: (item) => item.year || "—" },
    ]);
  },

  async resolve(positional, flags) {
    const [providerName, ...rest] = positional;
    if (!providerName || rest.length === 0) {
      throw new Error("Usage: resolve <provider|url> <id|url>");
    }

    const id = rest.join(" ");
    const options = {
      includeTrailers: Boolean(flags.trailers),
      maxHeight: Number(flags.maxHeight) || undefined,
    };

    let payload;
    if (providerName === "url") {
      payload = await resolveStreams({
        media: { title: id.split("/").pop() || id, poster: null, sources: [{ server: "URL", url: id }] },
        ...options,
      });
    } else {
      const provider = getProvider(providerName);
      if (!provider) throw new Error(`Unknown provider "${providerName}"`);
      payload = await resolveFromProvider(provider, id, options);
    }

    if (flags.json) {
      console.log(JSON.stringify(payload, null, 2));
      return;
    }

    console.log(`\n${payload.title}${payload.meta?.year ? ` (${payload.meta.year})` : ""}`);
    if (payload.poster) console.log(payload.poster);
    console.log(`is_trailer: ${payload.is_trailer}`);
    printTable(payload.sources, [
      { label: "SUNUCU", value: (item) => item.server },
      { label: "TIP", value: (item) => item.type },
      { label: "KALITE", value: (item) => item.quality || "—" },
      { label: "DOSYA", value: (item) => item.file },
    ]);

    if (flags.out) {
      const { writeFile } = await import("node:fs/promises");
      await writeFile(flags.out, JSON.stringify(payload, null, 2), "utf8");
      console.log(`\n→ ${flags.out}`);
    }
  },

  async playlist(positional) {
    const url = positional[0];
    if (!url) throw new Error("Usage: playlist <url>");

    const text = await requestText(url);
    const playlist = parsePlaylist(text, url);

    if (playlist.isMaster) {
      console.log(`Master playlist — ${playlist.variants.length} varyant, ${playlist.renditions.length} rendition`);
      printTable(playlist.variants, [
        { label: "KALITE", value: (item) => item.quality || "—" },
        { label: "BANDWIDTH", value: (item) => item.bandwidth || "—" },
        { label: "CODECS", value: (item) => item.codecs || "—" },
        { label: "URI", value: (item) => item.uri },
      ]);
      return;
    }

    console.log(
      `Media playlist — ${playlist.segments.length} segment, ${Math.round(playlist.totalDuration)}s, target ${playlist.targetDuration}s`,
    );
  },
};

async function main() {
  const { positional, flags } = parseArgs(process.argv.slice(2));
  const [command, ...rest] = positional;

  if (!command || command === "--help" || flags.help) {
    console.log(`HubPlay stream CLI

  providers
  search <query> [--provider internet-archive] [--limit 10] [--json]
  resolve <provider|url> <id|url> [--max-height 720] [--trailers] [--json] [--out file.json]
  playlist <url>
`);
    return;
  }

  const handler = commands[command];
  if (!handler) throw new Error(`Unknown command "${command}"`);

  await handler(rest, flags);
}

main().catch((error) => {
  console.error(`\n✖ ${error.message}`);
  if (process.env.DEBUG) console.error(error);
  process.exitCode = 1;
});
