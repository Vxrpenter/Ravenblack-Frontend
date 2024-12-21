
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/fonts",
    "nuxt-aos",
    "@nuxt/icon",
    "@nuxt/image",
  ],

  routeRules: {
    '/': { prerender: true },
  },
})
