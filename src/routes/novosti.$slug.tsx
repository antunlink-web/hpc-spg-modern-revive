import {
  createFileRoute,
  notFound,
  Link,
} from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  FileText,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import { ArticlePageShell } from "@/components/site/ArticlePageShell";
import { rewriteHtmlBase } from "@/lib/paths";
import { getPublicNewsBySlug } from "@/lib/cms/news-functions";

export const Route = createFileRoute(
  "/novosti/$slug",
)({
  loader: async ({ params }) => {
    const result = await getPublicNewsBySlug({
      data: {
        slug: params.slug,
      },
    });

    if (!result) {
      throw notFound();
    }

    return result;
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          {
            title:
              "Novost nije pronađena - HPC-SPG",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    }

    const p = loaderData.post;

    return {
      meta: [
        {
          title:
            p.seoTitle ||
            `${p.title} - HPC-SPG`,
        },
        {
          name: "description",
          content:
            p.metaDescription ||
            p.excerpt,
        },
        {
          property: "og:title",
          content: p.title,
        },
        {
          property: "og:description",
          content:
            p.metaDescription ||
            p.excerpt,
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property:
            "article:published_time",
          content: p.date,
        },
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
      crumbs={[
        {
          label: "Novosti",
          href: "/novosti",
        },
        {
          label: "Nije pronađeno",
        },
      ]}
    >
      <p>
        <Link
          to="/novosti"
          className="text-emerald hover:underline"
        >
          ← Sve novosti
        </Link>
      </p>
    </ArticlePageShell>
  );
}

function NewsPost() {
  const { post, related } =
    Route.useLoaderData();

  return (
    <ArticlePageShell
      eyebrow={post.category}
      title={post.title}
      lead={post.excerpt}
      crumbs={[
        {
          label: "Novosti",
          href: "/novosti",
        },
        {
          label: post.title,
        },
      ]}
      aside={
        <>
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Objavljeno
            </p>

            <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-navy">
              <Calendar className="h-4 w-4 text-emerald" />
              {post.displayDate}
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Kategorija
            </p>

            <p className="mt-2 text-sm text-navy">
              {post.category}
            </p>
          </div>

          {(post.documents.length > 0 ||
            post.externalLinks.length >
              0) && (
            <div className="rounded-xl border border-border bg-background p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Dokumenti i poveznice
              </p>

              <ul className="mt-3 space-y-2 text-sm">
                {post.documents.map(
                  (document: any) => (
                    <li key={document.href}>
                      <a
                        href={document.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-emerald hover:underline"
                      >
                        <FileText className="h-4 w-4" />
                        {document.label}
                      </a>
                    </li>
                  ),
                )}

                {post.externalLinks.map(
                  (link: any) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-emerald hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {link.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          )}
        </>
      }
    >
      <div
        dangerouslySetInnerHTML={{
          __html: rewriteHtmlBase(
            post.bodyHtml,
          ),
        }}
      />

      <div className="not-prose mt-12 border-t border-border pt-8">
        <Link
          to="/novosti"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-emerald"
        >
          <ArrowLeft className="h-4 w-4" />
          Sve novosti
        </Link>
      </div>

      {related.length > 0 && (
        <div className="not-prose mt-14">
          <h2 className="mb-6 text-xl font-serif text-navy">
            Povezane novosti
          </h2>

          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((r: any) => (
              <Link
                key={r.slug}
                to="/novosti/$slug"
                params={{
                  slug: r.slug,
                }}
                className="group block rounded-lg border border-border bg-background p-5 card-lift hover:border-navy/20"
              >
                <p className="text-[11px] font-medium uppercase tracking-wider text-emerald">
                  {r.category}
                </p>

                <p className="mt-2 line-clamp-3 text-sm font-semibold leading-snug text-navy">
                  {r.title}
                </p>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-emerald">
                  Pročitaj
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </ArticlePageShell>
  );
}
