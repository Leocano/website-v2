// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://leocano.dev",

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Outfit",
        cssVariable: "--font-outfit",
        weights: [400, 700],
        styles: ["normal"],
      },
    ],
  },

  integrations: [svelte()],
});
