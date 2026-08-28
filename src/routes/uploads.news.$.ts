import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { createFileRoute } from "@tanstack/react-router";

const CONTENT_TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
};

const FILE_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\.(jpg|png|webp)$/i;

export const Route = createFileRoute(
  "/uploads/news/$",
)({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const filename =
          typeof params._splat === "string"
            ? params._splat
            : "";

        if (!FILE_PATTERN.test(filename)) {
          return new Response(
            "Not found",
            {
              status: 404,
            },
          );
        }

        const extension =
          filename.split(".").pop()?.toLowerCase() ||
          "";

        const contentType =
          CONTENT_TYPES[extension];

        if (!contentType) {
          return new Response(
            "Not found",
            {
              status: 404,
            },
          );
        }

        const uploadsRoot =
          process.env.CMS_UPLOAD_DIR ||
          "/app/data/uploads";

        try {
          const bytes = await readFile(
            join(
              uploadsRoot,
              "news",
              filename,
            ),
          );

          return new Response(bytes, {
            headers: {
              "content-type": contentType,
              "cache-control":
                "public, max-age=31536000, immutable",
              "x-content-type-options":
                "nosniff",
            },
          });
        } catch {
          return new Response(
            "Not found",
            {
              status: 404,
            },
          );
        }
      },
    },
  },
});
