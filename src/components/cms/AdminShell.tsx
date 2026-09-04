import type { ReactNode } from "react";
import {
  FileText,
  LayoutDashboard,
  LogOut,
  Newspaper,
  Settings,
  Users,
  ExternalLink,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { logoutAdmin } from "../../lib/cms/auth-functions";

type AdminUser = {
  id?: string;
  email: string;
  role: "superadministrator" | "administrator";
};

type AdminShellProps = {
  user: AdminUser;
  title: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
};

const navItems = [
  {
    label: "Pregled",
    to: "/administracija",
    icon: LayoutDashboard,
  },
  {
    label: "Novosti",
    to: "/administracija/novosti",
    icon: Newspaper,
  },
  {
    label: "Stranice",
    to: "/administracija/stranice",
    icon: FileText,
  },
  {
    label: "Dokumenti",
    to: "/administracija/dokumenti",
    icon: FileText,
  },
  {
    label: "Postavke",
    to: "/administracija/postavke",
    icon: Settings,
  },
] as const;

export function AdminShell({
  user,
  title,
  description,
  children,
  actions,
}: AdminShellProps) {
  const logout = useServerFn(logoutAdmin);

  async function handleLogout() {
    await logout();
    window.location.href = "/administracija/prijava";
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-slate-200 bg-slate-950 lg:flex lg:flex-col">
        <div className="border-b border-white/10 px-6 py-6">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">
            HPC-SPG
          </div>
          <div className="mt-1 text-xl font-semibold text-white">
            Administracija
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{
                  exact: item.to === "/administracija",
                }}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                activeProps={{
                  className:
                    "flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2.5 text-sm font-medium text-white",
                }}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}

          {user.role === "superadministrator" && (
            <Link
              to="/administracija/korisnici"
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              activeProps={{
                className:
                  "flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2.5 text-sm font-medium text-white",
              }}
            >
              <Users className="h-4 w-4" />
              Korisnici
            </Link>
          )}
        </nav>

        <div className="border-t border-white/10 p-4">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            Otvori web stranicu
          </a>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex min-h-16 items-center justify-between gap-4 px-5 lg:px-8">
            <div className="lg:hidden">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                HPC-SPG
              </div>
              <div className="font-semibold">Administracija</div>
            </div>

            <div className="hidden lg:block" />

            <div className="flex items-center gap-4">
              <Link
                to="/administracija/racun"
                className="hidden rounded-lg px-2 py-1 text-right transition hover:bg-slate-50 sm:block"
                title="Moj račun"
              >
                <div className="text-sm font-semibold text-slate-900">
                  {user.email}
                </div>
                <div className="text-xs text-slate-500">
                  {user.role === "superadministrator"
                    ? "Superadministrator"
                    : "Administrator"}
                </div>
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Odjava</span>
              </button>
            </div>
          </div>
        </header>

        <main className="px-5 py-7 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-950 lg:text-3xl">
                  {title}
                </h1>

                {description && (
                  <p className="mt-1.5 text-sm text-slate-500 lg:text-base">
                    {description}
                  </p>
                )}
              </div>

              {actions && (
                <div className="flex shrink-0 items-center gap-2">
                  {actions}
                </div>
              )}
            </div>

            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export function CmsPlaceholder({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="max-w-xl">
        <h2 className="text-lg font-semibold text-slate-950">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}
