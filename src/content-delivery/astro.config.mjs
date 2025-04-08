// @ts-check
import { defineConfig } from "astro/config";
import { setDefaultResultOrder } from 'dns';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import favicons from "astro-favicons";
import mkcert from 'vite-plugin-mkcert'

setDefaultResultOrder('verbatim')

export default defineConfig({
  vite: {
    plugins: [
      // @ts-ignore
      mkcert(),
      tailwindcss()
    ]
  },
  site: "https://localhost:4321",
  prefetch: true, 
  // image: {
  //   domains: ["res.cloudinary.com"],
  // },
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: ["https://localhost:4321/sitemap-index.xml"],
    }),
    favicons({
      input: "public/favicon.png",
      name: "umbraco-headless-starter",
      short_name: "uhs",
      icons: {
        favicons: true,
        android: false,
        appleIcon: false,
        appleStartup: false,
        windows: false,
        yandex: false,
      },
      pixel_art: false,
      manifestMaskable: false,
      output: {
        images: true,
        files: true,
        html: false
      },
      background: "#077da0",
    }),
  ],
});
