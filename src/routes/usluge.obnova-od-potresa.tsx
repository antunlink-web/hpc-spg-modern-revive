import { createFileRoute } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { FileText } from "lucide-react";
import { withBase } from "@/lib/paths";

export const Route = createFileRoute("/usluge/obnova-od-potresa")({
  head: () => ({
    meta: [
      { title: "Obnova višestambenih zgrada od potresa | HPC-SPG" },
      { name: "description", content: "Cjelovita podrška u postupku obnove zgrada oštećenih u potresu — od dokumentacije i projektiranja do izvođenja radova i financiranja." },
      { property: "og:title", content: "Obnova od potresa — HPC-SPG" },
      { property: "og:description", content: "Iskustvo u obnovi zgrada nakon potresa 2020. — koordinacija dokumentacije, projekata i izvođenja." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Usluge"
      title="Obnova višestambenih zgrada od potresa"
      lead="Podrška u svim fazama postupka obnove zgrada oštećenih u potresima 2020. godine."
      crumbs={[{ label: "Usluge" }, { label: "Obnova od potresa" }]}
      aside={
        <div className="rounded-xl border border-border bg-background p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Dokumenti</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={withBase("/documents/obnova-zgrada-i-uloga-upravitelja.pdf")} target="_blank" rel="noreferrer" className="text-emerald hover:underline inline-flex items-center gap-2"><FileText className="h-4 w-4" /> Obnova i uloga upravitelja</a></li>
          </ul>
        </div>
      }
    >
      <p>
        HPC-SPG pomaže suvlasnicima zgrada oštećenih u potresima 2020. na širem području Zagreba i
        Zagrebačke županije da uspješno provedu postupak obnove — od pripreme dokumentacije, preko
        prijave na natječaje i izbora projektanta i izvođača, do primopredaje radova.
      </p>

      <h2>Uloga upravitelja u obnovi</h2>
      <ul>
        <li>Prikupljanje dokumentacije o vlasništvu i tehničkom stanju zgrade</li>
        <li>Prijava na natječaje Fonda za obnovu / Ministarstva prostornog uređenja i graditeljstva</li>
        <li>Prikupljanje ponuda za projektanta, revidenta i izvođača radova</li>
        <li>Priprema odluka suvlasnika i sklapanje ugovora u ime suvlasnika</li>
        <li>Praćenje izvođenja radova i koordinacija s nadzornim inženjerom</li>
        <li>Financijsko izvještavanje i osiguranje dodatnih izvora financiranja (<a href={withBase("/upravljanje/zajmovi-i-krediti")}>zajmovi i krediti</a>)</li>
      </ul>

      <h2>Vrste obnove</h2>
      <ul>
        <li><strong>Konstruktivna obnova</strong> — obnova nosive konstrukcije zgrade sukladno propisima</li>
        <li><strong>Cjelovita obnova</strong> — konstruktivna obnova + energetska obnova + funkcionalno-tehnička nadogradnja</li>
        <li><strong>Popravci nekonstruktivnih dijelova</strong> — pročelje, krov, instalacije i zajednički prostori</li>
      </ul>

      <p>
        Za pomoć u pokretanju postupka obnove obratite se putem <a href={withBase("/kontakt")}>kontakt obrasca</a> ili
        zatražite <a href={withBase("/zahtjev")}>prijedlog upravljanja</a> ako Vam još upravitelj nije određen.
      </p>
    </ArticlePageShell>
  ),
});
