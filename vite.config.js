import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://daryaglazunova.github.io/Handpan/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@images": path.resolve(__dirname, "./src/assets/icons"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@scss": path.resolve(__dirname, "./src/assets/styles"),
    },
  },
});
