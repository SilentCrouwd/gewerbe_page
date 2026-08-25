import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/gewerbe_page/",
  plugins: [tailwindcss()],
});
