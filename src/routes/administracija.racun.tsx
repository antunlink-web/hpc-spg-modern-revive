import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  CheckCircle2,
  KeyRound,
  ShieldCheck,
} from "lucide-react";

import { AdminShell } from "../components/cms/AdminShell";
import { requireAdmin } from "../lib/cms/auth-functions";
import { changeOwnPasswordAdmin } from "../lib/cms/user-functions";

export const Route = createFileRoute("/administracija/racun")({
  head: () => ({
    meta: [
      {
        name: "robots",
        content: "noindex, nofollow",
      },
      {
        title: "Moj račun | HPC-SPG administracija",
      },
    ],
  }),
  loader: () => requireAdmin(),
  component: AccountPage,
});

function AccountPage() {
  const user = Route.useLoaderData();
  const changePassword = useServerFn(changeOwnPasswordAdmin);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (saving) return;

    setError(null);
    setSuccess(false);

    const form = event.currentTarget;
    const data = new FormData(form);

    const currentPassword = String(
      data.get("current_password") ?? "",
    );
    const newPassword = String(
      data.get("new_password") ?? "",
    );
    const confirmPassword = String(
      data.get("confirm_password") ?? "",
    );

    if (newPassword !== confirmPassword) {
      setError("Nove lozinke se ne podudaraju.");
      return;
    }

    setSaving(true);

    try {
      const result = await changePassword({
        data: {
          currentPassword,
          newPassword,
        },
      });

      if (!result.success) {
        setError(result.error);
        return;
      }

      form.reset();
      setSuccess(true);
    } catch {
      setError(
        "Došlo je do pogreške pri promjeni lozinke. Pokušajte ponovno.",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <AdminShell
      user={user}
      title="Moj račun"
      description="Podaci računa i sigurnosne postavke."
    >
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-slate-100 p-3 text-slate-600">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-950">
                Podaci računa
              </h2>
              <p className="mt-0.5 text-sm text-slate-500">
                Vaš administratorski račun.
              </p>
            </div>
          </div>

          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                E-mail
              </dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900">
                {user.email}
              </dd>
            </div>

            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Ovlasti
              </dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900">
                {user.role === "superadministrator"
                  ? "Superadministrator"
                  : "Administrator"}
              </dd>
            </div>
          </dl>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-slate-100 p-3 text-slate-600">
                <KeyRound className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-semibold text-slate-950">
                  Promjena lozinke
                </h2>
                <p className="mt-0.5 text-sm text-slate-500">
                  Za potvrdu unesite svoju trenutačnu lozinku.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 p-6"
          >
            <div>
              <label
                htmlFor="current-password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Trenutačna lozinka
              </label>
              <input
                id="current-password"
                name="current_password"
                type="password"
                required
                autoComplete="current-password"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label
                htmlFor="new-password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Nova lozinka
              </label>
              <input
                id="new-password"
                name="new_password"
                type="password"
                required
                minLength={10}
                autoComplete="new-password"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
              <p className="mt-1.5 text-xs text-slate-500">
                Najmanje 10 znakova.
              </p>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ponovite novu lozinku
              </label>
              <input
                id="confirm-password"
                name="confirm_password"
                type="password"
                required
                minLength={10}
                autoComplete="new-password"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {success && (
              <div className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Lozinka je uspješno promijenjena.
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={saving}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <KeyRound className="h-4 w-4" />
              {saving
                ? "Spremanje..."
                : "Promijeni lozinku"}
            </button>
          </form>
        </section>
      </div>
    </AdminShell>
  );
}
