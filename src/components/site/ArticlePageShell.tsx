import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

export type Crumb = { label: string; href?: string };

export interface ArticlePageShellProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  children: ReactNode;
  aside?: ReactNode;
  ctaTitle?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export function ArticlePageShell({
  eyebrow,
  title,
  lead,
  crumbs = [],
  children,
  aside,
  ctaTitle = "Zatražite ponudu za upravljanje zgradom",
  ctaText = "Pripremamo cjelovitu, prilagođenu ponudu za vašu zgradu.",
  ctaHref = "/zahtjev",
  ctaLabel = "Zatražite ponudu",
}: ArticlePageShellProps) {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Header band */}
      <section className="relative pt-[132px] lg:pt-[160px] pb-14 lg:pb-20 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="reveal-up mb-6 text-xs text-muted-foreground flex flex-wrap items-center gap-1.5">
              <Link to="/" className="hover:text-navy">Naslovna</Link>
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 opacity-60" />
                  {c.href ? (
                    <Link to={c.href} className="hover:text-navy">{c.label}</Link>
                  ) : (
                    <span className="text-navy">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && (
            <span className="reveal-up inline-block text-xs uppercase tracking-[0.22em] text-emerald font-medium">
              {eyebrow}
            </span>
          )}
          <h1 className="reveal-up mt-3 text-4xl lg:text-5xl text-navy max-w-4xl leading-tight" style={{ transitionDelay: "80ms" }}>
            {title}
          </h1>
          {lead && (
            <p className="reveal-up mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed" style={{ transitionDelay: "160ms" }}>
              {lead}
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 grid gap-12 lg:gap-16 lg:grid-cols-12">
          <article className="reveal-up lg:col-span-8 prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-navy prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-foreground/85 prose-a:text-emerald prose-a:no-underline hover:prose-a:underline prose-strong:text-navy prose-li:text-foreground/85 prose-ul:my-4 prose-ol:my-4">
            {children}
          </article>
          <aside className="lg:col-span-4 space-y-6">
            {aside}
            <div className="reveal-fade rounded-xl border border-border bg-surface p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{ctaTitle}</p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{ctaText}</p>
              <Link to={ctaHref} className="mt-5 inline-flex items-center gap-2 rounded-md bg-emerald text-white px-4 py-3 text-sm font-semibold hover:bg-emerald-soft transition-all hover:-translate-y-0.5">
                {ctaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="reveal-fade rounded-xl border border-border bg-background p-6" style={{ transitionDelay: "120ms" }}>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Kontakt</p>
              <p className="mt-3 text-sm font-medium text-navy">HPC-SPG d.o.o.</p>
              <p className="mt-1 text-sm text-muted-foreground">Ulica Adama Mandrovića 3<br />10000 Zagreb</p>
              <div className="mt-4 space-y-1.5 text-sm">
                <Link to="/kontakt" className="text-emerald hover:underline block">Kontakt obrazac →</Link>
                <Link to="/korisnicki-podaci" className="text-emerald hover:underline block">Pristupni podaci →</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
