import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // 올바른 패키지 이름 사용

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(), // 올바른 패키지 이름 사용
  ],
  server: {
    port: 3000,
  },
});
