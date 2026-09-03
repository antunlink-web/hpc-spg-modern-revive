import {
  useRef,
  useState,
} from "react";
import {
  Bold,
  Heading2,
  Italic,
  Link as LinkIcon,
  List,
  Save,
  Trash2,
  Plus,
  FileText,
  ExternalLink,
  X,
} from "lucide-react";
import {
  useNavigate,
} from "@tanstack/react-router";
import {
  useServerFn,
} from "@tanstack/react-start";
import {
  deleteNewsAdmin,
  saveNewsAdmin,
} from "@/lib/cms/news-functions";

type NewsResource = {
  label: string;
  href: string;
};

type NewsEditorPost = {
  id?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  coverImage?: string;
  publishedAt?: string;
  status?: "draft" | "published" | "hidden";
  category?: string;
  seoTitle?: string;
  metaDescription?: string;
  isArchived?: boolean;
  documents?: NewsResource[];
  externalLinks?: NewsResource[];
  gallery?: unknown[];
};

export function NewsEditor({
  post,
}: {
  post?: NewsEditorPost | null;
}) {
  const navigate = useNavigate();
  const saveNews = useServerFn(saveNewsAdmin);
  const deleteNews = useServerFn(deleteNewsAdmin);

  const editorRef =
    useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState(
    post?.title ?? "",
  );
  const [slug, setSlug] = useState(
    post?.slug ?? "",
  );
  const [category, setCategory] = useState(
    post?.category ?? "Novost",
  );
  const [coverImage, setCoverImage] =
    useState(post?.coverImage ?? "");

  const [uploadingImage, setUploadingImage] =
    useState(false);

  const [publishedAt, setPublishedAt] =
    useState(post?.publishedAt ?? "");
  const [excerpt, setExcerpt] = useState(
    post?.excerpt ?? "",
  );
  const [seoTitle, setSeoTitle] = useState(
    post?.seoTitle ?? "",
  );
  const [
    metaDescription,
    setMetaDescription,
  ] = useState(
    post?.metaDescription ?? "",
  );
  const [status, setStatus] = useState<
    "draft" | "published" | "hidden"
  >(post?.status ?? "draft");

  const [isArchived, setIsArchived] =
    useState(Boolean(post?.isArchived));

  const [
    uploadingDocument,
    setUploadingDocument,
  ] = useState<number | null>(null);

  const [documents, setDocuments] =
    useState<NewsResource[]>(
      Array.isArray(post?.documents)
        ? post.documents.map((item) => ({
            label:
              typeof item?.label === "string"
                ? item.label
                : "",
            href:
              typeof item?.href === "string"
                ? item.href
                : "",
          }))
        : [],
    );

  const [
    externalLinks,
    setExternalLinks,
  ] = useState<NewsResource[]>(
    Array.isArray(post?.externalLinks)
      ? post.externalLinks.map((item) => ({
          label:
            typeof item?.label === "string"
              ? item.label
              : "",
          href:
            typeof item?.href === "string"
              ? item.href
              : "",
        }))
      : [],
  );

  const [saving, setSaving] =
    useState(false);
  const [message, setMessage] =
    useState("");
  const [bodyContent, setBodyContent] =
    useState(post?.content ?? "");

  function runCommand(
    command: string,
    value?: string,
  ) {
    editorRef.current?.focus();
    document.execCommand(
      command,
      false,
      value,
    );
  }

  function insertLink() {
    const href = window.prompt(
      "Unesite poveznicu:",
      "https://",
    );

    if (!href) return;

    runCommand("createLink", href);
  }

  async function handleImageUpload(
    file: File,
  ) {
    if (
      ![
        "image/jpeg",
        "image/png",
        "image/webp",
      ].includes(file.type)
    ) {
      setMessage(
        "Dopušteni formati slike su JPG, PNG i WebP.",
      );
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage(
        "Slika je prevelika. Najveća dopuštena veličina je 5 MB.",
      );
      return;
    }

    setUploadingImage(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        "/api/cms/news-upload",
        {
          method: "POST",
          body: formData,
          credentials: "same-origin",
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Prijenos slike nije uspio.",
        );
      }

      if (
        typeof result?.url !== "string" ||
        !result.url
      ) {
        throw new Error(
          "Poslužitelj nije vratio adresu slike.",
        );
      }

      setCoverImage(result.url);
      setMessage(
        "Slika je učitana. Spremite objavu za potvrdu promjene.",
      );
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Prijenos slike nije uspio.",
      );
    } finally {
      setUploadingImage(false);
    }
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");

    try {
      const result = await saveNews({
        data: {
          id: post?.id,
          title,
          slug,
          category,
          publishedAt,
          excerpt,
          content: bodyContent,
          coverImage,
          seoTitle,
          metaDescription,
          status,
          isArchived,
          documents,
          externalLinks,
        },
      });

      setMessage("Objava je spremljena.");

      if (!post?.id) {
        await navigate({
          to: "/administracija/novosti/$id",
          params: {
            id: result.id,
          },
          replace: true,
        });
      }
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

  async function handleDelete() {
    if (!post?.id) return;

    const confirmed = window.confirm(
      "Želite li trajno izbrisati ovu objavu?",
    );

    if (!confirmed) return;

    setSaving(true);
    setMessage("");

    try {
      await deleteNews({
        data: {
          id: post.id,
        },
      });

      await navigate({
        to: "/administracija/novosti",
      });
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Brisanje nije uspjelo.",
      );
      setSaving(false);
    }
  }

  const preservedExtras =
    post?.gallery?.length ?? 0;

  async function handleDocumentUpload(
    index: number,
    file: File,
  ) {
    if (
      file.type !== "application/pdf" &&
      !file.name
        .toLowerCase()
        .endsWith(".pdf")
    ) {
      setMessage(
        "Dopuštene su samo PDF datoteke.",
      );
      return;
    }

    if (
      file.size >
      15 * 1024 * 1024
    ) {
      setMessage(
        "PDF je prevelik. Najveća dopuštena veličina je 15 MB.",
      );
      return;
    }

    setUploadingDocument(index);
    setMessage("");

    try {
      const formData =
        new FormData();

      formData.append(
        "document",
        file,
      );

      const response = await fetch(
        "/api/cms/document-upload",
        {
          method: "POST",
          body: formData,
          credentials: "same-origin",
        },
      );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Prijenos PDF-a nije uspio.",
        );
      }

      if (
        typeof result?.url !==
          "string" ||
        !result.url
      ) {
        throw new Error(
          "Poslužitelj nije vratio adresu dokumenta.",
        );
      }

      setDocuments((items) =>
        items.map(
          (item, itemIndex) =>
            itemIndex === index
              ? {
                  ...item,
                  href: result.url,
                  label:
                    item.label ||
                    String(
                      result.originalName ||
                        file.name,
                    )
                      .replace(
                        /\.pdf$/i,
                        "",
                      )
                      .replace(
                        /[-_]+/g,
                        " ",
                      ),
                }
              : item,
        ),
      );

      setMessage(
        "PDF je učitan. Spremite objavu za potvrdu promjene.",
      );
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Prijenos PDF-a nije uspio.",
      );
    } finally {
      setUploadingDocument(null);
    }
  }

  function updateDocument(
    index: number,
    field: keyof NewsResource,
    value: string,
  ) {
    setDocuments((items) =>
      items.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    );
  }

  function updateExternalLink(
    index: number,
    field: keyof NewsResource,
    value: string,
  ) {
    setExternalLinks((items) =>
      items.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="space-y-6">
        <section className="rounded-xl border border-border bg-background p-5 lg:p-6">
          <label className="block text-sm font-medium text-navy">
            Naslov
          </label>

          <input
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-lg font-semibold text-navy outline-none transition focus:border-emerald"
            placeholder="Naslov objave"
          />

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-navy">
                URL oznaka
              </label>

              <input
                value={slug}
                onChange={(event) =>
                  setSlug(event.target.value)
                }
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-emerald"
                placeholder="automatski-iz-naslova"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy">
                Kategorija
              </label>

              <input
                value={category}
                onChange={(event) =>
                  setCategory(
                    event.target.value,
                  )
                }
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-emerald"
                placeholder="Obavijest"
              />
            </div>
          </div>

          <label className="mt-5 block text-sm font-medium text-navy">
            Kratki opis
          </label>

          <textarea
            value={excerpt}
            onChange={(event) =>
              setExcerpt(event.target.value)
            }
            rows={4}
            className="mt-2 w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm leading-relaxed outline-none focus:border-emerald"
            placeholder="Kratki opis za popis novosti..."
          />
        </section>

        <section className="overflow-hidden rounded-xl border border-border bg-background">
          <div className="flex flex-wrap items-center gap-1 border-b border-border bg-surface px-3 py-2">
            <button
              type="button"
              onClick={() =>
                runCommand("bold")
              }
              className="rounded-md p-2 text-navy hover:bg-background"
              title="Podebljano"
            >
              <Bold className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() =>
                runCommand("italic")
              }
              className="rounded-md p-2 text-navy hover:bg-background"
              title="Kurziv"
            >
              <Italic className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() =>
                runCommand(
                  "formatBlock",
                  "h2",
                )
              }
              className="rounded-md p-2 text-navy hover:bg-background"
              title="Naslov"
            >
              <Heading2 className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() =>
                runCommand(
                  "insertUnorderedList",
                )
              }
              className="rounded-md p-2 text-navy hover:bg-background"
              title="Popis"
            >
              <List className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={insertLink}
              className="rounded-md p-2 text-navy hover:bg-background"
              title="Poveznica"
            >
              <LinkIcon className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            dangerouslySetInnerHTML={{
              __html: bodyContent,
            }}
            onInput={(event) =>
              setBodyContent(
                event.currentTarget.innerHTML,
              )
            }
            className="prose prose-sm min-h-[420px] max-w-none px-6 py-5 text-foreground outline-none lg:prose-base focus:bg-surface/30"
          />
        </section>

        <section className="rounded-xl border border-border bg-background p-5 lg:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-navy">
                Dokumenti
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Dokumenti povezani s ovom objavom.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setDocuments((items) => [
                  ...items,
                  {
                    label: "",
                    href: "",
                  },
                ])
              }
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-navy transition hover:border-navy/30 hover:bg-surface"
            >
              <Plus className="h-4 w-4" />
              Dodaj dokument
            </button>
          </div>

          {documents.length === 0 ? (
            <div className="mt-5 rounded-lg border border-dashed border-border bg-surface/40 px-4 py-5 text-sm text-muted-foreground">
              Nema dodanih dokumenata.
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              {documents.map(
                (document, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-navy">
                        <FileText className="h-4 w-4 text-emerald" />
                        Dokument {index + 1}
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setDocuments(
                            (items) =>
                              items.filter(
                                (_, itemIndex) =>
                                  itemIndex !==
                                  index,
                              ),
                          )
                        }
                        className="rounded-md p-1.5 text-muted-foreground transition hover:bg-red-50 hover:text-red-700"
                        title="Ukloni dokument"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <label className="mt-4 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Naziv
                    </label>

                    <input
                      value={document.label}
                      onChange={(event) =>
                        updateDocument(
                          index,
                          "label",
                          event.target.value,
                        )
                      }
                      className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-emerald"
                      placeholder="Primjer: Odluka Ministarstva"
                    />

                    <label className="mt-4 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      PDF datoteka
                    </label>

                    <input
                      type="file"
                      accept="application/pdf,.pdf"
                      disabled={
                        uploadingDocument ===
                        index
                      }
                      className="mt-2 block w-full text-xs text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-navy file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-50"
                      onChange={(event) => {
                        const file =
                          event.target
                            .files?.[0];

                        if (file) {
                          void handleDocumentUpload(
                            index,
                            file,
                          );
                        }

                        event.currentTarget.value =
                          "";
                      }}
                    />

                    {uploadingDocument ===
                    index ? (
                      <p className="mt-2 text-xs font-medium text-emerald">
                        Učitavanje PDF-a...
                      </p>
                    ) : null}

                    <label className="mt-4 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Poveznica
                    </label>

                    <input
                      value={document.href}
                      onChange={(event) =>
                        updateDocument(
                          index,
                          "href",
                          event.target.value,
                        )
                      }
                      className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-emerald"
                      placeholder="/dokumenti/dokument.pdf ili https://..."
                    />
                  </div>
                ),
              )}
            </div>
          )}
        </section>

        <section className="rounded-xl border border-border bg-background p-5 lg:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-navy">
                Vanjske poveznice
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Dodatne poveznice povezane s objavom.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setExternalLinks(
                  (items) => [
                    ...items,
                    {
                      label: "",
                      href: "",
                    },
                  ],
                )
              }
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-navy transition hover:border-navy/30 hover:bg-surface"
            >
              <Plus className="h-4 w-4" />
              Dodaj poveznicu
            </button>
          </div>

          {externalLinks.length === 0 ? (
            <div className="mt-5 rounded-lg border border-dashed border-border bg-surface/40 px-4 py-5 text-sm text-muted-foreground">
              Nema dodanih vanjskih poveznica.
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              {externalLinks.map(
                (link, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-border p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-navy">
                        <ExternalLink className="h-4 w-4 text-emerald" />
                        Poveznica {index + 1}
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setExternalLinks(
                            (items) =>
                              items.filter(
                                (_, itemIndex) =>
                                  itemIndex !==
                                  index,
                              ),
                          )
                        }
                        className="rounded-md p-1.5 text-muted-foreground transition hover:bg-red-50 hover:text-red-700"
                        title="Ukloni poveznicu"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <label className="mt-4 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Naziv
                    </label>

                    <input
                      value={link.label}
                      onChange={(event) =>
                        updateExternalLink(
                          index,
                          "label",
                          event.target.value,
                        )
                      }
                      className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-emerald"
                      placeholder="Primjer: Više informacija"
                    />

                    <label className="mt-4 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Adresa
                    </label>

                    <input
                      value={link.href}
                      onChange={(event) =>
                        updateExternalLink(
                          index,
                          "href",
                          event.target.value,
                        )
                      }
                      className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-emerald"
                      placeholder="https://..."
                    />
                  </div>
                ),
              )}
            </div>
          )}
        </section>

              </div>

      <aside className="space-y-5">
        <section className="rounded-xl border border-border bg-background p-5">
          <h2 className="text-sm font-semibold text-navy">
            Istaknuta slika
          </h2>

          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Slika se prikazuje uz objavu i na naslovnici kada je objava među najnovijima.
          </p>

          {coverImage ? (
            <div className="mt-4">
              <div className="overflow-hidden rounded-lg border border-border bg-surface">
                <img
                  src={coverImage}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  setCoverImage("")
                }
                disabled={uploadingImage}
                className="mt-3 w-full rounded-lg border border-border px-3 py-2 text-sm font-medium text-navy transition hover:border-navy/30 hover:bg-surface disabled:cursor-not-allowed disabled:opacity-50"
              >
                Ukloni sliku
              </button>
            </div>
          ) : null}

          <label className="mt-4 block">
            <span className="sr-only">
              Odaberi istaknutu sliku
            </span>

            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              disabled={uploadingImage}
              className="block w-full text-xs text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-navy file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-50"
              onChange={(event) => {
                const file =
                  event.target.files?.[0];

                if (file) {
                  void handleImageUpload(file);
                }

                event.currentTarget.value = "";
              }}
            />
          </label>

          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            JPG, PNG ili WebP. Najviše 5 MB.
          </p>

          {uploadingImage ? (
            <p className="mt-3 text-xs font-medium text-emerald">
              Učitavanje slike...
            </p>
          ) : null}
        </section>

        <section className="rounded-xl border border-border bg-background p-5">
          <h2 className="text-sm font-semibold text-navy">
            Objavljivanje
          </h2>

          <label className="mt-5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Status
          </label>

          <select
            value={status}
            onChange={(event) =>
              setStatus(
                event.target.value as
                  | "draft"
                  | "published"
                  | "hidden",
              )
            }
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-emerald"
          >
            <option value="published">
              Objavljeno
            </option>
            <option value="draft">
              Skica
            </option>
            <option value="hidden">
              Skriveno
            </option>
          </select>

          <label className="mt-5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Datum
          </label>

          <input
            type="date"
            value={publishedAt}
            onChange={(event) =>
              setPublishedAt(
                event.target.value,
              )
            }
            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-emerald"
          />

          <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm text-navy">
            <input
              type="checkbox"
              checked={isArchived}
              onChange={(event) =>
                setIsArchived(
                  event.target.checked,
                )
              }
              className="h-4 w-4"
            />

            Arhivirana objava
          </label>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white transition hover:bg-navy/90 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {saving
              ? "Spremanje..."
              : "Spremi objavu"}
          </button>

          {message && (
            <p className="mt-3 text-sm text-muted-foreground">
              {message}
            </p>
          )}

          {post?.id && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={saving}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-700 hover:bg-red-50 disabled:opacity-50"
            >
              <Trash2 className="h-4 w-4" />
              Izbriši objavu
            </button>
          )}
        </section>

        {preservedExtras > 0 && (
          <section className="rounded-xl border border-border bg-surface p-5">
            <p className="text-sm font-semibold text-navy">
              Dodatni sadržaj
            </p>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Dokumenti, poveznice i galerije
              postojeće objave sačuvani su u
              bazi i neće se ukloniti
              spremanjem ovog obrasca.
            </p>
          </section>
        )}
      </aside>
    </div>
  );
}
