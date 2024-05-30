import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://15.164.48.114:4000", // 백엔드 서버 URL
        changeOrigin: true,
        secure: false, // HTTPS 프록시를 사용할 경우 인증서를 무시하도록 설정
      },
    },
  },
  resolve: {
    alias: [
      // 절대경로로접근하기
      { find: "~/components", replacement: "/src/components" },
      { find: "~/lib", replacement: "/src/lib" },
      { find: "~/routers", replacement: "/src/routers" },
      { find: "~/routes", replacement: "/src/routes" },
      { find: "~/img", replacement: "/src/img" },
    ],
  },
});
