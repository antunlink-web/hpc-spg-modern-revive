import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { news } from "@/content/news";

const BASE_URL = "https://hpc-spg.primelink.com.hr";

const staticPaths = [
  "/", "/o-nama", "/zasto-smo-bolji-izbor", "/ponuda", "/kontakt", "/galerija",
  "/vodic-za-suvlasnike", "/korisni-linkovi-i-kontakti", "/certifikat-bonitetne-izvrsnosti",
  "/hitne-intervencije", "/seminari",
  "/upravljanje", "/upravljanje/osnovni-pojmovi", "/upravljanje/regulativa",
  "/upravljanje/minimalna-visina-pricuve", "/upravljanje/zajmovi-i-krediti",
  "/upravljanje/toplinski-sustav-nove-obveze",
  "/usluge/upravljanje-zgradama", "/usluge/obnova-od-potresa", "/usluge/energetska-obnova",
  "/usluge/upis-u-zemljisne-knjige", "/usluge/financiranje-uredenja",
  "/e-uplatnice", "/e-financijski-izvjestaji", "/dokumenti-zgrade",
  "/novosti", "/zahtjev", "/korisnicki-podaci", "/anketa",
  "/impressum", "/kolacici", "/zastita-osobnih-podataka",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls: string[] = [];
        for (const p of staticPaths) {
          urls.push(`  <url><loc>${BASE_URL}${p}</loc><changefreq>${p === "/" ? "weekly" : "monthly"}</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`);
        }
        for (const n of news) {
          urls.push(`  <url><loc>${BASE_URL}/novosti/${n.slug}</loc><lastmod>${n.date}</lastmod><changefreq>yearly</changefreq><priority>0.6</priority></url>`);
        }
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
