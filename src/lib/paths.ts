/**
 * Runtime helpers for building URLs that respect the active Vite `base`.
 *
 * `import.meta.env.BASE_URL` is populated by Vite from the `base` config
 * option (or `--base` CLI flag) and always ends with a trailing slash.
 * - Normal Lovable build:  BASE_URL === "/"
 * - Apache subfolder build: BASE_URL === "/newsite/"
 *
 * `withBase("/kontakt")` returns "/kontakt" or "/newsite/kontakt" accordingly.
 * `rewriteHtmlBase(html)` rewrites internal href/src attributes inside an
 * HTML string (used for CMS-style content such as news posts).
 */

function normalizedBase(): string {
  // Vite guarantees BASE_URL is defined and ends with "/".
  const raw = (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? "/";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

/** Strip trailing slash for use as a TanStack Router `basepath` value. */
export function routerBasePath(): string {
  const b = normalizedBase().replace(/\/+$/, "");
  return b === "" ? "/" : b;
}

/** True when running under a non-root base (i.e. the Apache subfolder build). */
export function isSubfolderBuild(): boolean {
  return normalizedBase() !== "/";
}

/** Prefix an internal absolute path (starting with "/") with the active base. */
export function withBase(path: string): string {
  if (!path) return normalizedBase();
  // Leave protocol-relative, absolute URLs, anchors, mailto and tel alone.
  if (/^(https?:)?\/\//i.test(path)) return path;
  if (path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("#")) return path;
  const base = normalizedBase();
  if (path === "/") return base;
  if (path.startsWith("/")) return `${base.replace(/\/$/, "")}${path}`;
  // Relative path — leave to the browser.
  return path;
}

/**
 * Rewrite href="/..." and src="/..." in an HTML string so internal links
 * resolve correctly under the active base. External URLs, mailto/tel,
 * anchors and paths that already start with the base are preserved.
 */
export function rewriteHtmlBase(html: string): string {
  const base = normalizedBase();
  if (base === "/") return html;
  const stripped = base.replace(/\/$/, "");
  return html.replace(/\b(href|src)="\/(?!\/)([^"]*)"/g, (match, attr, rest) => {
    if (rest.startsWith(stripped.slice(1) + "/") || rest === stripped.slice(1)) return match;
    return `${attr}="${stripped}/${rest}"`;
  });
}
