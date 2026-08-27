import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Newspaper,
  Plus,
  Settings,
  Users,
} from "lucide-react";
import { requireAdmin } from "../lib/cms/auth-functions";
import { AdminShell } from "../components/cms/AdminShell";

export const Route = createFileRoute("/administracija/")({
  head: () => ({
    meta: [
      {
        name: "robots",
        content: "noindex, nofollow",
      },
      {
        title: "Pregled | HPC-SPG administracija",
      },
    ],
  }),
  loader: () => requireAdmin(),
  component: AdminDashboard,
});

function AdminDashboard() {
  const user = Route.useLoaderData();

  return (
    <AdminShell
      user={user}
      title="Pregled"
      description="Upravljanje sadržajem HPC-SPG web stranice."
      actions={
        <Link
          to="/administracija/novosti"
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <Plus className="h-4 w-4" />
          Nova objava
        </Link>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardStat
          icon={Newspaper}
          label="Novosti"
          value="0"
          hint="Objavljenih objava"
        />

        <DashboardStat
          icon={FileText}
          label="Dokumenti"
          value="0"
          hint="Datoteka u CMS-u"
        />

        <DashboardStat
          icon={Settings}
          label="Stranice"
          value="0"
          hint="Upravljanih stranica"
        />

        {user.role === "superadministrator" && (
          <DashboardStat
            icon={Users}
            label="Korisnici"
            value="1"
            hint="Aktivnih administratora"
          />
        )}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="font-semibold text-slate-950">
              Nedavne izmjene
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Posljednje promjene sadržaja bit će prikazane ovdje.
            </p>
          </div>

          <div className="flex min-h-48 items-center justify-center px-6 py-10 text-center">
            <div>
              <FileText className="mx-auto h-6 w-6 text-slate-300" />
              <p className="mt-3 text-sm font-medium text-slate-600">
                Još nema evidentiranih izmjena
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Aktivnost će se pojaviti nakon prvih izmjena u CMS-u.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-slate-950">
            Brze radnje
          </h2>

          <div className="mt-4 space-y-2">
            <QuickLink
              to="/administracija/novosti"
              icon={Newspaper}
              title="Dodaj novu objavu"
              description="Objavi novu vijest ili obavijest."
            />

            <QuickLink
              to="/administracija/dokumenti"
              icon={FileText}
              title="Dodaj dokument"
              description="Prenesi PDF ili drugu datoteku."
            />

            <QuickLink
              to="/administracija/postavke"
              icon={Settings}
              title="Postavke web stranice"
              description="Kontaktni i osnovni podaci."
            />
          </div>
        </section>
      </div>
    </AdminShell>
  );
}

function DashboardStat({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: typeof Newspaper;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium text-slate-500">
            {label}
          </div>
          <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            {value}
          </div>
        </div>

        <div className="rounded-lg bg-slate-100 p-2.5 text-slate-600">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-3 text-xs text-slate-400">
        {hint}
      </div>
    </div>
  );
}

function QuickLink({
  to,
  icon: Icon,
  title,
  description,
}: {
  to:
    | "/administracija/novosti"
    | "/administracija/dokumenti"
    | "/administracija/postavke";
  icon: typeof Newspaper;
  title: string;
  description: string;
}) {
  return (
    <Link
      to={to}
      className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 transition hover:border-slate-300 hover:bg-slate-50"
    >
      <div className="mt-0.5 rounded-md bg-slate-100 p-2 text-slate-600">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <div className="text-sm font-semibold text-slate-900">
          {title}
        </div>
        <div className="mt-0.5 text-xs leading-5 text-slate-500">
          {description}
        </div>
      </div>
    </Link>
  );
}
