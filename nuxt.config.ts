// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss', "font-awesome/css/font-awesome.css", '@oruga-ui/theme-oruga/dist/oruga.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/variables/variables.scss"; @import "@/assets/scss/mixins/mixins.scss";`,
        }
      }
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  routeRules: {
    "/": { redirect: "/products" }
  }
})
