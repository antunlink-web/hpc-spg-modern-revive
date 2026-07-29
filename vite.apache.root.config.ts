// Static SPA build for Apache root-domain deployment at https://hpc-spg.hr/.
// Invoked by `bun run build:apache:root` (see package.json). Does NOT affect
// the normal Lovable preview/publish flow (vite.config.ts) nor the
// /newsite/ staging build (vite.apache.config.ts).
//
// Differences vs. vite.apache.config.ts:
//   - Vite `base` = "/" so assets and links resolve at the site root.
//   - Router basepath is "/" (derived from BASE_URL by src/router.tsx).
//   - Build output is written to `dist/apache-root/`.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: { enabled: true },
    router: { basepath: "/" },
  },
  vite: {
    base: "/",
    envPrefix: ["VITE_", "WEB3FORMS_"],
    build: {
      outDir: "dist/apache-root",
      emptyOutDir: true,
    },
  },
});
