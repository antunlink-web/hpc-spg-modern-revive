import { DatabaseSync } from "node:sqlite";

const dbPath =
  process.env.CMS_DB_PATH ||
  "/app/data/cms/hpc-spg.sqlite";

let database: DatabaseSync | null = null;

export function getCmsDb() {
  if (database) return database;

  database = new DatabaseSync(dbPath);

  database.exec(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE COLLATE NOCASE,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL CHECK (role IN ('superadministrator', 'administrator')),
      is_active INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL,
      last_login_at TEXT
    );

    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      token_hash TEXT NOT NULL UNIQUE,
      expires_at TEXT NOT NULL,
      created_at TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS news (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      excerpt TEXT,
      content TEXT NOT NULL DEFAULT '',
      cover_image TEXT,
      published_at TEXT,
      status TEXT NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'published', 'hidden')),
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS pages (
      id TEXT PRIMARY KEY,
      page_key TEXT NOT NULL UNIQUE,
      title TEXT,
      content_json TEXT NOT NULL DEFAULT '{}',
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS documents (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      file_path TEXT NOT NULL,
      category TEXT,
      is_visible INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL DEFAULT '',
      updated_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_sessions_user_id
      ON sessions(user_id);

    CREATE INDEX IF NOT EXISTS idx_sessions_expires_at
      ON sessions(expires_at);

    CREATE INDEX IF NOT EXISTS idx_news_status
      ON news(status);

    CREATE INDEX IF NOT EXISTS idx_news_published_at
      ON news(published_at);
  `);


  const newsColumns = database
    .prepare("PRAGMA table_info(news)")
    .all() as Array<{ name: string }>;

  const existingNewsColumns = new Set(
    newsColumns.map((column) => column.name),
  );

  const requiredNewsColumns = [
    ["category", "TEXT NOT NULL DEFAULT 'Novost'"],
    ["display_date", "TEXT"],
    ["seo_title", "TEXT"],
    ["meta_description", "TEXT"],
    ["documents_json", "TEXT NOT NULL DEFAULT '[]'"],
    ["external_links_json", "TEXT NOT NULL DEFAULT '[]'"],
    ["gallery_json", "TEXT NOT NULL DEFAULT '[]'"],
    ["legacy_slugs_json", "TEXT NOT NULL DEFAULT '[]'"],
    ["is_archived", "INTEGER NOT NULL DEFAULT 0"],
  ] as const;

  for (const [name, definition] of requiredNewsColumns) {
    if (!existingNewsColumns.has(name)) {
      database.exec(
        `ALTER TABLE news ADD COLUMN ${name} ${definition}`,
      );
    }
  }

  database.exec(`
    CREATE INDEX IF NOT EXISTS idx_news_archived
      ON news(is_archived);
  `);

  return database;
}
