// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-06',
  devtools: { enabled: false },
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: { deployConfig: true },
  },
  app: {
    baseURL: '/connect/nuxtjs-example/',
    head: { script: [{ src: 'https://code.iconify.design/3/3.1.1/iconify.min.js', defer: true }] },
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: { public: { organizationId: '', gtmId: '' } },
})
