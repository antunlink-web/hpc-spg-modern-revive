// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, cloudflare (build-only), etc.
// TEMPORARY /newsite/ SUBFOLDER BUILD:
//   - base: "/newsite/"  → all built assets emit under /newsite/assets/…
//   - tanstackStart.spa.enabled → prerender a static index.html shell
//   - tanstackStart.router.basepath → TanStack Router client basepath
//   - nitro: false → skip the Cloudflare Worker build; output is a static SPA
// To revert to the normal Cloudflare/SSR build, remove the `base`, `spa`,
// `router.basepath`, and `nitro: false` options below.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/newsite/",
  },
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
    router: { basepath: "/newsite/" },
  },
  nitro: false,
});
