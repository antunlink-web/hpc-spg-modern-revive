import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, ShieldCheck, Zap, FileText, Banknote, Wrench } from "lucide-react";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";

const services = [
  { icon: Building2, title: "Upravljanje zgradama", desc: "Cjelovito upravljanje stambenim i poslovnim objektima uz transparentno financijsko izvještavanje.", href: "/usluge/upravljanje-zgradama" },
  { icon: Wrench, title: "Obračun pričuve i godišnji programi", desc: "Redovan obračun pričuve, izrada godišnjih programa održavanja i praćenje njihove provedbe.", href: "/usluge/upravljanje-zgradama" },
  { icon: ShieldCheck, title: "Obnova od potresa", desc: "Stručna podrška u postupku obnove zgrada oštećenih u potresu.", href: "/usluge/obnova-od-potresa" },
  { icon: Zap, title: "Energetska obnova", desc: "Pomoć u pripremi i provedbi projekata energetske obnove zgrada.", href: "/usluge/energetska-obnova" },
  { icon: FileText, title: "Upis u zemljišne knjige", desc: "Vođenje postupka upisa zgrade i posebnih dijelova u zemljišne knjige.", href: "/usluge/upis-u-zemljisne-knjige" },
  { icon: Banknote, title: "Financiranje uređenja", desc: "Zajmovi i krediti za uređenje i obnovu stambenih i poslovnih objekata.", href: "/usluge/financiranje-uredenja" },
];

export const Route = createFileRoute("/usluge/")({
  head: () => ({
    meta: [
      { title: "Usluge — HPC-SPG" },
      { name: "description", content: "Pregled usluga upravljanja zgradama, obnove, energetske obnove, upisa u zemljišne knjige i financiranja uređenja." },
      { property: "og:title", content: "Usluge — HPC-SPG" },
      { property: "og:description", content: "Cjelovita ponuda usluga upravljanja za stambene i poslovne zgrade." },
    ],
  }),
  component: () => (
    <ArticlePageShell
      eyebrow="Usluge"
      title="Naše usluge"
      lead="Cjelovita ponuda usluga za predstavnike i suvlasnike — od svakodnevnog upravljanja do obnove i financiranja većih zahvata."
      crumbs={[{ label: "Usluge" }]}
    >
      <div className="not-prose grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.title}
            to={s.href}
            className="group rounded-xl border border-border bg-background p-6 hover:border-navy/30 hover:bg-surface transition-all"
          >
            <s.icon className="h-8 w-8 text-emerald" strokeWidth={1.5} />
            <h3 className="mt-4 font-semibold text-navy text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-foreground/75">{s.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald group-hover:gap-2 transition-all">
              Saznaj više <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </ArticlePageShell>
  ),
});
