// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  pages: true,
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/image",
  ],

  devServer: {
    host: "0.0.0.0",
  },

  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },

  app: {
    pageTransition: {
      mode: 'out-in',
      name: 'page'
    },
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
});