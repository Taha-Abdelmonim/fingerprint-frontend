// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiURL: 'http://127.0.0.1:8000/api',
      baseURL: 'http://127.0.0.1:8000',
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
        // { rel: 'icon', href: '/img/logo/logo-icon.svg' },
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
