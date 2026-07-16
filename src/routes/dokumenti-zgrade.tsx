import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/dokumenti-zgrade")({
  head: () => ({
    meta: [
      { title: "Dokumenti zgrade | HPC-SPG" },
      { name: "description", content: "Ugovori, godišnji programi, zapisnici i ostali dokumenti vaše zgrade — dostupni kroz web i mobilnu aplikaciju HPC-SPG-a." },
      { property: "og:title", content: "Dokumenti zgrade — HPC-SPG" },
      { property: "og:description", content: "Sva važna dokumentacija zgrade na jednom mjestu." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Digitalne usluge"
      title="Dokumenti zgrade"
      lead="Ugovori, zapisnici, godišnji programi i ostala dokumentacija vaše zgrade — u aplikaciji, kada god vam treba."
      crumbs={[{ label: "Dokumenti zgrade" }]}
      ctaTitle="Zatražite pristup"
      ctaText="Pošaljite podatke potrebne za identifikaciju."
      ctaHref="/korisnicki-podaci"
      ctaLabel="Prijava korisnika"
    >
      <p>
        Web i mobilna aplikacija HPC-SPG-a suvlasnicima omogućava pregled ključnih dokumenata zgrade —
        bez potrebe za obraćanjem uredu ili čekanjem odgovora.
      </p>

      <h2>Koji dokumenti su dostupni</h2>
      <ul>
        <li>Međuvlasnički ugovor i ugovor o upravljanju</li>
        <li>Godišnji program upravljanja i održavanja (GPU)</li>
        <li>Godišnji izvještaj o realizaciji programa</li>
        <li>Zapisnici sa sastanaka suvlasnika</li>
        <li>Ugovori s izvođačima radova</li>
        <li>Ponude, računi i druga poslovna dokumentacija zgrade</li>
      </ul>

      <h2>Sigurnost i privatnost</h2>
      <p>
        Pristup dokumentima moguć je isključivo za suvlasnike konkretne zgrade i uz jedinstvene
        pristupne podatke. Cjelokupni sustav usklađen je s GDPR-om — vidi{" "}
        <a href="/zastita-osobnih-podataka">Zaštita osobnih podataka</a>.
      </p>

      <p>
        Prijava u aplikaciju:{" "}
        <a href="https://hpc-spg.com/" target="_blank" rel="noreferrer">hpc-spg.com</a>. Ako Vam trebaju
        pristupni podaci, ispunite obrazac <a href="/korisnicki-podaci">Pristupni podaci</a>.
      </p>
    </ArticlePageShell>
  ),
});
