// @lovable.dev/vite-tanstack-config already includes the following - do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Use src/index.ts as the TanStack Start server entry.
// src/index.ts re-exports src/server.ts and keeps prerender preview output naming stable.
export default defineConfig({
  tanstackStart: {
    server: { entry: "index" },
    prerender: {
      enabled: true,
      crawlLinks: false,
    },
  },
});
