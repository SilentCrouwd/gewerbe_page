import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// Vite bündelt die Website unter dem Pfad, unter dem sie veröffentlicht wird.
export default defineConfig({
  base: "/gewerbe_page/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      // Mehrere HTML-Einstiegspunkte werden als eigenständige Unterseiten gebaut.
      input: {
        main: "index.html",
        leistungen: "leistungen.html",
        projekt: "projekt.html",
        ablauf: "ablauf.html",
        faq: "faq.html",
        impressum: "impressum.html",
        datenschutz: "datenschutz.html",
      },
    },
  },
});
