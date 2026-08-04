import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { withBase } from "@/lib/paths";

export const Route = createFileRoute("/upravljanje/regulativa")({
  head: () => ({
    meta: [
      { title: "Regulativa upravljanja zgradama | HPC-SPG" },
      { name: "description", content: "Pregled zakona i podzakonskih akata koji uređuju upravljanje i održavanje stambenih i poslovnih zgrada u Republici Hrvatskoj." },
      { property: "og:title", content: "Regulativa upravljanja — HPC-SPG" },
      { property: "og:description", content: "Zakon o upravljanju i održavanju zgrada, Zakon o vlasništvu, uredbe o pričuvi i drugi propisi." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Upravljanje"
      title="Regulativa upravljanja i održavanja zgrada"
      lead="Ključni zakoni i podzakonski akti koji uređuju odnose suvlasnika, upravitelja i predstavnika."
      crumbs={[{ label: "Upravljanje", href: "/upravljanje" }, { label: "Regulativa" }]}
    >
      <h2>Zakoni i podzakonski akti</h2>
      <ul className="space-y-3 text-foreground">
        <li>Zakon o upravljanju i održavanju zgrada (NN 152/2024)</li>
        <li>Zakon o vlasništvu i drugim stvarnim pravima (NN 81/2015 – pročišćeni tekst)</li>
        <li>Pravilnik o kućnom redu u zgradama (NN 86/2025)</li>
        <li>Pravilnik o sadržaju i načinu vođenja Registra zajednica suvlasnika (NN 86/2025)</li>
        <li>Pravilnik o sadržaju i načinu vođenja Registra upravitelja zgrada (NN 86/2025)</li>
        <li>Podatak o etalonskoj cijeni građenja (NN 106/2025)</li>
        <li>Zakon o gradnji (NN 153/13, 20/17, 39/19, 125/19, 145/24)</li>
        <li>Zakon o prostornom uređenju (NN 153/13, 65/17, 114/18, 39/19, 98/19, 67/23)</li>
        <li>Zakon o energetskoj učinkovitosti (NN 127/14, 116/18, 25/20, 32/21, 41/21, 40/25)</li>
        <li>Zakon o zaštiti od požara (NN 92/10, 114/22)</li>
        <li>Zakon o zaštiti pučanstva od zaraznih bolesti (NN 79/07, 113/08, 43/09, 130/17, 114/18, 47/20, 134/20, 143/21)</li>
        <li>Zakon o komunalnom gospodarstvu (NN 68/18, 110/18, 32/20, 145/24)</li>
        <li>Zakon o tržištu plina (NN 18/18, 23/20)</li>
        <li>Zakon o tržištu električne energije (NN 111/21, 83/23, 17/25)</li>
        <li>Zakon o tržištu toplinske energije (NN 80/13, 14/14, 102/14, 95/15, 76/18, 86/19, 67/25)</li>
        <li>Zakon o zapaljivim tekućinama i plinovima (NN 108/95, 56/10, 114/22)</li>
        <li>Zakon o zaštiti i očuvanju kulturnih dobara (NN 145/24)</li>
        <li>Pravilnik o održavanju građevina (NN 122/2014)</li>
        <li>Pravilnik o sigurnosti dizala u uporabi (NN 5/2019)</li>
        <li>Pravilnik o vatrogasnim aparatima (NN 101/11, 74/13)</li>
        <li>Pravilnik o načinu provedbe obvezatne dezinfekcije, dezinsekcije i deratizacije (NN 35/07, 76/12)</li>
        <li>Pravilnik o povezivanju zemljišne knjige i knjige položenih ugovora i upisu vlasništva posebnog dijela nekretnine (etažnog vlasništva) (NN 121/13)</li>
        <li>Pravilnik o energetskim pregledima građevina i energetskom certificiranju zgrada (NN 88/17, 90/20, 01/21, 45/21)</li>
        <li>Pravilnik o jednostavnim i drugim građevinama i radovima (NN 112/17, 34/18, 36/19, 98/19, 31/20, 74/22, 153/23)</li>
      </ul>

      <p className="text-sm text-muted-foreground">
        Za trenutnu i cjelovitu inačicu propisa provjerite{" "}
        <a href="https://narodne-novine.nn.hr/" target="_blank" rel="noreferrer">Narodne novine</a>.
      </p>
    </ArticlePageShell>
  ),
});
