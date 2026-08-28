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

function safeJsonArray(value: unknown) {
  if (typeof value !== "string" || !value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function effectiveDate(row: any) {
  if (row.published_at) {
    return row.published_at;
  }

  if (typeof row.created_at === "string") {
    return row.created_at.slice(0, 10);
  }

  return "";
}

function mapNewsRow(row: any) {
  const date = effectiveDate(row);

  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? "",
    content: row.content ?? "",
    bodyHtml: row.content ?? "",
    coverImage: row.cover_image ?? "",
    cover: row.cover_image ?? "",
    publishedAt: date,
    date,
    displayDate:
      row.display_date ||
      (date ? croatianDate(date) : ""),
    status: row.status as NewsStatus,
    category: row.category ?? "Novost",
    seoTitle: row.seo_title ?? "",
    metaDescription: row.meta_description ?? "",
    isArchived: Boolean(row.is_archived),
    section: row.is_archived
      ? ("arhiva" as const)
      : ("novosti" as const),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    documents: safeJsonArray(row.documents_json),
    externalLinks: safeJsonArray(
      row.external_links_json,
    ),
    gallery: safeJsonArray(row.gallery_json),
    legacySlugs: safeJsonArray(
      row.legacy_slugs_json,
    ),
  };
}

export const listPublicNews = createServerFn({
  method: "GET",
}).handler(async ({ data }: any) => {
  const archived = Boolean(data?.archived);

  return getCmsDb()
    .prepare(`
      SELECT *
      FROM news
      WHERE status = 'published'
        AND is_archived = ?
      ORDER BY
        COALESCE(
          NULLIF(published_at, ''),
          substr(created_at, 1, 10)
        ) DESC,
        created_at DESC
    `)
    .all(archived ? 1 : 0)
    .map(mapNewsRow);
});

export const getHomepageNews = createServerFn({
  method: "GET",
}).handler(async () => {
  return getCmsDb()
    .prepare(`
      SELECT *
      FROM news
      WHERE status = 'published'
        AND is_archived = 0
      ORDER BY
        COALESCE(
          NULLIF(published_at, ''),
          substr(created_at, 1, 10)
        ) DESC,
        created_at DESC
      LIMIT 4
    `)
    .all()
    .map(mapNewsRow);
});

export const getPublicNewsBySlug =
  createServerFn({
    method: "GET",
  }).handler(async ({ data }: any) => {
    const slug = clean(data?.slug);

    if (!slug) {
      return null;
    }

    const db = getCmsDb();

    let row = db
      .prepare(`
        SELECT *
        FROM news
        WHERE slug = ?
          AND status = 'published'
        LIMIT 1
      `)
      .get(slug);

    if (!row) {
      const candidates = db
        .prepare(`
          SELECT *
          FROM news
          WHERE status = 'published'
            AND legacy_slugs_json <> '[]'
        `)
        .all();

      row = candidates.find((candidate: any) =>
        safeJsonArray(
          candidate.legacy_slugs_json,
        ).includes(slug),
      );
    }

    if (!row) {
      return null;
    }

    const post = mapNewsRow(row);

    const related = db
      .prepare(`
        SELECT *
        FROM news
        WHERE status = 'published'
          AND id <> ?
        ORDER BY
          COALESCE(
            NULLIF(published_at, ''),
            substr(created_at, 1, 10)
          ) DESC,
          created_at DESC
        LIMIT 3
      `)
      .all(row.id)
      .map(mapNewsRow);

    return {
      post,
      related,
    };
  });

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
        COALESCE(
          NULLIF(published_at, ''),
          substr(created_at, 1, 10)
        ) DESC,
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
}).handler(
  async ({ data }: { data: SaveNewsInput }) => {
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
      throw new Error(
        "Nije moguće generirati URL oznaku.",
      );
    }

    const category =
      clean(data?.category) || "Novost";

    const excerpt = clean(data?.excerpt);

    const content =
      typeof data?.content === "string"
        ? data.content.trim()
        : "";

    const seoTitle = clean(data?.seoTitle);

    const metaDescription = clean(
      data?.metaDescription,
    );

    const status: NewsStatus =
      data?.status === "draft" ||
      data?.status === "hidden"
        ? data.status
        : "published";

    let publishedAt =
      clean(data?.publishedAt) || null;

    if (
      status === "published" &&
      !publishedAt
    ) {
      publishedAt = new Date()
        .toISOString()
        .slice(0, 10);
    }

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
          ?, ?, ?, ?, ?, NULL, ?, ?, ?, ?,
          ?, ?, ?, ?, '[]', '[]', '[]', '[]', ?
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
  },
);

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
