#!/usr/bin/env node
/** Sanity-checks the dist/apache/ output produced by build-apache.mjs. */
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist/apache");

const required = [
  "index.html",
  ".htaccess",
  "favicon.png",
  "robots.txt",
  "sitemap.xml",
];
const requiredDirs = ["assets", "documents"];

let ok = true;
function fail(msg) {
  console.error(`[verify:apache] FAIL: ${msg}`);
  ok = false;
}
function pass(msg) {
  console.log(`[verify:apache] ok — ${msg}`);
}

for (const f of required) {
  const p = resolve(OUT, f);
  if (!existsSync(p)) fail(`missing ${f}`);
  else pass(f);
}
for (const d of requiredDirs) {
  const p = resolve(OUT, d);
  if (!existsSync(p) || !statSync(p).isDirectory()) fail(`missing directory ${d}/`);
  else pass(`${d}/`);
}

// index.html must reference /newsite/ assets, not root /assets.
if (existsSync(resolve(OUT, "index.html"))) {
  const html = readFileSync(resolve(OUT, "index.html"), "utf8");
  if (!html.includes("/newsite/")) fail("index.html does not reference /newsite/ — base path not applied");
  else pass("index.html references /newsite/");
  if (/src="\/assets\//.test(html) || /href="\/assets\//.test(html)) {
    fail("index.html has root-scoped /assets/ URLs (should be /newsite/assets/)");
  }
}

// .htaccess sanity
if (existsSync(resolve(OUT, ".htaccess"))) {
  const h = readFileSync(resolve(OUT, ".htaccess"), "utf8");
  if (!h.includes("RewriteBase /newsite/")) fail(".htaccess missing RewriteBase /newsite/");
  else pass(".htaccess RewriteBase");
}

if (!ok) process.exit(1);
console.log("[verify:apache] all checks passed");
