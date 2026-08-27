import { randomBytes, randomUUID, scryptSync } from "node:crypto";
import { DatabaseSync } from "node:sqlite";

const dbPath = process.env.CMS_DB_PATH;
const email = process.env.CMS_BOOTSTRAP_EMAIL?.trim().toLowerCase();
const password = process.env.CMS_BOOTSTRAP_PASSWORD;

if (!dbPath) {
  throw new Error("CMS_DB_PATH is required.");
}

if (!email) {
  throw new Error("CMS_BOOTSTRAP_EMAIL is required.");
}

if (!password || password.length < 10) {
  throw new Error(
    "CMS_BOOTSTRAP_PASSWORD must contain at least 10 characters.",
  );
}

const db = new DatabaseSync(dbPath);

db.exec(`
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL CHECK (
      role IN ('superadministrator', 'administrator')
    ),
    is_active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    last_login_at TEXT
  );
`);

const existing = db.prepare(`
  SELECT id, email, role
  FROM users
  WHERE email = ?
  LIMIT 1
`).get(email);

if (existing) {
  console.error(
    `User ${email} already exists with role ${existing.role}.`,
  );
  process.exitCode = 1;
} else {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);

  const passwordHash =
    `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;

  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO users (
      id,
      email,
      password_hash,
      role,
      is_active,
      created_at,
      updated_at
    )
    VALUES (?, ?, ?, 'superadministrator', 1, ?, ?)
  `).run(
    randomUUID(),
    email,
    passwordHash,
    now,
    now,
  );

  console.log(
    `Superadministrator created: ${email}`,
  );
}

db.close();
