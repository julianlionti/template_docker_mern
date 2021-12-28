import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log(`Server API: ${process.env.BASE_URL}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "/api": process.env.BASE_URL,
    },
  },
});
