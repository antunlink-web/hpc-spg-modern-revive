import { randomUUID } from "node:crypto";
import { createServerFn } from "@tanstack/react-start";
import { getCmsDb } from "./db";
import { requireAdmin } from "./auth-functions";
import {
  cmsPageDefinitions,
  getCmsPageDefinition,
} from "./page-definitions";

type PageRow = {
  id: string;
  page_key: string;
  title: string | null;
  content_json: string;
  updated_at: string;
};

function safeObject(value: string) {
  try {
    const parsed = JSON.parse(value);

    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed)
    ) {
      return parsed as Record<string, unknown>;
    }
  } catch {
    // Fall through to empty object.
  }

  return {};
}

function cleanText(value: unknown) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .trim();
}

function normalizePageContent(
  pageKey: string,
  source: unknown,
) {
  const definition =
    getCmsPageDefinition(pageKey);

  if (!definition) {
    throw new Error(
      "Nepoznata stranica.",
    );
  }

  const input =
    source &&
    typeof source === "object" &&
    !Array.isArray(source)
      ? (source as Record<
          string,
          unknown
        >)
      : {};

  const result: Record<string, string> =
    {};

  for (const field of definition.fields) {
    const fallback =
      definition.defaults[field.key] ??
      "";

    const value =
      field.key in input
        ? cleanText(input[field.key])
        : fallback;

    result[field.key] =
      value.slice(
        0,
        field.type === "text"
          ? 500
          : 20000,
      );
  }

  return result;
}

function ensurePagesSeeded() {
  const db = getCmsDb();
  const now = new Date().toISOString();

  const insert = db.prepare(`
    INSERT OR IGNORE INTO pages (
      id,
      page_key,
      title,
      content_json,
      updated_at
    )
    VALUES (?, ?, ?, ?, ?)
  `);

  for (const page of cmsPageDefinitions) {
    insert.run(
      randomUUID(),
      page.key,
      page.defaults.title || page.label,
      JSON.stringify(page.defaults),
      now,
    );
  }
}

function readPage(pageKey: string) {
  ensurePagesSeeded();

  const definition =
    getCmsPageDefinition(pageKey);

  if (!definition) {
    throw new Error(
      "Nepoznata stranica.",
    );
  }

  const db = getCmsDb();

  const row = db
    .prepare(`
      SELECT
        id,
        page_key,
        title,
        content_json,
        updated_at
      FROM pages
      WHERE page_key = ?
      LIMIT 1
    `)
    .get(pageKey) as
    | PageRow
    | undefined;

  const stored = row
    ? safeObject(row.content_json)
    : {};

  return {
    key: definition.key,
    label: definition.label,
    publicPath:
      definition.publicPath,
    fields: definition.fields,
    content: normalizePageContent(
      pageKey,
      {
        ...definition.defaults,
        ...stored,
      },
    ),
    updatedAt:
      row?.updated_at || null,
  };
}

export const getPublicPage =
  createServerFn({
    method: "GET",
  }).handler(
    async ({
      data,
    }: {
      data?: {
        pageKey?: string;
      };
    }) => {
      const pageKey =
        String(
          data?.pageKey || "",
        ).trim();

      return readPage(pageKey);
    },
  );

export const listPagesAdmin =
  createServerFn({
    method: "GET",
  }).handler(async () => {
    await requireAdmin();

    ensurePagesSeeded();

    return cmsPageDefinitions.map(
      (definition) =>
        readPage(definition.key),
    );
  });

export const savePageAdmin =
  createServerFn({
    method: "POST",
  }).handler(
    async ({
      data,
    }: {
      data?: {
        pageKey?: string;
        content?: unknown;
      };
    }) => {
      await requireAdmin();

      const pageKey =
        String(
          data?.pageKey || "",
        ).trim();

      const definition =
        getCmsPageDefinition(pageKey);

      if (!definition) {
        throw new Error(
          "Nepoznata stranica.",
        );
      }

      const content =
        normalizePageContent(
          pageKey,
          data?.content,
        );

      const now =
        new Date().toISOString();

      const db = getCmsDb();

      db.prepare(`
        INSERT INTO pages (
          id,
          page_key,
          title,
          content_json,
          updated_at
        )
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(page_key)
        DO UPDATE SET
          title = excluded.title,
          content_json =
            excluded.content_json,
          updated_at =
            excluded.updated_at
      `).run(
        randomUUID(),
        pageKey,
        content.title ||
          definition.label,
        JSON.stringify(content),
        now,
      );

      return readPage(pageKey);
    },
  );
