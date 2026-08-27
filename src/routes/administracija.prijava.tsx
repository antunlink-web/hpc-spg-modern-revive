import { FormEvent, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

import {
  getCurrentAdmin,
  loginAdmin,
} from "@/lib/cms/auth-functions";

export const Route = createFileRoute(
  "/administracija/prijava",
)({
  beforeLoad: async () => {
    const user = await getCurrentAdmin();

    if (user && typeof window !== "undefined") {
      window.location.replace("/administracija");
    }
  },

  head: () => ({
    meta: [
      { title: "Administracija | HPC-SPG" },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),

  component: LoginPage,
});

function LoginPage() {
  const login = useServerFn(loginAdmin);

  const [error, setError] = useState("");
  const [submitting, setSubmitting] =
    useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setSubmitting(true);
    setError("");

    const form = new FormData(
      event.currentTarget,
    );

    try {
      const result = await login({
        data: {
          email: String(
            form.get("email") ?? "",
          ),
          password: String(
            form.get("password") ?? "",
          ),
        },
      });

      if (!result.success) {
        setError(result.error);
        return;
      }

      window.location.replace(
        "/administracija",
      );
    } catch {
      setError(
        "Prijava trenutačno nije dostupna. Pokušajte ponovno.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center">
        <div className="w-full rounded-2xl border border-white/10 bg-white p-8 shadow-2xl">
          <div className="mb-8">
            <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              HPC-SPG
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              Administracija
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Prijavite se za upravljanje sadržajem web stranice.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-950 outline-none transition focus:border-slate-600 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Lozinka
              </label>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-950 outline-none transition focus:border-slate-600 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            {error ? (
              <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-slate-950 px-4 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting
                ? "Prijava..."
                : "Prijavi se"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
