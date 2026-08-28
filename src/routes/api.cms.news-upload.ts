import { mkdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { randomUUID } from "node:crypto";
import { createFileRoute } from "@tanstack/react-router";
import { requireAdmin } from "@/lib/cms/auth-functions";

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

const MIME_TO_EXTENSION: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

function detectImageType(bytes: Uint8Array) {
  if (
    bytes.length >= 3 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff
  ) {
    return {
      mime: "image/jpeg",
      extension: ".jpg",
    };
  }

  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a
  ) {
    return {
      mime: "image/png",
      extension: ".png",
    };
  }

  if (
    bytes.length >= 12 &&
    String.fromCharCode(
      bytes[0],
      bytes[1],
      bytes[2],
      bytes[3],
    ) === "RIFF" &&
    String.fromCharCode(
      bytes[8],
      bytes[9],
      bytes[10],
      bytes[11],
    ) === "WEBP"
  ) {
    return {
      mime: "image/webp",
      extension: ".webp",
    };
  }

  return null;
}

export const Route = createFileRoute(
  "/api/cms/news-upload",
)({
  server: {
    handlers: {
      POST: async ({ request }) => {
        await requireAdmin();

        const formData = await request.formData();
        const value = formData.get("image");

        if (!(value instanceof File)) {
          return Response.json(
            {
              error: "Slika nije poslana.",
            },
            {
              status: 400,
            },
          );
        }

        if (value.size <= 0) {
          return Response.json(
            {
              error: "Datoteka je prazna.",
            },
            {
              status: 400,
            },
          );
        }

        if (value.size > MAX_IMAGE_BYTES) {
          return Response.json(
            {
              error:
                "Slika je prevelika. Najveća dopuštena veličina je 5 MB.",
            },
            {
              status: 413,
            },
          );
        }

        if (!MIME_TO_EXTENSION[value.type]) {
          return Response.json(
            {
              error:
                "Dopušteni formati su JPG, PNG i WebP.",
            },
            {
              status: 415,
            },
          );
        }

        const arrayBuffer = await value.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        const detected = detectImageType(bytes);

        if (!detected) {
          return Response.json(
            {
              error:
                "Datoteka nije valjana JPG, PNG ili WebP slika.",
            },
            {
              status: 415,
            },
          );
        }

        if (
          detected.mime !== value.type ||
          detected.extension !==
            MIME_TO_EXTENSION[value.type]
        ) {
          return Response.json(
            {
              error:
                "Vrsta datoteke ne odgovara sadržaju slike.",
            },
            {
              status: 415,
            },
          );
        }

        const uploadsRoot =
          process.env.CMS_UPLOAD_DIR ||
          "/app/data/uploads";

        const newsDirectory = join(
          uploadsRoot,
          "news",
        );

        await mkdir(newsDirectory, {
          recursive: true,
        });

        const filename =
          randomUUID() + detected.extension;

        await writeFile(
          join(newsDirectory, filename),
          bytes,
          {
            flag: "wx",
          },
        );

        return Response.json({
          url: `/uploads/news/${filename}`,
        });
      },
    },
  },
});
