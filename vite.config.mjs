import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  // This project is deployed as the owner's GitHub Pages site.
  base: "/",
  build: {
    outDir: "dist/client",
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, "index.html"),
        work: resolve(import.meta.dirname, "work.html"),
        projects: resolve(import.meta.dirname, "projects.html"),
        learning: resolve(import.meta.dirname, "learning.html"),
        technicalPapers: resolve(import.meta.dirname, "technical-papers.html"),
        blogs: resolve(import.meta.dirname, "blogs.html"),
        achievements: resolve(import.meta.dirname, "achievements.html"),
        contact: resolve(import.meta.dirname, "contact.html"),
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react()],
});
