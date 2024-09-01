import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // vite-plugin-svgr을 사용

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(), // vite-plugin-svgr을 사용하는 경우
  ],
  server: {
    port: 3000,
  },
});
