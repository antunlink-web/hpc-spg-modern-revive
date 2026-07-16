import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, FileText, ExternalLink, ArrowLeft } from "lucide-react";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { findNewsBySlug, news } from "@/content/news";
import { rewriteHtmlBase } from "@/lib/paths";

export const Route = createFileRoute("/novosti/$slug")({
  loader: ({ params }) => {
    const post = findNewsBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Novost nije pronađena — HPC-SPG" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    return {
      meta: [
        { title: p.seoTitle ?? `${p.title} — HPC-SPG` },
        { name: "description", content: p.metaDescription ?? p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.metaDescription ?? p.excerpt },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: p.date },
      ],
    };
  },
  component: NewsPost,
  notFoundComponent: NewsNotFound,
});

function NewsNotFound() {
  return (
    <ArticlePageShell
      eyebrow="Novost"
      title="Novost nije pronađena"
      lead="Tražena novost više nije dostupna ili je premještena."
      crumbs={[{ label: "Novosti", href: "/novosti" }, { label: "Nije pronađeno" }]}
    >
      <p>
        <Link to="/novosti" className="text-emerald hover:underline">
          ← Sve novosti
        </Link>
      </p>
    </ArticlePageShell>
  );
}

function NewsPost() {
  const { post } = Route.useLoaderData();

  // Simple related: next 3 in list (excluding this one)
  const related = news.filter((n) => n.slug !== post.slug).slice(0, 3);

  return (
    <ArticlePageShell
      eyebrow={post.category}
      title={post.title}
      lead={post.excerpt}
      crumbs={[{ label: "Novosti", href: "/novosti" }, { label: post.title }]}
      aside={
        <>
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Objavljeno</p>
            <p className="mt-2 text-sm text-navy font-medium inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-emerald" /> {post.displayDate}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Kategorija</p>
            <p className="mt-2 text-sm text-navy">{post.category}</p>
          </div>
          {(post.documents?.length || post.externalLinks?.length) && (
            <div className="rounded-xl border border-border bg-background p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Dokumenti i poveznice</p>
              <ul className="mt-3 space-y-2 text-sm">
                {post.documents?.map((d: { label: string; href: string }) => (
                  <li key={d.href}>
                    <a href={d.href} target="_blank" rel="noreferrer" className="text-emerald hover:underline inline-flex items-center gap-2">
                      <FileText className="h-4 w-4" /> {d.label}
                    </a>
                  </li>
                ))}
                {post.externalLinks?.map((l: { label: string; href: string }) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noreferrer" className="text-emerald hover:underline inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" /> {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      }
    >
      <div dangerouslySetInnerHTML={{ __html: rewriteHtmlBase(post.bodyHtml) }} />

      <div className="mt-12 pt-8 border-t border-border not-prose">
        <Link to="/novosti" className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-emerald">
          <ArrowLeft className="h-4 w-4" /> Sve novosti
        </Link>
      </div>

      <div className="mt-14 not-prose">
        <h2 className="text-xl font-serif text-navy mb-6">Povezane novosti</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {related.map((r) => (
            <Link key={r.slug} to="/novosti/$slug" params={{ slug: r.slug }} className="group block rounded-lg border border-border bg-background p-5 hover:border-navy/20 card-lift">
              <p className="text-[11px] uppercase tracking-wider text-emerald font-medium">{r.category}</p>
              <p className="mt-2 text-sm font-semibold text-navy leading-snug line-clamp-3">{r.title}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-emerald">Pročitaj <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" /></span>
            </Link>
          ))}
        </div>
      </div>
    </ArticlePageShell>
  );
}
