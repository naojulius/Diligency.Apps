import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxtjs/google-fonts',
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxtjs/i18n",
    'nuxt-graphql-client',
  ],
  googleFonts: {
    families: {
      Inter: {
        wght: [100, 200, 300, 400, 500, 700, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 700, 600, 700, 800, 900],
      },
    }
  },
  css: [
    "~/assets/app.css",
    "~/assets/default.css"
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  i18n: {
    locales: [
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'fr',
    langDir: 'locales/',
    strategy: 'no_prefix'
  },
  app: {
    head: {
      title: 'Diligency',
      meta:
        [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" },
          { "http-equiv": "X-UA-Compatible", content: "ie=edge" },
        ]
    }
  }
})