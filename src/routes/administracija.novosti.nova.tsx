import {
  createFileRoute,
  Link,
} from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AdminShell } from "@/components/cms/AdminShell";
import { NewsEditor } from "@/components/cms/NewsEditor";
import { requireAdmin } from "@/lib/cms/auth-functions";

export const Route = createFileRoute(
  "/administracija/novosti/nova",
)({
  loader: async () => ({
    user: await requireAdmin(),
  }),

  head: () => ({
    meta: [
      {
        title:
          "Nova objava - Administracija HPC-SPG",
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),

  component: NewNewsAdmin,
});

function NewNewsAdmin() {
  const { user } =
    Route.useLoaderData();

  return (
    <AdminShell
      user={user}
      title="Nova objava"
      description="Dodajte novu novost ili obavijest."
      actions={
        <Link
          to="/administracija/novosti"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-emerald"
        >
          <ArrowLeft className="h-4 w-4" />
          Povratak
        </Link>
      }
    >
      <NewsEditor />
    </AdminShell>
  );
}
