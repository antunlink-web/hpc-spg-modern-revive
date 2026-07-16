import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

export const Route = createFileRoute("/upravljanje/toplinski-sustav-nove-obveze")({
  head: () => ({
    meta: [
      { title: "Toplinski sustav — nove obveze | HPC-SPG" },
      { name: "description", content: "Nove zakonske obveze vezane uz razdiobu troškova toplinske energije i ugradnju uređaja za mjerenje u zgradama s centralnim grijanjem." },
      { property: "og:title", content: "Toplinski sustav — nove obveze | HPC-SPG" },
      { property: "og:description", content: "Obveze suvlasnika i upravitelja glede razdiobe topline i uređaja za mjerenje." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Upravljanje"
      title="Toplinski sustav — nove obveze"
      lead="Sažetak zakonskih obveza za zgrade s centralnim toplinskim sustavima."
      crumbs={[{ label: "Upravljanje", href: "/upravljanje" }, { label: "Toplinski sustav" }]}
    >
      <p>
        Novim propisima o učinkovitom korištenju energije i Zakonom o upravljanju i održavanju zgrada
        (NN 152/2024) uvedene su dodatne obveze za zgrade s centralnim toplinskim sustavima. Cilj je
        pravedna razdioba troškova toplinske energije prema stvarnoj potrošnji po pojedinom posebnom
        dijelu zgrade.
      </p>

      <h2>Ključne obveze</h2>
      <ul>
        <li>Ugradnja uređaja za mjerenje ili razdiobu troškova toplinske energije po svakom posebnom dijelu</li>
        <li>Redovito očitanje uređaja i razdioba troškova po ključu propisanom Uredbom</li>
        <li>Vođenje evidencije potrošnje i dostavljanje podataka distributeru topline</li>
        <li>Godišnji izvještaj o razdiobi troškova toplinske energije</li>
      </ul>

      <h2>Tko sudjeluje u postupku</h2>
      <ul>
        <li><strong>Suvlasnici</strong> — donose odluku o izboru izvođača ugradnje i sustava razdiobe</li>
        <li><strong>Predstavnik suvlasnika</strong> — koordinira postupak s upraviteljem</li>
        <li><strong>Upravitelj (HPC-SPG)</strong> — priprema tehničku dokumentaciju, prikuplja ponude, provodi ugovaranje i vodi financijsku evidenciju</li>
        <li><strong>Distributer toplinske energije</strong> — dostavlja podatke o ukupnoj isporučenoj energiji</li>
      </ul>

      <h2>Kako HPC-SPG pomaže</h2>
      <p>
        Za svaku zgradu pod našim upravljanjem pripremamo pregled trenutnog stanja, opcije ugradnje
        uređaja i simulaciju razdiobe troškova. Preporučene korake i rokove komuniciramo predstavniku
        suvlasnika i suvlasnicima kroz redovite obavijesti.
      </p>

      <p>
        Za detaljne informacije o vašoj zgradi obratite se voditelju u HPC-SPG-u ili putem{" "}
        <a href="/newsite/kontakt">kontakt obrasca</a>.
      </p>
    </ArticlePageShell>
  ),
});
