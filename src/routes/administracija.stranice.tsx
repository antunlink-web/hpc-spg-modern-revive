import {
  createFileRoute,
} from "@tanstack/react-router";
import {
  ExternalLink,
  Save,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  useServerFn,
} from "@tanstack/react-start";
import {
  AdminShell,
} from "../components/cms/AdminShell";
import {
  requireAdmin,
} from "../lib/cms/auth-functions";
import {
  listPagesAdmin,
  savePageAdmin,
} from "../lib/cms/page-functions";

export const Route = createFileRoute(
  "/administracija/stranice",
)({
  loader: async () => ({
    user: await requireAdmin(),
    pages: await listPagesAdmin(),
  }),
  component: PagesAdmin,
});

type PageData =
  Awaited<
    ReturnType<
      typeof listPagesAdmin
    >
  >[number];

function PagesAdmin() {
  const { user, pages } =
    Route.useLoaderData();

  const savePage =
    useServerFn(savePageAdmin);

  const [selectedKey, setSelectedKey] =
    useState(
      pages[0]?.key || "",
    );

  const selected = useMemo(
    () =>
      pages.find(
        (page) =>
          page.key === selectedKey,
      ) || pages[0],
    [pages, selectedKey],
  );

  const [
    content,
    setContent,
  ] = useState<
    Record<string, string>
  >(
    selected?.content || {},
  );

  const [
    saving,
    setSaving,
  ] = useState(false);

  const [
    message,
    setMessage,
  ] = useState("");

  useEffect(() => {
    setContent(
      selected?.content || {},
    );
    setMessage("");
  }, [selected]);

  async function handleSave() {
    if (!selected) return;

    setSaving(true);
    setMessage("");

    try {
      const result =
        await savePage({
          data: {
            pageKey:
              selected.key,
            content,
          },
        });

      setContent(
        result.content,
      );

      setMessage(
        "Promjene su spremljene.",
      );
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Spremanje nije uspjelo.",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <AdminShell
      user={user}
      title="Stranice"
      description="Uređivanje sadržaja glavnih stranica bez promjene dizajna i strukture."
    >
      <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="px-3 pb-2 pt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Stranice
          </div>

          <div className="space-y-1">
            {pages.map((page) => (
              <button
                key={page.key}
                type="button"
                onClick={() =>
                  setSelectedKey(
                    page.key,
                  )
                }
                className={
                  "w-full rounded-lg px-3 py-3 text-left transition " +
                  (selected?.key ===
                  page.key
                    ? "bg-slate-950 text-white"
                    : "text-slate-700 hover:bg-slate-50")
                }
              >
                <div className="text-sm font-semibold">
                  {page.label}
                </div>
                <div
                  className={
                    "mt-1 text-xs " +
                    (selected?.key ===
                    page.key
                      ? "text-slate-300"
                      : "text-slate-400")
                  }
                >
                  {page.publicPath}
                </div>
              </button>
            ))}
          </div>
        </aside>

        {selected ? (
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-7">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  {selected.label}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Uređujete samo tekstualni sadržaj ove stranice.
                </p>
              </div>

              <a
                href={
                  selected.publicPath
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950"
              >
                Otvori stranicu
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-6 p-5 lg:p-7">
              {selected.fields.map(
                (field) => (
                  <div
                    key={field.key}
                  >
                    <label className="block text-sm font-semibold text-slate-800">
                      {field.label}
                    </label>

                    {field.description ? (
                      <p className="mt-1 text-xs text-slate-500">
                        {
                          field.description
                        }
                      </p>
                    ) : null}

                    {field.type ===
                    "text" ? (
                      <input
                        value={
                          content[
                            field.key
                          ] || ""
                        }
                        onChange={(
                          event,
                        ) =>
                          setContent(
                            (
                              current,
                            ) => ({
                              ...current,
                              [field.key]:
                                event
                                  .target
                                  .value,
                            }),
                          )
                        }
                        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                      />
                    ) : (
                      <textarea
                        rows={
                          field.type ===
                          "lines"
                            ? 7
                            : 5
                        }
                        value={
                          content[
                            field.key
                          ] || ""
                        }
                        onChange={(
                          event,
                        ) =>
                          setContent(
                            (
                              current,
                            ) => ({
                              ...current,
                              [field.key]:
                                event
                                  .target
                                  .value,
                            }),
                          )
                        }
                        className="mt-2 w-full resize-y rounded-lg border border-slate-200 px-4 py-3 text-sm leading-6 outline-none transition focus:border-slate-400"
                      />
                    )}
                  </div>
                ),
              )}
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-7">
              <div className="text-sm text-slate-500">
                {message}
              </div>

              <button
                type="button"
                disabled={saving}
                onClick={
                  handleSave
                }
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-50"
              >
                <Save className="h-4 w-4" />

                {saving
                  ? "Spremanje..."
                  : "Spremi promjene"}
              </button>
            </div>
          </section>
        ) : null}
      </div>
    </AdminShell>
  );
}
