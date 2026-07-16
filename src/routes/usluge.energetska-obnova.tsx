import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { withBase } from "@/lib/paths";

export const Route = createFileRoute("/usluge/energetska-obnova")({
  head: () => ({
    meta: [
      { title: "Energetska obnova zgrada | HPC-SPG" },
      { name: "description", content: "Priprema i vođenje projekata energetske obnove višestambenih zgrada — energetski certifikat, projektna dokumentacija i prijava na natječaje." },
      { property: "og:title", content: "Energetska obnova zgrada — HPC-SPG" },
      { property: "og:description", content: "Smanjite troškove grijanja i povećajte vrijednost nekretnine — vođenje projekata energetske obnove." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Usluge"
      title="Projekti energetske obnove zgrada"
      lead="Cjelovito vođenje projekta energetske obnove — od energetskog pregleda do prijave na natječaje i realizacije radova."
      crumbs={[{ label: "Usluge" }, { label: "Energetska obnova" }]}
    >
      <p>
        Energetska obnova višestambene zgrade smanjuje troškove grijanja i hlađenja, povećava komfor
        stanovanja i tržišnu vrijednost stanova te poboljšava energetski razred zgrade. HPC-SPG kao
        upravitelj vodi cjelokupni postupak u ime suvlasnika.
      </p>

      <h2>Što obuhvaća energetska obnova</h2>
      <ul>
        <li>Toplinska izolacija pročelja, krova i podova</li>
        <li>Zamjena vanjske stolarije (prozori i vrata)</li>
        <li>Modernizacija sustava grijanja, hlađenja i pripreme tople vode</li>
        <li>Ugradnja obnovljivih izvora energije (solari, dizalice topline)</li>
        <li>Modernizacija rasvjete u zajedničkim prostorima (LED)</li>
      </ul>

      <h2>Uloga upravitelja</h2>
      <ol>
        <li>Naručivanje energetskog pregleda i izrada energetskog certifikata</li>
        <li>Izbor projektanta i izrada glavnog projekta energetske obnove</li>
        <li>Priprema odluka suvlasnika i prikupljanje ponuda</li>
        <li>Prijava na natječaje Fonda za zaštitu okoliša i energetsku učinkovitost / EU fondova</li>
        <li>Sklapanje ugovora s izvođačem i nadzor izvođenja radova</li>
        <li>Osiguranje dodatnog financiranja (<a href={withBase("/upravljanje/zajmovi-i-krediti")}>zajmovi i krediti</a>)</li>
        <li>Primopredaja radova i izdavanje novog energetskog certifikata</li>
      </ol>

      <p>
        Za pokretanje projekta energetske obnove vaše zgrade obratite se putem{" "}
        <a href={withBase("/kontakt")}>kontakt obrasca</a>.
      </p>
    </ArticlePageShell>
  ),
});
