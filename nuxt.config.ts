// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-06',
  devtools: { enabled: false },
  app: { baseURL: '/connect/nuxtjs-example/' },
  css: ['~/assets/css/main.css'],
  runtimeConfig: { public: { organizationId: '', gtmId: '' } },
})
