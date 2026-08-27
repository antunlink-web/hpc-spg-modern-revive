import {
  createHash,
  randomBytes,
  randomUUID,
  scryptSync,
  timingSafeEqual,
} from "node:crypto";

import { getCmsDb } from "./db";

const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

export type CmsRole = "superadministrator" | "administrator";

export type CmsUser = {
  id: string;
  email: string;
  role: CmsRole;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt: string | null;
};

export function hashPassword(password: string): string {
  if (password.length < 12) {
    throw new Error("Password must contain at least 12 characters.");
  }

  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);

  return `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;
}

export function verifyPassword(
  password: string,
  storedHash: string,
): boolean {
  const [algorithm, saltHex, hashHex] = storedHash.split("$");

  if (
    algorithm !== "scrypt" ||
    !saltHex ||
    !hashHex
  ) {
    return false;
  }

  const expectedHash = Buffer.from(hashHex, "hex");
  const actualHash = scryptSync(
    password,
    Buffer.from(saltHex, "hex"),
    expectedHash.length,
  );

  return (
    expectedHash.length === actualHash.length &&
    timingSafeEqual(expectedHash, actualHash)
  );
}

function hashSessionToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export function createSession(userId: string) {
  const db = getCmsDb();
  const id = randomUUID();
  const token = randomBytes(32).toString("base64url");
  const tokenHash = hashSessionToken(token);

  const createdAt = new Date();
  const expiresAt = new Date(
    createdAt.getTime() + SESSION_TTL_SECONDS * 1000,
  );

  db.prepare(`
    INSERT INTO sessions (
      id,
      user_id,
      token_hash,
      expires_at,
      created_at
    )
    VALUES (?, ?, ?, ?, ?)
  `).run(
    id,
    userId,
    tokenHash,
    expiresAt.toISOString(),
    createdAt.toISOString(),
  );

  return {
    token,
    expiresAt,
    maxAge: SESSION_TTL_SECONDS,
  };
}

export function deleteSession(token: string) {
  const db = getCmsDb();

  db.prepare(`
    DELETE FROM sessions
    WHERE token_hash = ?
  `).run(hashSessionToken(token));
}

export function getUserBySessionToken(
  token: string,
): CmsUser | null {
  const db = getCmsDb();

  db.prepare(`
    DELETE FROM sessions
    WHERE expires_at <= ?
  `).run(new Date().toISOString());

  const row = db.prepare(`
    SELECT
      users.id,
      users.email,
      users.role,
      users.is_active,
      users.created_at,
      users.updated_at,
      users.last_login_at
    FROM sessions
    INNER JOIN users
      ON users.id = sessions.user_id
    WHERE sessions.token_hash = ?
      AND sessions.expires_at > ?
      AND users.is_active = 1
    LIMIT 1
  `).get(
    hashSessionToken(token),
    new Date().toISOString(),
  ) as
    | {
        id: string;
        email: string;
        role: CmsRole;
        is_active: number;
        created_at: string;
        updated_at: string;
        last_login_at: string | null;
      }
    | undefined;

  if (!row) return null;

  return {
    id: row.id,
    email: row.email,
    role: row.role,
    isActive: row.is_active === 1,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    lastLoginAt: row.last_login_at,
  };
}
