import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://steam-review.sijiu49.us.kg",
  base: "/",
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["zh_cn", "zh_tw", "en", "es", "fr", "it", "de", "pl", "pt"],
  }
});
