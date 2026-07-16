// Static SPA build for Apache subfolder deployment at https://hpc-spg.hr/newsite/.
// Invoked by `bun run build:apache` (see package.json) — never used by the
// normal Lovable preview/publish flow (which uses vite.config.ts).
//
// Key differences vs. vite.config.ts:
//   - Vite `base` = "/newsite/" so every bundled asset URL is prefixed.
//   - TanStack Start runs in SPA mode (client-only, no SSR entry).
//   - Nitro / Cloudflare Worker output is disabled.
//   - TanStack Router basepath is derived from BASE_URL at runtime
//     (see src/router.tsx + src/lib/paths.ts).
//   - Build output is written to `dist/apache/` instead of `dist/`.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: { enabled: true },
    // basepath is read from BASE_URL by src/router.tsx; kept here for parity
    // with the router-plugin so generated route metadata matches.
    router: { basepath: "/newsite" },
  },
  vite: {
    base: "/newsite/",
    build: {
      outDir: "dist/apache",
      emptyOutDir: true,
    },
  },
});
