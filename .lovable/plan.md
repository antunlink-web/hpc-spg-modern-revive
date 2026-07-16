
# HPC-SPG Migration Audit & Build Plan

This is a large, multi-phase migration. Before I start writing 30+ new route files and crawling the old WordPress site, I want to confirm scope, priorities, and a few decisions so the result matches what you expect. Please review and approve — or tell me what to adjust.

## Phase A — Audit (deliverable: `MIGRATION_AUDIT.md`)

1. Crawl `https://hpc-spg.hr/` using Firecrawl (map + scrape) to enumerate:
   - all pages, posts, category/archive pages, forms, galleries, PDFs
   - all internal links from homepage, footer, submenus, article bodies
2. Grep the current project for every `hpc-spg.hr` reference and every `target="_blank"` external link.
3. Produce `MIGRATION_AUDIT.md` at project root containing:
   - inventory table (original title, original URL, proposed new route, type, status, assets, incoming links)
   - complete old→new redirect map
   - list of assets/PDFs that need to be migrated vs. kept externally

Nothing else in Phase A ships to the UI — it is a report file only. I'll pause after Phase A so you can review the audit before I build 30+ pages.

## Phase B — Core pages (static/informational)

New route files under `src/routes/`:

- `/o-nama`, `/zasto-smo-bolji-izbor`, `/ponuda`, `/galerija`, `/korisni-linkovi-i-kontakti`, `/vodic-za-suvlasnike`, `/financiranje-uredenja`, `/zastita-osobnih-podataka`, `/kolacici`, `/impressum`
- `/upravljanje` (index) + `/upravljanje/osnovni-pojmovi`, `/upravljanje/zajmovi-i-krediti`, `/upravljanje/minimalna-visina-pricuve`, `/upravljanje/regulativa`
- `/usluge` (index) + `/usluge/upravljanje-zgradama`, `/usluge/obnova-od-potresa`, `/usluge/energetska-obnova`, `/usluge/upis-u-zemljisne-knjige`, `/usluge/financiranje-uredenja`
- `/e-uplatnice`, `/e-financijski-izvjestaji`, `/dokumenti-zgrade` (only if standalone content exists)

All content copied verbatim (Croatian legal text preserved) from the scraped originals. Shared `ArticlePageShell` component gives every page the approved header/footer, hero, breadcrumbs, reveal animations, and a max-width prose layout with H2/H3 hierarchy + optional TOC for long legal pages. No landing-page hero variants for subpages.

`/galerija` — I'll pull existing gallery images from the WordPress media library via Firecrawl and re-host under `src/assets/gallery/`.

## Phase C — News & archive migration

- `/novosti` — index listing all migrated posts with card grid, pagination.
- `/novosti/$slug` — dynamic route reading from a `src/content/news/*.md` or `src/content/news.ts` data file with title, date, slug, cover, body (MDX/HTML string), attachments.
- `/arhiva` — same data source, older posts.
- Homepage news cards re-linked to `/novosti/<slug>`.
- Every published post scraped from the old site is included with full body, images (rehosted to `src/assets/news/`), and any linked PDFs (rehosted to `public/documents/`).

**Question:** MDX (`@mdx-js/rollup`) or a plain TypeScript array of typed `Article` objects with HTML strings? I'll default to the TS-array approach (no new build plugin, simpler) unless you prefer MDX.

## Phase D — Navigation rebuild

Update `SiteHeader.tsx` and its mobile drawer to the structure you listed (O nama / Usluge / Upravljanje / Digitalne usluge / Novosti / Galerija / Kontakt) with dropdown menus (Radix `NavigationMenu`, keyboard + mobile friendly). Keep "Zatražite ponudu" CTA and external "Prijava" (hpc-spg.com). Footer link columns updated to match.

## Phase E — Link replacement sweep

`rg` for `hpc-spg.hr`, replace each with the correct internal route via `<Link to="…">`. Keep only:
- `hpc-spg.com` (application)
- government/legal/third-party
- externally-hosted PDFs that couldn't be migrated

## Phase F — Verification

- `tsgo --noEmit`
- Playwright crawl of localhost: enumerate every anchor, assert no `hpc-spg.hr` internal links, assert no 404s, screenshot each new page.
- Final report appended to `MIGRATION_AUDIT.md` with counts (pages found / migrated / created, posts migrated, docs migrated, links replaced, remaining externals, manual tasks).

## What I will NOT touch

- The approved homepage design & hero
- Existing reveal / Ken Burns / stagger animations
- Web3Forms wiring (`/zahtjev`, `/kontakt`, `/korisnicki-podaci`, `/anketa`) — routing preserved
- Publishing (you'll publish manually)

## Things I need you to confirm

1. **Pause after Phase A audit** so you can review `MIGRATION_AUDIT.md` before I generate 30+ pages? (Recommended — protects against building pages you don't want.) Or plow straight through to Phase F?
2. **News storage:** typed TS array (default) or MDX files?
3. **Gallery scope:** rehost the full WP gallery, or just link to a curated set once we see what's on the old site?
4. **Firecrawl:** OK to enable the Firecrawl connector for the crawl? (It's the fastest way to get complete, clean markdown of every old page + post + PDF list. Alternative is per-URL `fetch_website` calls, which is much slower for ~30–50 URLs.)

Approve as-is or send edits and I'll start on Phase A.
