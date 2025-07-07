import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://cvamine2233.github.io",
  base: "cvamine2233",
  trailingSlash: "always",
  integrations: [tailwind()],
});
