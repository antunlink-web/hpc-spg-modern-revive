import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { createFileRoute } from "@tanstack/react-router";

const FILE_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\.pdf$/i;

export const Route = createFileRoute(
  "/uploads/documents/$",
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

        const uploadsRoot =
          process.env.CMS_UPLOAD_DIR ||
          "/app/data/uploads";

        try {
          const bytes = await readFile(
            join(
              uploadsRoot,
              "documents",
              filename,
            ),
          );

          return new Response(bytes, {
            headers: {
              "content-type":
                "application/pdf",
              "content-disposition":
                `inline; filename="${filename}"`,
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
