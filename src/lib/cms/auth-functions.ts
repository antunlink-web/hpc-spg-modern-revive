import { createServerFn } from "@tanstack/react-start";
import {
  getRequestHeader,
  setResponseHeader,
} from "@tanstack/react-start/server";
import { redirect } from "@tanstack/react-router";

import {
  createSession,
  deleteSession,
  getUserBySessionToken,
  verifyPassword,
} from "./auth";
import { getCmsDb } from "./db";

const COOKIE_NAME = "__Host-hpc_spg_admin";

function readSessionToken(): string | null {
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

function setSessionCookie(
  token: string,
  maxAge: number,
) {
  setResponseHeader(
    "Set-Cookie",
    [
      `${COOKIE_NAME}=${encodeURIComponent(token)}`,
      "HttpOnly",
      "Secure",
      "SameSite=Lax",
      "Path=/",
      `Max-Age=${maxAge}`,
    ].join("; "),
  );
}

function clearSessionCookie() {
  setResponseHeader(
    "Set-Cookie",
    [
      `${COOKIE_NAME}=`,
      "HttpOnly",
      "Secure",
      "SameSite=Lax",
      "Path=/",
      "Max-Age=0",
    ].join("; "),
  );
}

export const getCurrentAdmin = createServerFn({
  method: "GET",
}).handler(async () => {
  const token = readSessionToken();

  if (!token) return null;

  return getUserBySessionToken(token);
});

export const requireAdmin = createServerFn({
  method: "GET",
}).handler(async () => {
  const token = readSessionToken();

  const user = token
    ? getUserBySessionToken(token)
    : null;

  if (!user) {
    throw redirect({
      to: "/administracija/prijava",
    });
  }

  return user;
});

export const loginAdmin = createServerFn({
  method: "POST",
})
  .validator(
    (data: { email: string; password: string }) => ({
      email: String(data.email ?? "")
        .trim()
        .toLowerCase(),
      password: String(data.password ?? ""),
    }),
  )
  .handler(async ({ data }) => {
    if (
      !data.email ||
      !data.password ||
      data.email.length > 254 ||
      data.password.length > 1024
    ) {
      return {
        success: false as const,
        error: "Neispravni podaci za prijavu.",
      };
    }

    const db = getCmsDb();

    const row = db.prepare(`
      SELECT
        id,
        email,
        password_hash,
        role,
        is_active
      FROM users
      WHERE email = ?
      LIMIT 1
    `).get(data.email) as
      | {
          id: string;
          email: string;
          password_hash: string;
          role: string;
          is_active: number;
        }
      | undefined;

    if (
      !row ||
      row.is_active !== 1 ||
      !verifyPassword(
        data.password,
        row.password_hash,
      )
    ) {
      return {
        success: false as const,
        error: "Neispravan e-mail ili lozinka.",
      };
    }

    const session = createSession(row.id);

    setSessionCookie(
      session.token,
      session.maxAge,
    );

    db.prepare(`
      UPDATE users
      SET last_login_at = ?,
          updated_at = ?
      WHERE id = ?
    `).run(
      new Date().toISOString(),
      new Date().toISOString(),
      row.id,
    );

    return {
      success: true as const,
    };
  });

export const logoutAdmin = createServerFn({
  method: "POST",
}).handler(async () => {
  const token = readSessionToken();

  if (token) {
    deleteSession(token);
  }

  clearSessionCookie();

  return {
    success: true as const,
  };
});
