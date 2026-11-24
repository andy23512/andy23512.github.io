// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://andy23512.github.io",
  // Astro 7 預設改成 "jsx"，會移除換行處的空白；明確指定 true 以維持 Astro 6 的輸出
  compressHTML: true,
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
