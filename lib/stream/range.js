/**
 * Byte-range parsing for the local media route.
 * Kept out of the route file so it can be unit-tested without Next's runtime.
 */

/**
 * Parse a single `Range: bytes=start-end` header.
 * @param {string|null|undefined} header
 * @param {number} size total resource size in bytes
 * @returns {{ start:number, end:number } | { invalid:true } | null}
 */
export function parseRange(header, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(String(header || "").trim());
  if (!match) return null;

  const [, rawStart, rawEnd] = match;
  if (!rawStart && !rawEnd) return null;

  let start = rawStart ? Number(rawStart) : null;
  let end = rawEnd ? Number(rawEnd) : null;

  if (start === null) {
    // Suffix range: the final N bytes.
    const suffixLength = end;
    if (!suffixLength) return null;
    start = Math.max(size - suffixLength, 0);
    end = size - 1;
  } else if (end === null || end >= size) {
    end = size - 1;
  }

  if (start > end || start >= size) return { invalid: true };
  return { start, end };
}
