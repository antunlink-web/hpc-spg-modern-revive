import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Coins, Gauge, Scale, Thermometer, ArrowRight } from "lucide-react";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

const cards = [
  { icon: BookOpen, title: "Osnovni pojmovi upravljanja", desc: "Pojmovnik i objašnjenja ključnih izraza sukladno Zakonu (NN 152/2024).", href: "/upravljanje/osnovni-pojmovi" },
  { icon: Scale, title: "Regulativa", desc: "Pregled zakona i podzakonskih akata upravljanja i održavanja zgrada.", href: "/upravljanje/regulativa" },
  { icon: Gauge, title: "Minimalna visina pričuve", desc: "Zakonski propisana minimalna visina zajedničke pričuve.", href: "/upravljanje/minimalna-visina-pricuve" },
  { icon: Coins, title: "Zajmovi i krediti", desc: "Mogućnosti financiranja obnove i uređenja stambenih objekata.", href: "/upravljanje/zajmovi-i-krediti" },
  { icon: Thermometer, title: "Toplinski sustav — nove obveze", desc: "Obveze vezane uz uređaje za razdiobu troškova toplinske energije.", href: "/upravljanje/toplinski-sustav-nove-obveze" },
];

export const Route = createFileRoute("/upravljanje/")({
  head: () => ({
    meta: [
      { title: "Upravljanje zgradama — vodič i regulativa | HPC-SPG" },
      { name: "description", content: "Sve što suvlasnici i predstavnici trebaju znati o upravljanju zgradom — pojmovi, regulativa, pričuva, zajmovi i toplinski sustav." },
      { property: "og:title", content: "Upravljanje — HPC-SPG" },
      { property: "og:description", content: "Vodič i pravna osnova upravljanja i održavanja zgrada." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Upravljanje"
      title="Vodič i regulativa upravljanja zgradama"
      lead="Osnovni pojmovi, zakonodavni okvir i praktični savjeti za suvlasnike i predstavnike suvlasnika."
      crumbs={[{ label: "Upravljanje" }]}
    >
      <div className="not-prose grid sm:grid-cols-2 gap-5">
        {cards.map((c) => (
          <Link key={c.href} to={c.href} className="group rounded-xl border border-border bg-background p-6 hover:border-navy/20 card-lift">
            <c.icon className="h-8 w-8 text-emerald" strokeWidth={1.5} />
            <h3 className="mt-4 text-lg font-semibold text-navy">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald">Otvori <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" /></span>
          </Link>
        ))}
      </div>
    </ArticlePageShell>
  ),
});
