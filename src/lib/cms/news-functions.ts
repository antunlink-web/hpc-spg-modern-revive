import { randomUUID } from "node:crypto";
import { createServerFn } from "@tanstack/react-start";
import { getCmsDb } from "./db";
import { requireAdmin } from "./auth-functions";

type NewsStatus = "draft" | "published" | "hidden";

type SaveNewsInput = {
  id?: string;
  title?: string;
  slug?: string;
  category?: string;
  publishedAt?: string;
  excerpt?: string;
  content?: string;
  seoTitle?: string;
  metaDescription?: string;
  status?: NewsStatus;
  isArchived?: boolean;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 180);
}

function croatianDate(value: string) {
  if (!value) return "";

  const date = new Date(`${value}T12:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function mapNewsRow(row: any) {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? "",
    content: row.content ?? "",
    coverImage: row.cover_image ?? "",
    publishedAt: row.published_at ?? "",
    displayDate: row.display_date ?? "",
    status: row.status as NewsStatus,
    category: row.category ?? "Novost",
    seoTitle: row.seo_title ?? "",
    metaDescription: row.meta_description ?? "",
    isArchived: Boolean(row.is_archived),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    documents: JSON.parse(row.documents_json || "[]"),
    externalLinks: JSON.parse(row.external_links_json || "[]"),
    gallery: JSON.parse(row.gallery_json || "[]"),
    legacySlugs: JSON.parse(row.legacy_slugs_json || "[]"),
  };
}

export const listNewsAdmin = createServerFn({
  method: "GET",
}).handler(async () => {
  await requireAdmin();

  const db = getCmsDb();

  return db
    .prepare(`
      SELECT *
      FROM news
      ORDER BY
        CASE WHEN published_at IS NULL OR published_at = '' THEN 1 ELSE 0 END,
        published_at DESC,
        created_at DESC
    `)
    .all()
    .map(mapNewsRow);
});

export const getNewsAdmin = createServerFn({
  method: "GET",
}).handler(async ({ data }: any) => {
  await requireAdmin();

  const id = clean(data?.id);

  if (!id) return null;

  const row = getCmsDb()
    .prepare(`
      SELECT *
      FROM news
      WHERE id = ?
      LIMIT 1
    `)
    .get(id);

  return row ? mapNewsRow(row) : null;
});

export const saveNewsAdmin = createServerFn({
  method: "POST",
}).handler(async ({ data }: { data: SaveNewsInput }) => {
  await requireAdmin();

  const db = getCmsDb();

  const id = clean(data?.id) || randomUUID();
  const title = clean(data?.title);

  if (!title) {
    throw new Error("Naslov je obavezan.");
  }

  const slug = slugify(
    clean(data?.slug) || title,
  );

  if (!slug) {
    throw new Error("Nije moguće generirati URL oznaku.");
  }

  const category =
    clean(data?.category) || "Novost";

  const excerpt = clean(data?.excerpt);
  const content =
    typeof data?.content === "string"
      ? data.content.trim()
      : "";

  const seoTitle = clean(data?.seoTitle);
  const metaDescription =
    clean(data?.metaDescription);

  const publishedAt =
    clean(data?.publishedAt) || null;

  const status: NewsStatus =
    data?.status === "draft" ||
    data?.status === "hidden"
      ? data.status
      : "published";

  const isArchived =
    data?.isArchived ? 1 : 0;

  const now = new Date().toISOString();

  const duplicate = db
    .prepare(`
      SELECT id
      FROM news
      WHERE slug = ?
        AND id <> ?
      LIMIT 1
    `)
    .get(slug, id);

  if (duplicate) {
    throw new Error(
      "Objava s ovom URL oznakom već postoji.",
    );
  }

  const existing = db
    .prepare(`
      SELECT id
      FROM news
      WHERE id = ?
      LIMIT 1
    `)
    .get(id);

  if (existing) {
    db.prepare(`
      UPDATE news
      SET
        title = ?,
        slug = ?,
        excerpt = ?,
        content = ?,
        published_at = ?,
        status = ?,
        updated_at = ?,
        category = ?,
        display_date = ?,
        seo_title = ?,
        meta_description = ?,
        is_archived = ?
      WHERE id = ?
    `).run(
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      status,
      now,
      category,
      publishedAt
        ? croatianDate(publishedAt)
        : "",
      seoTitle || null,
      metaDescription || null,
      isArchived,
      id,
    );
  } else {
    db.prepare(`
      INSERT INTO news (
        id,
        title,
        slug,
        excerpt,
        content,
        cover_image,
        published_at,
        status,
        created_at,
        updated_at,
        category,
        display_date,
        seo_title,
        meta_description,
        documents_json,
        external_links_json,
        gallery_json,
        legacy_slugs_json,
        is_archived
      )
      VALUES (
        ?, ?, ?, ?, ?, NULL, ?, ?, ?, ?, ?, ?, ?, ?,
        '[]', '[]', '[]', '[]', ?
      )
    `).run(
      id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      status,
      now,
      now,
      category,
      publishedAt
        ? croatianDate(publishedAt)
        : "",
      seoTitle || null,
      metaDescription || null,
      isArchived,
    );
  }

  return {
    id,
    slug,
  };
});

export const deleteNewsAdmin = createServerFn({
  method: "POST",
}).handler(async ({ data }: any) => {
  await requireAdmin();

  const id = clean(data?.id);

  if (!id) {
    throw new Error("Nedostaje ID objave.");
  }

  getCmsDb()
    .prepare(`
      DELETE FROM news
      WHERE id = ?
    `)
    .run(id);

  return {
    success: true,
  };
});
