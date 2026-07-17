#!/usr/bin/env node
/**
 * Builds the static SPA for Apache root-domain deployment at
 * https://hpc-spg.hr/. See vite.apache.root.config.ts.
 *
 * The generated .htaccess preserves an existing WordPress installation:
 * wp-admin, wp-login.php, wp-content, wp-includes, wp-json and any other
 * real file/directory are served normally; every other URL falls back to
 * the SPA's index.html.
 */
import { execSync } from "node:child_process";
import { existsSync, rmSync, cpSync, writeFileSync, readFileSync, readdirSync, renameSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "dist/apache-root");
const SITE_ORIGIN = "https://hpc-spg.hr";

function log(msg) {
  console.log(`[build:apache:root] ${msg}`);
}

// 1. Clean
if (existsSync(OUT)) {
  log(`cleaning ${OUT}`);
  rmSync(OUT, { recursive: true, force: true });
}

// 2. Vite build
log("running vite build --config vite.apache.root.config.ts");
execSync("vite build --config vite.apache.root.config.ts", {
  stdio: "inherit",
  cwd: ROOT,
  env: { ...process.env, NODE_ENV: "production" },
});

// 2b. Flatten TanStack SPA client/ output up to OUT; discard server/.
const clientDir = resolve(OUT, "client");
const serverDir = resolve(OUT, "server");
if (existsSync(clientDir)) {
  log("flattening dist/apache-root/client/ → dist/apache-root/");
  for (const entry of readdirSync(clientDir)) {
    renameSync(resolve(clientDir, entry), resolve(OUT, entry));
  }
  rmSync(clientDir, { recursive: true, force: true });
}
if (existsSync(serverDir)) rmSync(serverDir, { recursive: true, force: true });

// 3. Ensure index.html — copy from _shell.html if needed.
const indexHtml = resolve(OUT, "index.html");
const shellHtml = resolve(OUT, "_shell.html");
if (!existsSync(indexHtml)) {
  if (existsSync(shellHtml)) {
    log("copying _shell.html → index.html");
    cpSync(shellHtml, indexHtml);
  } else {
    console.error("[build:apache:root] FATAL: neither index.html nor _shell.html was produced.");
    console.error("Contents of dist/apache-root:");
    for (const f of readdirSync(OUT)) console.error("  ", f);
    process.exit(1);
  }
}

// 4. .htaccess — WordPress-preserving SPA fallback.
const htaccess = `# Apache root-domain deployment for HPC-SPG.
# Preserves an existing WordPress install at the same document root:
# wp-admin, wp-login.php, wp-content, wp-includes, wp-json and any real
# file or directory are served as-is. Everything else falls back to the
# static SPA's index.html.

Options -MultiViews
DirectoryIndex index.html index.php

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # WordPress REST API — route through WP's front controller.
  RewriteRule ^wp-json/?$ index.php?rest_route=/ [QSA,L]
  RewriteRule ^wp-json/(.*)$ index.php?rest_route=/$1 [QSA,L]

  # Serve real files and directories (assets, documents, wp-admin,
  # wp-login.php, wp-content, wp-includes, any existing PHP file, ...).
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Everything else is a SPA route.
  RewriteRule ^ index.html [L]
</IfModule>
`;
writeFileSync(resolve(OUT, ".htaccess"), htaccess);
log("wrote .htaccess (WordPress-preserving)");

// 5. robots.txt — indexable production site.
writeFileSync(
  resolve(OUT, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`,
);
log("wrote robots.txt");

// 6. sitemap.xml — read news slugs from src/content/news.ts.
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
  ...staticRoutes.map((r) => `${SITE_ORIGIN}/${r}`.replace(/\/$/, r === "" ? "/" : "")),
  ...slugs.map((s) => `${SITE_ORIGIN}/novosti/${s}`),
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
  console.error("[build:apache:root] FATAL: dist/apache-root/index.html missing after build.");
  process.exit(1);
}
log(`OK — output ready at ${OUT}`);
