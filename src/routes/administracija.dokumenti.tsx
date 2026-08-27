import { createFileRoute } from "@tanstack/react-router";
import { requireAdmin } from "../lib/cms/auth-functions";
import {
  AdminShell,
  CmsPlaceholder,
} from "../components/cms/AdminShell";

export const Route = createFileRoute("/administracija/dokumenti")({
  loader: () => requireAdmin(),
  component: DocumentsAdmin,
});

function DocumentsAdmin() {
  const user = Route.useLoaderData();

  return (
    <AdminShell
      user={user}
      title="Dokumenti"
      description="PDF dokumenti i datoteke dostupne na web stranici."
    >
      <CmsPlaceholder
        title="Dokumenti"
        text="Ovdje ćemo dodati upload, zamjenu, naziv, opis i upravljanje dokumentima."
      />
    </AdminShell>
  );
}
