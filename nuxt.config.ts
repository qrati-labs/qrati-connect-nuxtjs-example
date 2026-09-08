// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-06',
  devtools: { enabled: false },
  app: { baseURL: '/connect/nuxtjs-example/' },
  css: ['~/assets/css/main.css'],
  runtimeConfig: { public: { organizationId: '69ad9c7876d8bf6f864b3a65' } },
})
