import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/gewerbe_page/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        projekt: "projekt.html",
        impressum: "impressum.html",
        datenschutz: "datenschutz.html",
      },
    },
  },
});
