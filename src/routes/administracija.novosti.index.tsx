import {
  createFileRoute,
  Link,
} from "@tanstack/react-router";
import {
  FilePenLine,
  Plus,
} from "lucide-react";
import { AdminShell } from "@/components/cms/AdminShell";
import { requireAdmin } from "@/lib/cms/auth-functions";
import { listNewsAdmin } from "@/lib/cms/news-functions";

export const Route = createFileRoute(
  "/administracija/novosti/",
)({
  loader: async () => {
    const user = await requireAdmin();
    const posts = await listNewsAdmin();

    return {
      user,
      posts,
    };
  },

  head: () => ({
    meta: [
      {
        title:
          "Novosti - Administracija HPC-SPG",
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),

  component: NewsAdmin,
});

function statusLabel(status: string) {
  if (status === "published") {
    return "Objavljeno";
  }

  if (status === "hidden") {
    return "Skriveno";
  }

  return "Skica";
}

function NewsAdmin() {
  const { user, posts } =
    Route.useLoaderData();

  return (
    <AdminShell
      user={user}
      title="Novosti"
      description="Upravljanje objavama, obavijestima i arhivom."
      actions={
        <Link
          to="/administracija/novosti/nova"
          className="inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy/90"
        >
          <Plus className="h-4 w-4" />
          Nova objava
        </Link>
      }
    >
      <div className="overflow-hidden rounded-xl border border-border bg-background">
        <div className="border-b border-border px-5 py-4">
          <p className="text-sm text-muted-foreground">
            Ukupno objava:{" "}
            <strong className="text-navy">
              {posts.length}
            </strong>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-surface text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-medium">
                  Naslov
                </th>
                <th className="px-5 py-3 font-medium">
                  Kategorija
                </th>
                <th className="px-5 py-3 font-medium">
                  Datum
                </th>
                <th className="px-5 py-3 font-medium">
                  Sekcija
                </th>
                <th className="px-5 py-3 font-medium">
                  Status
                </th>
                <th className="px-5 py-3 font-medium">
                  Akcija
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-surface/50"
                >
                  <td className="max-w-[420px] px-5 py-4">
                    <p className="font-medium leading-snug text-navy">
                      {post.title}
                    </p>
                    <p className="mt-1 truncate text-xs text-muted-foreground">
                      /novosti/{post.slug}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-foreground">
                    {post.category}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-sm text-muted-foreground">
                    {post.displayDate ||
                      post.publishedAt ||
                      "-"}
                  </td>

                  <td className="px-5 py-4 text-sm">
                    {post.isArchived
                      ? "Arhiva"
                      : "Novosti"}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                        post.status ===
                        "published"
                          ? "bg-emerald-50 text-emerald-700"
                          : post.status ===
                              "hidden"
                            ? "bg-slate-100 text-slate-600"
                            : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {statusLabel(
                        post.status,
                      )}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <Link
                      to="/administracija/novosti/$id"
                      params={{
                        id: post.id,
                      }}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-emerald"
                    >
                      <FilePenLine className="h-4 w-4" />
                      Uredi
                    </Link>
                  </td>
                </tr>
              ))}

              {posts.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-12 text-center text-sm text-muted-foreground"
                  >
                    Nema objava.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
