import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://si-jiu.github.io",
  base: "/steam-review-template-Chinese",
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en", "es", "fr", "it", "de", "pl"],
  }
});
