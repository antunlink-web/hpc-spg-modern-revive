import { useState } from "react";
import {
  createFileRoute,
  redirect,
  useRouter,
} from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  KeyRound,
  Power,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";

import { AdminShell } from "../components/cms/AdminShell";
import { requireAdmin } from "../lib/cms/auth-functions";
import {
  changeUserPasswordAdmin,
  createUserAdmin,
  listUsersAdmin,
  setUserActiveAdmin,
} from "../lib/cms/user-functions";

export const Route = createFileRoute("/administracija/korisnici")({
  loader: async () => {
    const user = await requireAdmin();

    if (user.role !== "superadministrator") {
      throw redirect({
        to: "/administracija",
      });
    }

    const users = await listUsersAdmin();

    return {
      user,
      users,
    };
  },
  component: UsersAdmin,
});

function formatDate(value: string | null) {
  if (!value) return "Nikad";

  try {
    return new Intl.DateTimeFormat("hr-HR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

function UsersAdmin() {
  const { user, users } = Route.useLoaderData();
  const router = useRouter();

  const createUser = useServerFn(createUserAdmin);
  const setUserActive = useServerFn(setUserActiveAdmin);
  const changePassword = useServerFn(changeUserPasswordAdmin);

  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [createSuccess, setCreateSuccess] = useState<string | null>(null);

  const [passwordUserId, setPasswordUserId] = useState<string | null>(null);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSaving, setPasswordSaving] = useState(false);

  async function refreshUsers() {
    await router.invalidate();
  }

  async function handleCreate(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (creating) return;

    setCreateError(null);
    setCreateSuccess(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const passwordConfirm = String(
      data.get("password_confirm") ?? "",
    );
    const role = String(data.get("role") ?? "administrator");

    if (password !== passwordConfirm) {
      setCreateError("Lozinke se ne podudaraju.");
      return;
    }

    setCreating(true);

    try {
      const result = await createUser({
        data: {
          email,
          password,
          role,
        },
      });

      if (!result.success) {
        setCreateError(result.error);
        return;
      }

      form.reset();
      setCreateSuccess(`Račun ${email} uspješno je kreiran.`);
      await refreshUsers();
    } catch {
      setCreateError("Došlo je do pogreške pri kreiranju računa.");
    } finally {
      setCreating(false);
    }
  }

  async function handleToggleUser(
    userId: string,
    currentActive: boolean,
  ) {
    const action = currentActive ? "deaktivirati" : "aktivirati";

    if (
      !window.confirm(
        `Želite li zaista ${action} ovaj korisnički račun?`,
      )
    ) {
      return;
    }

    const result = await setUserActive({
      data: {
        userId,
        isActive: !currentActive,
      },
    });

    if (!result.success) {
      window.alert(result.error);
      return;
    }

    await refreshUsers();
  }

  async function handlePasswordChange(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!passwordUserId || passwordSaving) return;

    setPasswordError(null);

    if (passwordValue !== passwordConfirm) {
      setPasswordError("Lozinke se ne podudaraju.");
      return;
    }

    setPasswordSaving(true);

    try {
      const result = await changePassword({
        data: {
          userId: passwordUserId,
          password: passwordValue,
        },
      });

      if (!result.success) {
        setPasswordError(result.error);
        return;
      }

      setPasswordUserId(null);
      setPasswordValue("");
      setPasswordConfirm("");
      await refreshUsers();
    } catch {
      setPasswordError(
        "Došlo je do pogreške pri promjeni lozinke.",
      );
    } finally {
      setPasswordSaving(false);
    }
  }

  return (
    <AdminShell
      user={user}
      title="Korisnici"
      description="Administratorski računi i ovlasti."
    >
      <div className="space-y-6">
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <UserPlus className="h-5 w-5 text-slate-700" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Novi administrator
                </h2>
                <p className="text-sm text-slate-500">
                  Kreirajte račun za pristup administraciji.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleCreate}
            className="grid gap-5 p-6 lg:grid-cols-2"
          >
            <div className="lg:col-span-2">
              <label
                htmlFor="new-user-email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                E-mail adresa
              </label>
              <input
                id="new-user-email"
                name="email"
                type="email"
                required
                autoComplete="off"
                placeholder="ime@hpc-spg.hr"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label
                htmlFor="new-user-password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Početna lozinka
              </label>
              <input
                id="new-user-password"
                name="password"
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
                htmlFor="new-user-password-confirm"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ponovite lozinku
              </label>
              <input
                id="new-user-password-confirm"
                name="password_confirm"
                type="password"
                required
                minLength={10}
                autoComplete="new-password"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label
                htmlFor="new-user-role"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Ovlasti
              </label>
              <select
                id="new-user-role"
                name="role"
                defaultValue="administrator"
                className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-950 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              >
                <option value="administrator">
                  Administrator
                </option>
                <option value="superadministrator">
                  Superadministrator
                </option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                disabled={creating}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <UserPlus className="h-4 w-4" />
                {creating ? "Kreiranje..." : "Kreiraj račun"}
              </button>
            </div>

            {createError && (
              <div className="lg:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {createError}
              </div>
            )}

            {createSuccess && (
              <div className="lg:col-span-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {createSuccess}
              </div>
            )}
          </form>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <Users className="h-5 w-5 text-slate-700" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Administratori
                </h2>
                <p className="text-sm text-slate-500">
                  {users.length}{" "}
                  {users.length === 1 ? "račun" : "računa"}
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-200">
            {users.map((account) => {
              const isCurrentUser = account.id === user.id;

              return (
                <div
                  key={account.id}
                  className="px-6 py-5"
                >
                  <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="truncate font-semibold text-slate-950">
                          {account.email}
                        </p>

                        <span
                          className={
                            account.role === "superadministrator"
                              ? "inline-flex items-center gap-1 rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700"
                              : "inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                          }
                        >
                          <ShieldCheck className="h-3.5 w-3.5" />
                          {account.role === "superadministrator"
                            ? "Superadministrator"
                            : "Administrator"}
                        </span>

                        <span
                          className={
                            account.isActive
                              ? "rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                              : "rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700"
                          }
                        >
                          {account.isActive ? "Aktivan" : "Neaktivan"}
                        </span>

                        {isCurrentUser && (
                          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                            Vaš račun
                          </span>
                        )}
                      </div>

                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500">
                        <span>
                          Kreiran: {formatDate(account.createdAt)}
                        </span>
                        <span>
                          Zadnja prijava:{" "}
                          {formatDate(account.lastLoginAt)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setPasswordUserId(account.id);
                          setPasswordValue("");
                          setPasswordConfirm("");
                          setPasswordError(null);
                        }}
                        className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                      >
                        <KeyRound className="h-4 w-4" />
                        Promijeni lozinku
                      </button>

                      <button
                        type="button"
                        disabled={isCurrentUser && account.isActive}
                        onClick={() =>
                          handleToggleUser(
                            account.id,
                            account.isActive,
                          )
                        }
                        className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <Power className="h-4 w-4" />
                        {account.isActive
                          ? "Deaktiviraj"
                          : "Aktiviraj"}
                      </button>
                    </div>
                  </div>

                  {passwordUserId === account.id && (
                    <form
                      onSubmit={handlePasswordChange}
                      className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_auto]">
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-slate-700">
                            Nova lozinka
                          </label>
                          <input
                            type="password"
                            minLength={10}
                            required
                            value={passwordValue}
                            onChange={(event) =>
                              setPasswordValue(event.target.value)
                            }
                            autoComplete="new-password"
                            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                          />
                        </div>

                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-slate-700">
                            Ponovite lozinku
                          </label>
                          <input
                            type="password"
                            minLength={10}
                            required
                            value={passwordConfirm}
                            onChange={(event) =>
                              setPasswordConfirm(event.target.value)
                            }
                            autoComplete="new-password"
                            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                          />
                        </div>

                        <div className="flex items-end gap-2">
                          <button
                            type="submit"
                            disabled={passwordSaving}
                            className="h-10 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
                          >
                            {passwordSaving
                              ? "Spremanje..."
                              : "Spremi"}
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setPasswordUserId(null);
                              setPasswordValue("");
                              setPasswordConfirm("");
                              setPasswordError(null);
                            }}
                            className="h-10 rounded-lg border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
                          >
                            Odustani
                          </button>
                        </div>
                      </div>

                      {passwordError && (
                        <p className="mt-3 text-sm text-red-700">
                          {passwordError}
                        </p>
                      )}
                    </form>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
