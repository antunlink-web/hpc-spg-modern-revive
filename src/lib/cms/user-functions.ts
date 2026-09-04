import { randomUUID } from "node:crypto";
import { createServerFn } from "@tanstack/react-start";
import { getCmsDb } from "./db";
import { getUserBySessionToken, hashPassword, type CmsRole } from "./auth";
import { getRequestHeader } from "@tanstack/react-start/server";

const COOKIE_NAME = "__Host-hpc_spg_admin";

function getSessionToken(): string | null {
  const cookieHeader = getRequestHeader("cookie");
  if (!cookieHeader) return null;

  for (const part of cookieHeader.split(/;\s*/)) {
    const separator = part.indexOf("=");
    if (separator === -1) continue;

    if (part.slice(0, separator) === COOKIE_NAME) {
      return decodeURIComponent(part.slice(separator + 1));
    }
  }

  return null;
}

function requireSuperadministrator() {
  const token = getSessionToken();
  const user = token ? getUserBySessionToken(token) : null;

  if (!user || user.role !== "superadministrator") {
    throw new Error("FORBIDDEN");
  }

  return user;
}

type UserRow = {
  id: string;
  email: string;
  role: CmsRole;
  is_active: number;
  created_at: string;
  updated_at: string;
  last_login_at: string | null;
};

function serializeUser(row: UserRow) {
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

export const listUsersAdmin = createServerFn({
  method: "GET",
}).handler(async () => {
  requireSuperadministrator();

  const db = getCmsDb();

  const rows = db.prepare(`
    SELECT
      id,
      email,
      role,
      is_active,
      created_at,
      updated_at,
      last_login_at
    FROM users
    ORDER BY
      CASE role
        WHEN 'superadministrator' THEN 0
        ELSE 1
      END,
      email COLLATE NOCASE
  `).all() as UserRow[];

  return rows.map(serializeUser);
});

export const createUserAdmin = createServerFn({
  method: "POST",
}).handler(async ({ data }) => {
  requireSuperadministrator();

  const input = (data ?? {}) as {
    email?: unknown;
    password?: unknown;
    role?: unknown;
  };

  const email = String(input.email ?? "").trim().toLowerCase();
  const password = String(input.password ?? "");
  const role: CmsRole =
    input.role === "superadministrator"
      ? "superadministrator"
      : "administrator";

  if (
    !email ||
    email.length > 254 ||
    !email.includes("@")
  ) {
    return {
      success: false as const,
      error: "Unesite ispravnu adresu e-pošte.",
    };
  }

  if (password.length < 10) {
    return {
      success: false as const,
      error: "Lozinka mora sadržavati najmanje 10 znakova.",
    };
  }

  const db = getCmsDb();

  const existing = db.prepare(`
    SELECT id
    FROM users
    WHERE email = ?
    LIMIT 1
  `).get(email);

  if (existing) {
    return {
      success: false as const,
      error: "Korisnik s tom adresom e-pošte već postoji.",
    };
  }

  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO users (
      id,
      email,
      password_hash,
      role,
      is_active,
      created_at,
      updated_at,
      last_login_at
    )
    VALUES (?, ?, ?, ?, 1, ?, ?, NULL)
  `).run(
    randomUUID(),
    email,
    hashPassword(password),
    role,
    now,
    now,
  );

  return { success: true as const };
});

export const setUserActiveAdmin = createServerFn({
  method: "POST",
}).handler(async ({ data }) => {
  const currentUser = requireSuperadministrator();

  const input = (data ?? {}) as {
    userId?: unknown;
    isActive?: unknown;
  };

  const userId = String(input.userId ?? "");
  const isActive = input.isActive === true;

  if (!userId) {
    return {
      success: false as const,
      error: "Korisnik nije odabran.",
    };
  }

  if (userId === currentUser.id && !isActive) {
    return {
      success: false as const,
      error: "Ne možete deaktivirati vlastiti račun.",
    };
  }

  const db = getCmsDb();

  const target = db.prepare(`
    SELECT id
    FROM users
    WHERE id = ?
    LIMIT 1
  `).get(userId);

  if (!target) {
    return {
      success: false as const,
      error: "Korisnik nije pronađen.",
    };
  }

  db.prepare(`
    UPDATE users
    SET is_active = ?,
        updated_at = ?
    WHERE id = ?
  `).run(
    isActive ? 1 : 0,
    new Date().toISOString(),
    userId,
  );

  if (!isActive) {
    db.prepare(`
      DELETE FROM sessions
      WHERE user_id = ?
    `).run(userId);
  }

  return { success: true as const };
});

export const changeUserPasswordAdmin = createServerFn({
  method: "POST",
}).handler(async ({ data }) => {
  requireSuperadministrator();

  const input = (data ?? {}) as {
    userId?: unknown;
    password?: unknown;
  };

  const userId = String(input.userId ?? "");
  const password = String(input.password ?? "");

  if (!userId) {
    return {
      success: false as const,
      error: "Korisnik nije odabran.",
    };
  }

  if (password.length < 10) {
    return {
      success: false as const,
      error: "Lozinka mora sadržavati najmanje 10 znakova.",
    };
  }

  const db = getCmsDb();

  const result = db.prepare(`
    UPDATE users
    SET password_hash = ?,
        updated_at = ?
    WHERE id = ?
  `).run(
    hashPassword(password),
    new Date().toISOString(),
    userId,
  );

  if (result.changes === 0) {
    return {
      success: false as const,
      error: "Korisnik nije pronađen.",
    };
  }

  db.prepare(`
    DELETE FROM sessions
    WHERE user_id = ?
  `).run(userId);

  return { success: true as const };
});
