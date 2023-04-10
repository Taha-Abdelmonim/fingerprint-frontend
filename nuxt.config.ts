// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      // apiURL: 'https://backend.futureelife.com',
      // baseURL: 'https://backend.futureelife.com/api',
    },
  },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', 'nuxt-icon'],
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
        // { rel: 'icon', href: '/img/logo/logo-icon.svg' },
        // { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        // { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin' },
        // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap' },
        // { rel: 'stylesheet', href: '/css/style-rtl.min.css' },
      ],
      script: [
        { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', body: true }
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
