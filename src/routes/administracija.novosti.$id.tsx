import {
  createFileRoute,
  Link,
  notFound,
} from "@tanstack/react-router";
import {
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { AdminShell } from "@/components/cms/AdminShell";
import { NewsEditor } from "@/components/cms/NewsEditor";
import { requireAdmin } from "@/lib/cms/auth-functions";
import { getNewsAdmin } from "@/lib/cms/news-functions";

export const Route = createFileRoute(
  "/administracija/novosti/$id",
)({
  loader: async ({ params }) => {
    const user = await requireAdmin();

    const post = await getNewsAdmin({
      data: {
        id: params.id,
      },
    });

    if (!post) {
      throw notFound();
    }

    return {
      user,
      post,
    };
  },

  head: () => ({
    meta: [
      {
        title:
          "Uredi objavu - Administracija HPC-SPG",
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),

  component: EditNewsAdmin,
});

function EditNewsAdmin() {
  const { user, post } =
    Route.useLoaderData();

  return (
    <AdminShell
      user={user}
      title="Uredi objavu"
      description={post.title}
      actions={
        <div className="flex items-center gap-4">
          <Link
            to="/administracija/novosti"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-emerald"
          >
            <ArrowLeft className="h-4 w-4" />
            Povratak
          </Link>

          {post.status ===
            "published" && (
            <a
              href={`/novosti/${post.slug}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald"
            >
              Otvori objavu
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      }
    >
      <NewsEditor post={post} />
    </AdminShell>
  );
}
