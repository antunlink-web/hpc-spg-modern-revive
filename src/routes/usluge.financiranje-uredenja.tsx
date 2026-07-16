import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/usluge/financiranje-uredenja")({
  head: () => ({
    meta: [
      { title: "Financiranje uređenja zgrade | HPC-SPG" },
      { name: "description", content: "Rješenja za financiranje uređenja i obnove zgrada — zajmovi upravitelja i dugoročni krediti bez upisa hipoteke." },
      { property: "og:title", content: "Financiranje uređenja — HPC-SPG" },
      { property: "og:description", content: "Pokrenite veće zahvate na zgradi bez opterećenja osobne imovine." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Usluge"
      title="Financiranje uređenja zgrade"
      lead="Kad prikupljena sredstva pričuve nisu dovoljna — pomažemo suvlasnicima pokrenuti veće zahvate uz povoljne uvjete."
      crumbs={[{ label: "Usluge" }, { label: "Financiranje uređenja" }]}
    >
      <p>
        Za veće investicije u zgradu — uređenje pročelja, zamjena krova, ugradnja dizala, obnova
        instalacija ili energetska obnova — nudimo dva glavna modela financiranja: <strong>kratkoročnu
        pozajmicu upravitelja</strong> i <strong>dugoročni bankovni kredit bez upisa hipoteke</strong>.
      </p>

      <ul>
        <li>Otplata isključivo iz redovitih uplata pričuve</li>
        <li>Bez zadužnica pojedinih suvlasnika i bez upisa hipoteke</li>
        <li>Priprema dokumentacije i pregovaranje s bankama u vaše ime</li>
        <li>Transparentan pregled uvjeta i simulacija otplate</li>
      </ul>

      <div className="not-prose mt-8 rounded-xl border border-border bg-surface p-6">
        <p className="text-sm text-foreground/85">Za cjelovit pregled modela, iznosa i uvjeta — od kratkoročnih pozajmica do kredita za obnovu nakon potresa — pogledajte:</p>
        <Link to="/upravljanje/zajmovi-i-krediti" className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald text-white px-5 py-3 text-sm font-semibold hover:bg-emerald-soft transition-all">
          Zajmovi i krediti — cjeloviti pregled <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <p className="mt-6">
        Za konkretnu simulaciju za vašu zgradu obratite se putem <a href="/newsite/kontakt">kontakt obrasca</a>.
      </p>
    </ArticlePageShell>
  ),
});
