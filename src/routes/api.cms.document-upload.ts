import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import { createFileRoute } from "@tanstack/react-router";
import { requireAdmin } from "@/lib/cms/auth-functions";

const MAX_PDF_BYTES = 15 * 1024 * 1024;

function isPdf(bytes: Uint8Array) {
  if (bytes.length < 5) {
    return false;
  }

  return (
    bytes[0] === 0x25 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x44 &&
    bytes[3] === 0x46 &&
    bytes[4] === 0x2d
  );
}

export const Route = createFileRoute(
  "/api/cms/document-upload",
)({
  server: {
    handlers: {
      POST: async ({ request }) => {
        await requireAdmin();

        const formData =
          await request.formData();

        const value =
          formData.get("document");

        if (!(value instanceof File)) {
          return Response.json(
            {
              error:
                "Dokument nije poslan.",
            },
            {
              status: 400,
            },
          );
        }

        if (value.size <= 0) {
          return Response.json(
            {
              error:
                "Datoteka je prazna.",
            },
            {
              status: 400,
            },
          );
        }

        if (value.size > MAX_PDF_BYTES) {
          return Response.json(
            {
              error:
                "PDF je prevelik. Najveća dopuštena veličina je 15 MB.",
            },
            {
              status: 413,
            },
          );
        }

        const bytes = new Uint8Array(
          await value.arrayBuffer(),
        );

        if (!isPdf(bytes)) {
          return Response.json(
            {
              error:
                "Datoteka nije valjani PDF.",
            },
            {
              status: 415,
            },
          );
        }

        const uploadsRoot =
          process.env.CMS_UPLOAD_DIR ||
          "/app/data/uploads";

        const directory = join(
          uploadsRoot,
          "documents",
        );

        await mkdir(directory, {
          recursive: true,
        });

        const filename =
          randomUUID() + ".pdf";

        await writeFile(
          join(directory, filename),
          bytes,
          {
            flag: "wx",
          },
        );

        return Response.json({
          url:
            `/uploads/documents/${filename}`,
          originalName: value.name,
        });
      },
    },
  },
});
