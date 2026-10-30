/**
 * Provider registry.
 *
 * A provider is any object with:
 *   { name: string, label: string,
 *     search(query, options): Promise<Item[]>,
 *     getMedia(id): Promise<Media> }
 *
 * Adding a source = adding one file here. Providers must only target content
 * you own, are licensed to distribute, or that is explicitly free to share.
 */

import { internetArchiveProvider } from "./providers/internet-archive.js";
import { localLibraryProvider } from "./providers/local-library.js";

const registry = new Map();

export function registerProvider(provider) {
  if (!provider?.name) throw new Error("registerProvider: provider.name is required");
  if (typeof provider.getMedia !== "function") {
    throw new Error(`registerProvider: ${provider.name} is missing getMedia()`);
  }
  registry.set(provider.name, provider);
  return provider;
}

export function getProvider(name) {
  return registry.get(String(name || "")) || null;
}

export function listProviders() {
  return [...registry.values()].map(({ name, label }) => ({ name, label }));
}

registerProvider(internetArchiveProvider);
registerProvider(localLibraryProvider);

export default registry;
