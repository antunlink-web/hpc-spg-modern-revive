import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { currentNews } from "@/content/news";

export const Route = createFileRoute("/novosti/")({
  head: () => ({
    meta: [
      { title: "Novosti i obavijesti — HPC-SPG" },
      { name: "description", content: "Aktualne obavijesti, javni pozivi i vijesti za suvlasnike zgrada. Zakonodavstvo, energetska obnova, obnova od potresa i sufinanciranja." },
      { property: "og:title", content: "Novosti i obavijesti — HPC-SPG" },
      { property: "og:description", content: "Aktualne obavijesti, javni pozivi i vijesti za suvlasnike zgrada kojima upravlja HPC-SPG." },
    ],
  }),
  component: NewsIndex,
});

function NewsIndex() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="pt-[120px] lg:pt-[140px] pb-14 lg:pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <span className="reveal-up inline-block text-xs uppercase tracking-[0.22em] text-emerald font-medium">Aktualno</span>
          <h1 className="reveal-up mt-3 text-4xl lg:text-5xl text-navy leading-tight" style={{ transitionDelay: "80ms" }}>Novosti i obavijesti</h1>
          <p className="reveal-up mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed" style={{ transitionDelay: "160ms" }}>
            Aktualne obavijesti, javni pozivi i informacije za suvlasnike zgrada kojima upravljamo.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentNews.map((n) => (
              <Link
                key={n.slug}
                to="/novosti/$slug"
                params={{ slug: n.slug }}
                className="stagger-item group bg-background rounded-xl overflow-hidden border border-border card-lift hover:border-navy/20 flex flex-col"
              >
                <div className="p-6 lg:p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                    <span className="text-emerald font-medium">{n.category}</span>
                    <span className="h-px w-4 bg-border" />
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {n.displayDate}</span>
                  </div>
                  <h2 className="mt-3 text-lg text-navy font-sans font-semibold leading-snug">{n.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-4 flex-1">{n.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald group-hover:gap-2 transition-all">
                    Pročitaj više <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/novosti/arhiva"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-navy hover:border-navy/30 hover:text-emerald transition-colors"
            >
              Arhiva starijih objava <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
