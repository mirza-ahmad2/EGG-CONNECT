// Shared Vite/TanStack config package already includes:
//   - TanStack Start, React, Tailwind, tsconfig paths, Nitro (build),
//     path aliases, and related tooling.
// Do not re-add those plugins manually or the app will break with duplicates.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: { entry: "server" },
  },
});
