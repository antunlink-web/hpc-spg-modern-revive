import { createFileRoute } from "@tanstack/react-router";
import { requireAdmin } from "../lib/cms/auth-functions";
import {
  AdminShell,
  CmsPlaceholder,
} from "../components/cms/AdminShell";

export const Route = createFileRoute("/administracija/postavke")({
  loader: () => requireAdmin(),
  component: SettingsAdmin,
});

function SettingsAdmin() {
  const user = Route.useLoaderData();

  return (
    <AdminShell
      user={user}
      title="Postavke"
      description="Osnovni i kontaktni podaci web stranice."
    >
      <CmsPlaceholder
        title="Postavke"
        text="Ovdje ćemo omogućiti uređivanje kontaktnih i ostalih osnovnih podataka koji se koriste na web stranici."
      />
    </AdminShell>
  );
}
