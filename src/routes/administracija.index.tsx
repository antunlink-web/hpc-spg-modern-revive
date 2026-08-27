import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

import {
  logoutAdmin,
  requireAdmin,
} from "@/lib/cms/auth-functions";

export const Route = createFileRoute(
  "/administracija/",
)({
  loader: () => requireAdmin(),

  head: () => ({
    meta: [
      { title: "Administracija | HPC-SPG" },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),

  component: AdminDashboard,
});

function AdminDashboard() {
  const user = Route.useLoaderData();
  const logout = useServerFn(logoutAdmin);

  async function handleLogout() {
    await logout();
    window.location.replace(
      "/administracija/prijava",
    );
  }

  const sections = [
    {
      title: "Novosti",
      description:
        "Objave, izmjene i arhiva novosti.",
    },
    {
      title: "Stranice",
      description:
        "Upravljanje sadržajem glavnih stranica.",
    },
    {
      title: "Dokumenti",
      description:
        "PDF dokumenti i datoteke za preuzimanje.",
    },
    {
      title: "Postavke",
      description:
        "Kontaktni i osnovni podaci web stranice.",
    },
    ...(user.role === "superadministrator"
      ? [
          {
            title: "Korisnici",
            description:
              "Administratorski računi i ovlasti.",
          },
        ]
      : []),
  ];

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              HPC-SPG
            </div>

            <h1 className="mt-1 text-xl font-bold text-slate-950">
              Administracija
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden text-right sm:block">
              <div className="text-sm font-medium text-slate-900">
                {user.email}
              </div>

              <div className="text-xs text-slate-500">
                {user.role ===
                "superadministrator"
                  ? "Superadministrator"
                  : "Administrator"}
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Odjava
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Pregled
          </h2>

          <p className="mt-2 text-slate-500">
            Upravljanje sadržajem HPC-SPG web stranice.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {section.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {section.description}
              </p>

              <div className="mt-6 text-sm font-semibold text-slate-400">
                Uskoro
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
