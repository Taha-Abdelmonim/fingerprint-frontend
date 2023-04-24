// https://nuxt.com/docs/api/configuration/nuxt-config http://127.0.0.1:8001/ https://backend.fingerprintm.com
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      apiURL: 'https://backend.fingerprintm.com/api',
      baseURL: 'https://backend.fingerprintm.com',
    },
  },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      link: [
        { rel: "apple-touch-icon", sizes: "57x57", href: "/favicon/apple-icon-57x57.png" },
        { rel: "apple-touch-icon", sizes: "60x60", href: "/favicon/apple-icon-60x60.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/favicon/apple-icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "76x76", href: "/favicon/apple-icon-76x76.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/favicon/apple-icon-114x114.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-icon-120x120.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/favicon/android-icon-144x144.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/favicon/apple-icon-152x152.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-icon-180x180.png" },
        { rel: 'icon', type: "image/png", sizes: "180x180", href: '/favicon/android-icon-192x192.png' },
        { rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: "image/png", sizes: "96x96", href: '/favicon/favicon-96x96.png' },
        { rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/manifest.json' },
      ],
      meta: [
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "msapplication-TileImage", content: "/favicon/ms-icon-144x144.png" },
        { name: "theme-color", content: "#ffffff" },
        { property: "og:title", hid: "og:title", content: "بصمة" },
        { property: "og:image", hid: "og:image", content: "https://backend.fingerprintm.com/images/bg-logo.png" },
        { property: "fb:app_id", hid: "fb:app_id", content: "1229977241051676" },
      ],
      script: [
      ]
    },
  },
  i18n: {
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'ar',
    locales: [
      {
        code: 'ar',
        name: 'العربية',
        file: 'ar.json',
        dir: 'rtl',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        dir: 'ltr',
      },
    ],
    vueI18n: {
      legacy: false,
      fallbackLocale: 'en',
    },
  },

})
