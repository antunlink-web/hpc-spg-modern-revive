import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { requireAdmin } from "../lib/cms/auth-functions";
import {
  AdminShell,
  CmsPlaceholder,
} from "../components/cms/AdminShell";

export const Route = createFileRoute("/administracija/novosti")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Novosti | HPC-SPG administracija" },
    ],
  }),
  loader: () => requireAdmin(),
  component: NewsAdmin,
});

function NewsAdmin() {
  const user = Route.useLoaderData();

  return (
    <AdminShell
      user={user}
      title="Novosti"
      description="Objave, izmjene i arhiva novosti."
      actions={
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white"
        >
          <Plus className="h-4 w-4" />
          Nova objava
        </button>
      }
    >
      <CmsPlaceholder
        title="Novosti"
        text="Ovdje ćemo sada izgraditi popis postojećih objava, pretraživanje, statuse i uređivanje sadržaja."
      />
    </AdminShell>
  );
}
