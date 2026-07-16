import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { FileText } from "lucide-react";
import { withBase } from "@/lib/paths";

export const Route = createFileRoute("/zastita-osobnih-podataka")({
  head: () => ({
    meta: [
      { title: "Zaštita osobnih podataka | HPC-SPG" },
      { name: "description", content: "Izjava HPC-SPG-a o zaštiti osobnih podataka klijenata, suvlasnika i dobavljača — sukladno GDPR-u i hrvatskim propisima." },
      { property: "og:title", content: "Zaštita osobnih podataka — HPC-SPG" },
      { property: "og:description", content: "Kako obrađujemo i štitimo osobne podatke suvlasnika i korisnika naših usluga." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Pravno"
      title="Zaštita osobnih podataka"
      lead="Sažetak Izjave o zaštiti osobnih podataka — cjeloviti tekst dostupan u priloženom PDF dokumentu."
      crumbs={[{ label: "Zaštita osobnih podataka" }]}
      aside={
        <div className="rounded-xl border border-border bg-background p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Dokument</p>
          <a href={withBase("/documents/zastita-osobnih-podataka.pdf")} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-emerald hover:underline text-sm">
            <FileText className="h-4 w-4" /> Izjava o zaštiti osobnih podataka (PDF)
          </a>
        </div>
      }
    >
      <h2>Uvod</h2>
      <p>
        Hrvatski poslovni centar – stambeno poslovno gospodarstvo d.o.o. (HPC-SPG d.o.o., sjedište:
        Ulica Adama Mandrovića 3, 10000 Zagreb) obrađuje osobne podatke suvlasnika zgrada, korisnika
        internetske stranice, klijenata i dobavljača u skladu s Općom uredbom o zaštiti podataka (GDPR)
        i Zakonom o provedbi Opće uredbe o zaštiti podataka.
      </p>

      <h2>Voditelj obrade</h2>
      <p>
        HPC-SPG d.o.o., Ulica Adama Mandrovića 3, 10000 Zagreb. Kontakt za pitanja o zaštiti podataka:{" "}
        <a href="mailto:info@hpc-spg.hr">info@hpc-spg.hr</a>.
      </p>

      <h2>Svrha i osnove obrade</h2>
      <ul>
        <li>Ispunjenje ugovornih obveza upravljanja zgradom (Ugovor o upravljanju)</li>
        <li>Ispunjenje zakonskih obveza (računovodstvene, porezne, zemljišnoknjižne)</li>
        <li>Kontakt s korisnicima internetske stranice (obrasci, upiti)</li>
        <li>Legitimni interesi HPC-SPG-a (naplata potraživanja, obrana pravnih zahtjeva)</li>
      </ul>

      <h2>Vaša prava</h2>
      <p>
        Kao ispitanik imate pravo na pristup, ispravak, brisanje, ograničenje obrade, prigovor i
        prenosivost svojih podataka. Zahtjeve možete uputiti pisanim putem na sjedište društva ili na{" "}
        <a href="mailto:info@hpc-spg.hr">info@hpc-spg.hr</a>. Također imate pravo podnijeti pritužbu
        nadzornom tijelu — Agenciji za zaštitu osobnih podataka (AZOP).
      </p>

      <p className="text-sm text-muted-foreground">
        Cjelovit tekst Izjave o zaštiti osobnih podataka dostupan je u priloženom PDF dokumentu i
        predstavlja obvezujuće pravno tumačenje uvjeta obrade.
      </p>
    </ArticlePageShell>
  ),
});
