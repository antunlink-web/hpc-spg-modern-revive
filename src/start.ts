import { createStart, createMiddleware } from "@tanstack/react-start";
import { renderErrorPage } from "./lib/error-page";

const csrfMiddleware = createMiddleware().server(
  async ({ request, next }) => {
    if (
      request.method !== "GET" &&
      request.method !== "HEAD"
    ) {
      const origin = request.headers.get("origin");

      if (
        !origin ||
        new URL(origin).origin !==
          new URL(request.url).origin
      ) {
        return new Response("Forbidden", {
          status: 403,
        });
      }
    }

    return await next();
  },
);

const errorMiddleware = createMiddleware().server(
  async ({ next }) => {
    try {
      return await next();
    } catch (error) {
      if (
        error != null &&
        typeof error === "object" &&
        "statusCode" in error
      ) {
        throw error;
      }

      console.error(error);

      return new Response(renderErrorPage(), {
        status: 500,
        headers: {
          "content-type":
            "text/html; charset=utf-8",
        },
      });
    }
  },
);

export const startInstance = createStart(() => ({
  requestMiddleware: [
    csrfMiddleware,
    errorMiddleware,
  ],
}));
