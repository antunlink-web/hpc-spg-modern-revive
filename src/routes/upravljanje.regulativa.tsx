import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

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
      <h2>Zakon o upravljanju i održavanju zgrada (NN 152/2024)</h2>
      <p>
        Temeljni zakon koji uređuje upravljanje i održavanje zgrada u kojima postoje dva ili više
        posebnih dijelova u različitom vlasništvu. Uređuje prava i obveze suvlasnika, poslove upravitelja,
        međuvlasnički ugovor, ugovor o upravljanju, zajedničku pričuvu, godišnji program i izvještaj te
        nadzor nad provedbom.
      </p>

      <h2>Zakon o vlasništvu i drugim stvarnim pravima</h2>
      <p>
        Uređuje pravo vlasništva i suvlasništva, uspostavu etažnog vlasništva, poslove redovite i
        izvanredne uprave te temeljne odnose među suvlasnicima.
      </p>

      <h2>Uredba o održavanju zgrada</h2>
      <p>
        Podzakonski akt koji propisuje uvjete i način održavanja zajedničkih dijelova zgrade, obveze
        redovitih pregleda i kontrola tehničkih sustava (dizala, plinske instalacije, elektroinstalacije,
        gromobrani, protupožarna zaštita).
      </p>

      <h2>Uredba o visini zajedničke pričuve</h2>
      <p>
        Propisuje minimalnu visinu zajedničke pričuve po četvornom metru korisne površine posebnog dijela.
        Više na stranici <a href="/upravljanje/minimalna-visina-pricuve">Minimalna visina pričuve</a>.
      </p>

      <h2>Zakon o gradnji i Zakon o prostornom uređenju</h2>
      <p>
        Uređuju sve poslove gradnje, dogradnje, nadogradnje i rekonstrukcije zgrada, uključujući
        energetsku obnovu i obnovu nakon potresa.
      </p>

      <h2>Zakon o obnovi zgrada oštećenih potresom na području Grada Zagreba, Krapinsko-zagorske i Zagrebačke županije</h2>
      <p>
        Poseban zakon koji uređuje postupak, uvjete i način obnove zgrada oštećenih u potresima 2020.
        godine. Vidi <a href="/usluge/obnova-od-potresa">Obnova od potresa</a>.
      </p>

      <h2>Zakon o zaštiti osobnih podataka i GDPR</h2>
      <p>
        Upravitelj obrađuje osobne podatke suvlasnika (ime, prezime, OIB, adresa, kontakt) isključivo u
        svrhu obavljanja poslova upravljanja i sukladno GDPR-u. Vidi{" "}
        <a href="/zastita-osobnih-podataka">Zaštita osobnih podataka</a>.
      </p>

      <p className="text-sm text-muted-foreground">
        Za trenutnu i cjelovitu inačicu propisa provjerite{" "}
        <a href="https://narodne-novine.nn.hr/" target="_blank" rel="noreferrer">Narodne novine</a>.
      </p>
    </ArticlePageShell>
  ),
});
