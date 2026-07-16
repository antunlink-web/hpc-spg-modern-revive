import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { FileText } from "lucide-react";
import { withBase } from "@/lib/paths";

export const Route = createFileRoute("/upravljanje/osnovni-pojmovi")({
  head: () => ({
    meta: [
      { title: "Osnovni pojmovi upravljanja (NN 152/2024) | HPC-SPG" },
      { name: "description", content: "Pojmovnik i objašnjenja ključnih izraza sukladno novom Zakonu o upravljanju i održavanju zgrada (NN 152/2024)." },
      { property: "og:title", content: "Osnovni pojmovi upravljanja — HPC-SPG" },
      { property: "og:description", content: "Zajednička pričuva, upravitelj, predstavnik suvlasnika, međuvlasnički ugovor — objašnjenja pojmova iz Zakona." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Upravljanje"
      title="Osnovni pojmovi upravljanja"
      lead="Pojmovi i objašnjenja sukladno Zakonu o upravljanju i održavanju zgrada (NN 152/2024)."
      crumbs={[{ label: "Upravljanje", href: "/upravljanje" }, { label: "Osnovni pojmovi" }]}
      aside={
        <div className="rounded-xl border border-border bg-background p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Dokumenti</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={withBase("/documents/prava-i-obveze-suvlasnika.pdf")} target="_blank" rel="noreferrer" className="text-emerald hover:underline inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Prava i obveze suvlasnika</a></li>
            <li><a href={withBase("/documents/popis-zajednickih-dijelova-i-uredaja.pdf")} target="_blank" rel="noreferrer" className="text-emerald hover:underline inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Popis zajedničkih dijelova zgrade</a></li>
            <li><a href={withBase("/documents/dopis-predstavnicima-novi-zakon.pdf")} target="_blank" rel="noreferrer" className="text-emerald hover:underline inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Dopis predstavnicima o novom Zakonu</a></li>
          </ul>
        </div>
      }
    >
      <h2>Zgrada</h2>
      <p>
        Zgrada je nadzemna i/ili podzemna građevina, s krovom i vanjskim zidovima, izgrađena kao samostalna
        uporabna cjelina koja pruža zaštitu od vremenskih i drugih utjecaja. Zakon o upravljanju i
        održavanju zgrada (NN 152/2024) primjenjuje se na zgrade s dva ili više posebnih dijelova
        zgrade u različitom vlasništvu suvlasnika.
      </p>

      <h2>Suvlasnik</h2>
      <p>
        Osoba koja je u zemljišnim knjigama upisana kao vlasnik posebnog dijela zgrade (stana, poslovnog
        prostora, garaže ili garažnog mjesta). Suvlasnici zgrade odlučuju o poslovima upravljanja i
        održavanja te snose troškove razmjerno svojim suvlasničkim dijelovima.
      </p>

      <h2>Predstavnik suvlasnika</h2>
      <p>
        Osoba koju suvlasnici većinom glasova (računato prema suvlasničkim dijelovima) izabiru da ih
        zastupa pred upraviteljem i trećim osobama u poslovima upravljanja zgradom. Predstavnik daje
        naloge upravitelju u okviru odluka suvlasnika, potpisuje ugovore i sudjeluje u nadzoru radova.
      </p>

      <h2>Upravitelj zgrade</h2>
      <p>
        Fizička ili pravna osoba koja obavlja poslove upravljanja i održavanja zgrade na temelju Ugovora
        o upravljanju sklopljenog s predstavnikom suvlasnika u ime svih suvlasnika. Upravitelj vodi
        račun posebne namjene (zajedničku pričuvu), obračunava obveze suvlasnika, plaća račune
        dobavljača, izrađuje godišnji program i izvještaj te obavlja tehničke i pravne poslove.
      </p>

      <h2>Međuvlasnički ugovor</h2>
      <p>
        Pisani ugovor kojim suvlasnici uređuju međusobne odnose u pogledu upravljanja i korištenja
        zgrade — visinu pričuve, odluke o održavanju, pravo prvokupa, korištenje zajedničkih dijelova
        i druga pitanja. Sklapa se u pisanom obliku i predstavlja temelj poslovanja zgrade.
      </p>

      <h2>Ugovor o upravljanju</h2>
      <p>
        Ugovor između suvlasnika (u ime kojih djeluje predstavnik) i upravitelja kojim se uređuju prava
        i obveze u pogledu upravljanja i održavanja. Sklapa se u pisanom obliku i sadrži opis poslova,
        naknadu upravitelju, način izvještavanja te rokove.
      </p>

      <h2>Zajednička pričuva</h2>
      <p>
        Sredstva koja suvlasnici mjesečno uplaćuju na račun posebne namjene, namijenjena isključivo za
        podmirenje troškova održavanja, poboljšice i drugih zajedničkih izdataka zgrade. Pričuva je
        zaštićena od ovrhe po računima upravitelja.
      </p>

      <h2>Godišnji program upravljanja i izvještaj</h2>
      <p>
        Predstavnik i upravitelj svake godine izrađuju godišnji program upravljanja i održavanja
        zgrade (GPU) te godišnji izvještaj o izvršenim poslovima i utrošku sredstava. Suvlasnici usvajaju
        program većinom glasova.
      </p>

      <p className="text-sm text-muted-foreground">
        Za cjelovit tekst i objašnjenje svih pojmova konzultirajte Zakon o upravljanju i održavanju
        zgrada (NN 152/2024) i pripadajuće podzakonske akte — vidi{" "}
        <a href={withBase("/upravljanje/regulativa")}>Regulativa</a>.
      </p>
    </ArticlePageShell>
  ),
});
