import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { withBase } from "@/lib/paths";

export const Route = createFileRoute("/e-financijski-izvjestaji")({
  head: () => ({
    meta: [
      { title: "E-financijski izvještaji zgrade | HPC-SPG" },
      { name: "description", content: "Online uvid u financijske izvještaje vaše zgrade — stanje pričuve, prihodi i rashodi, godišnja rekapitulacija." },
      { property: "og:title", content: "E-financijski izvještaji — HPC-SPG" },
      { property: "og:description", content: "Transparentan uvid u financije zgrade u svakom trenutku." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Digitalne usluge"
      title="E-financijski izvještaji zgrade"
      lead="Uvid u stanje pričuve, prihode, rashode i godišnju rekapitulaciju — kroz web i mobilnu aplikaciju."
      crumbs={[{ label: "E-financijski izvještaji" }]}
      ctaTitle="Zatražite pristup"
      ctaText="Pošaljite podatke potrebne za identifikaciju."
      ctaHref="/korisnicki-podaci"
      ctaLabel="Prijava korisnika"
    >
      <p>
        Kroz aplikaciju HPC-SPG-a svaki suvlasnik može u bilo kojem trenutku vidjeti aktualno stanje
        zajedničke pričuve zgrade, pregled uplata i računa te godišnju rekapitulaciju poslovanja.
      </p>

      <h2>Što možete vidjeti</h2>
      <ul>
        <li>Trenutno stanje zajedničke pričuve zgrade</li>
        <li>Vaš osobni saldo — uplaćeno, zaduženo, otvoreno</li>
        <li>Pregled računa dobavljača (troškovi zgrade)</li>
        <li>Mjesečni i godišnji financijski izvještaji</li>
        <li>Godišnji program upravljanja i realizacija</li>
      </ul>

      <h2>Kako pristupiti</h2>
      <p>
        Pristup se ostvaruje putem web i mobilne aplikacije na adresi{" "}
        <a href="https://hpc-spg.com/" target="_blank" rel="noreferrer">hpc-spg.com</a>. Ako još nemate
        pristupne podatke, ispunite obrazac na stranici{" "}
        <a href={withBase("/korisnicki-podaci")}>Pristupni podaci</a> — aktivacija je besplatna.
      </p>

      <p>
        Aplikacija je dostupna 24/7 i uz e-financijske izvještaje omogućava pregled uplatnica
        (<a href={withBase("/e-uplatnice")}>E-uplatnice</a>) i dokumenata zgrade
        (<a href={withBase("/dokumenti-zgrade")}>Dokumenti zgrade</a>).
      </p>
    </ArticlePageShell>
  ),
});
