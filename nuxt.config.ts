// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //devtools: { enabled: true },
  runtimeConfig: {
    public: {
      ragwApiKey: process.env.NUXT_RAGW_API_KEY,
      siteUrl: process.env.SITE_URL || 'http://localhost:3000'
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@invictus.codes/nuxt-vuetify',
    '@nuxtjs/supabase',
    'vue3-carousel-nuxt',
  ],
  imports: {
    dirs: ['./stores']
  },
  vuetify: {
    vuetifyOptions: {},
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      useVuetifyLabs: true, 
    }
  }
})
