import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === "true" ? "/FinalProject/" : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html")
      }
    }
  }
});
