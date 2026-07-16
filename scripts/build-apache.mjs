#!/usr/bin/env node
/**
 * Builds the static SPA for Apache subfolder deployment at
 * https://hpc-spg.hr/newsite/. See vite.apache.config.ts for the Vite side.
 *
 * Steps:
 *   1. Clean dist/apache/
 *   2. `vite build --config vite.apache.config.ts`
 *   3. Ensure dist/apache/index.html exists (copy _shell.html if needed)
 *   4. Write dist/apache/.htaccess (SPA fallback scoped to /newsite/)
 *   5. Write dist/apache/robots.txt (noindex staging)
 *   6. Write dist/apache/sitemap.xml with all current routes
 *   7. Fail hard if index.html is missing
 */
import { execSync } from "node:child_process";
import { existsSync, rmSync, cpSync, writeFileSync, readFileSync, readdirSync, renameSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "dist/apache");
const BASE_PATH = "/newsite/";
const SITE_ORIGIN = "https://hpc-spg.hr";

function log(msg) {
  console.log(`[build:apache] ${msg}`);
}

// 1. Clean
if (existsSync(OUT)) {
  log(`cleaning ${OUT}`);
  rmSync(OUT, { recursive: true, force: true });
}

// 2. Vite build
log("running vite build --config vite.apache.config.ts");
execSync("vite build --config vite.apache.config.ts", {
  stdio: "inherit",
  cwd: ROOT,
  env: { ...process.env, NODE_ENV: "production" },
});

// 2b. TanStack SPA emits into dist/apache/client/ (client bundle) and
//     dist/apache/server/ (prerender helper). Flatten client/ up to the
//     root and discard server/ — the static host only serves client assets.
const clientDir = resolve(OUT, "client");
const serverDir = resolve(OUT, "server");
if (existsSync(clientDir)) {
  log("flattening dist/apache/client/ → dist/apache/");
  for (const entry of readdirSync(clientDir)) {
    renameSync(resolve(clientDir, entry), resolve(OUT, entry));
  }
  rmSync(clientDir, { recursive: true, force: true });
}
if (existsSync(serverDir)) rmSync(serverDir, { recursive: true, force: true });

// 3. Ensure index.html — TanStack SPA emits _shell.html.
const indexHtml = resolve(OUT, "index.html");
const shellHtml = resolve(OUT, "_shell.html");
if (!existsSync(indexHtml)) {
  if (existsSync(shellHtml)) {
    log("copying _shell.html → index.html");
    cpSync(shellHtml, indexHtml);
  } else {
    console.error("[build:apache] FATAL: neither index.html nor _shell.html was produced.");
    console.error("Contents of dist/apache:");
    for (const f of readdirSync(OUT)) console.error("  ", f);
    process.exit(1);
  }
}

// 4. .htaccess
const htaccess = `# Apache SPA fallback for the HPC-SPG /newsite/ deployment.
# Scoped to /newsite/; does not affect WordPress in public_html/.

Options -MultiViews
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /newsite/

  # Serve real files and directories directly.
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Everything else falls back to the SPA shell.
  RewriteRule ^ /newsite/index.html [L]
</IfModule>

<IfModule mod_headers.c>
  Header set X-Robots-Tag "noindex, nofollow"
</IfModule>
`;
writeFileSync(resolve(OUT, ".htaccess"), htaccess);
log("wrote .htaccess");

// 5. robots.txt
writeFileSync(
  resolve(OUT, "robots.txt"),
  `# TEMPORARY staging deployment under /newsite/ — do not index.\nUser-agent: *\nDisallow: /newsite/\n`,
);
log("wrote robots.txt");

// 6. sitemap.xml — read news slugs from src/content/news.ts
const newsSource = readFileSync(resolve(ROOT, "src/content/news.ts"), "utf8");
const slugs = [...newsSource.matchAll(/^\s*slug:\s*"([^"]+)",/gm)].map((m) => m[1]);
log(`sitemap: ${slugs.length} news slugs`);

const staticRoutes = [
  "",
  "o-nama",
  "zasto-smo-bolji-izbor",
  "ponuda",
  "kontakt",
  "galerija",
  "vodic-za-suvlasnike",
  "korisni-linkovi-i-kontakti",
  "certifikat-bonitetne-izvrsnosti",
  "hitne-intervencije",
  "seminari",
  "upravljanje",
  "upravljanje/osnovni-pojmovi",
  "upravljanje/regulativa",
  "upravljanje/minimalna-visina-pricuve",
  "upravljanje/zajmovi-i-krediti",
  "upravljanje/toplinski-sustav-nove-obveze",
  "usluge",
  "usluge/upravljanje-zgradama",
  "usluge/obnova-od-potresa",
  "usluge/energetska-obnova",
  "usluge/upis-u-zemljisne-knjige",
  "usluge/financiranje-uredenja",
  "e-uplatnice",
  "e-financijski-izvjestaji",
  "dokumenti-zgrade",
  "novosti",
  "zahtjev",
  "korisnicki-podaci",
  "anketa",
  "impressum",
  "kolacici",
  "zastita-osobnih-podataka",
];

const urls = [
  ...staticRoutes.map((r) => `${SITE_ORIGIN}${BASE_PATH}${r}`),
  ...slugs.map((s) => `${SITE_ORIGIN}${BASE_PATH}novosti/${s}`),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>
`;
writeFileSync(resolve(OUT, "sitemap.xml"), sitemap);
log(`wrote sitemap.xml (${urls.length} URLs)`);

// 7. Final assertion
if (!existsSync(indexHtml)) {
  console.error("[build:apache] FATAL: dist/apache/index.html missing after build.");
  process.exit(1);
}
log(`OK — output ready at ${OUT}`);
