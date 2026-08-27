import { createFileRoute, redirect } from "@tanstack/react-router";
import { requireAdmin } from "../lib/cms/auth-functions";
import {
  AdminShell,
  CmsPlaceholder,
} from "../components/cms/AdminShell";

export const Route = createFileRoute("/administracija/korisnici")({
  loader: async () => {
    const user = await requireAdmin();

    if (user.role !== "superadministrator") {
      throw redirect({
        to: "/administracija",
      });
    }

    return user;
  },
  component: UsersAdmin,
});

function UsersAdmin() {
  const user = Route.useLoaderData();

  return (
    <AdminShell
      user={user}
      title="Korisnici"
      description="Administratorski računi i ovlasti."
    >
      <CmsPlaceholder
        title="Korisnici"
        text="Ovdje ćemo dodati kreiranje administratora, promjenu lozinke, deaktivaciju računa i upravljanje ovlastima."
      />
    </AdminShell>
  );
}
