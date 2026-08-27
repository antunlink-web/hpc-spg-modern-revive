import { createFileRoute } from "@tanstack/react-router";
import { requireAdmin } from "../lib/cms/auth-functions";
import {
  AdminShell,
  CmsPlaceholder,
} from "../components/cms/AdminShell";

export const Route = createFileRoute("/administracija/stranice")({
  loader: () => requireAdmin(),
  component: PagesAdmin,
});

function PagesAdmin() {
  const user = Route.useLoaderData();

  return (
    <AdminShell
      user={user}
      title="Stranice"
      description="Upravljanje sadržajem glavnih stranica."
    >
      <CmsPlaceholder
        title="Stranice"
        text="Ovdje će biti dostupni samo sadržaji koje ima smisla uređivati kroz CMS, bez kontrole dizajna i strukture aplikacije."
      />
    </AdminShell>
  );
}
