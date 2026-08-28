import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { listPublicNews } from "@/lib/cms/news-functions";

export const Route = createFileRoute("/novosti/arhiva")({
  loader: async () => ({
    posts: await listPublicNews({
      data: { archived: true },
    }),
  }),

  head: () => ({
    meta: [
      { title: "Arhiva novosti — HPC-SPG" },
      {
        name: "description",
        content:
          "Arhiva starijih obavijesti i objava HPC-SPG-a: skloništa, potres u Gradu Zagrebu, seminari, dani otvorenih vrata i vodič za suvlasnike.",
      },
      { property: "og:title", content: "Arhiva novosti — HPC-SPG" },
      {
        property: "og:description",
        content: "Starije obavijesti i objave za suvlasnike zgrada kojima upravlja HPC-SPG.",
      },
    ],
  }),
  component: ArchiveIndex,
});

function ArchiveIndex() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-[132px] lg:pt-[160px] pb-14 lg:pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <nav aria-label="Breadcrumb" className="reveal-up mb-6 text-xs text-muted-foreground flex flex-wrap items-center gap-1.5">
            <Link to="/" className="hover:text-navy">Početna</Link>
            <span>/</span>
            <Link to="/novosti" className="hover:text-navy">Novosti</Link>
            <span>/</span>
            <span className="text-navy">Arhiva</span>
          </nav>
          <span className="reveal-up inline-block text-xs uppercase tracking-[0.22em] text-emerald font-medium">Arhiva</span>
          <h1 className="reveal-up mt-3 text-4xl lg:text-5xl text-navy leading-tight" style={{ transitionDelay: "80ms" }}>
            Arhiva objava
          </h1>
          <p className="reveal-up mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed" style={{ transitionDelay: "160ms" }}>
            Starije obavijesti i objave koje ostaju dostupne za uvid suvlasnicima i predstavnicima suvlasnika.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((n) => (
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
            <Link to="/novosti" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-emerald">
              ← Aktualne novosti
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
