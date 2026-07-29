// Standard Lovable preview/publish build (SSR via Cloudflare Worker).
// The temporary /newsite/ subfolder configuration has been reverted so the
// Lovable preview at "/" loads. To rebuild the /newsite/ static SPA for
// Apache upload, re-add:
//   vite.base: "/newsite/"
//   tanstackStart.spa: { enabled: true }
//   tanstackStart.router.basepath: "/newsite/"
//   nitro: false
// and set basepath in src/router.tsx + noindex meta in __root.tsx.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    // Web3Forms access keys are public (client-side form endpoint keys),
    // so they must be exposed to the browser bundle.
    envPrefix: ["VITE_", "WEB3FORMS_"],
  },
});
