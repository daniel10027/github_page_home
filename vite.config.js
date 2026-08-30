import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Custom domain (me.myoctogone.com) => served from root.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
  },
});
