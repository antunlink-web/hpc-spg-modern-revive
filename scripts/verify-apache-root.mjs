#!/usr/bin/env node
/** Sanity-checks the dist/apache-root/ output produced by build-apache-root.mjs. */
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist/apache-root");

const required = ["index.html", ".htaccess", "favicon.png", "robots.txt", "sitemap.xml"];
const requiredDirs = ["assets"];

let ok = true;
function fail(msg) {
  console.error(`[verify:apache:root] FAIL: ${msg}`);
  ok = false;
}
function pass(msg) {
  console.log(`[verify:apache:root] ok — ${msg}`);
}

for (const f of required) {
  if (!existsSync(resolve(OUT, f))) fail(`missing ${f}`);
  else pass(f);
}
for (const d of requiredDirs) {
  const p = resolve(OUT, d);
  if (!existsSync(p) || !statSync(p).isDirectory()) fail(`missing directory ${d}/`);
  else pass(`${d}/`);
}

if (existsSync(resolve(OUT, "index.html"))) {
  const html = readFileSync(resolve(OUT, "index.html"), "utf8");
  if (html.includes("/newsite/")) fail("index.html contains /newsite/ (should be root)");
  else pass("index.html has no /newsite/ references");
  if (!/(src|href)="\/assets\//.test(html)) {
    fail("index.html does not reference root /assets/ URLs");
  } else pass("index.html references /assets/");
  if (/noindex/i.test(html)) fail("index.html contains noindex meta (should be indexable)");
  else pass("index.html is indexable");
}

if (existsSync(resolve(OUT, ".htaccess"))) {
  const h = readFileSync(resolve(OUT, ".htaccess"), "utf8");
  const wpChecks = ["DirectoryIndex index.html index.php", "wp-json", "REQUEST_FILENAME} -f", "index.html [L]"];
  for (const c of wpChecks) {
    if (!h.includes(c)) fail(`.htaccess missing: ${c}`);
  }
  if (!h.includes("wp-json") || !h.includes("index.php")) fail(".htaccess does not preserve WordPress");
  else pass(".htaccess preserves WordPress");
  if (!/RewriteRule \^ index\.html \[L\]/.test(h)) fail(".htaccess does not route frontend to index.html");
  else pass(".htaccess routes frontend to index.html");
}

if (existsSync(resolve(OUT, "sitemap.xml"))) {
  const s = readFileSync(resolve(OUT, "sitemap.xml"), "utf8");
  if (s.includes("/newsite/")) fail("sitemap.xml contains /newsite/ URLs");
  else pass("sitemap.xml uses root URLs");
}

if (!ok) process.exit(1);
console.log("[verify:apache:root] all checks passed");
