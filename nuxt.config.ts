// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //devtools: { enabled: true },
  runtimeConfig: {
    public: {
      ragwApiKey: process.env.NUXT_RAGW_API_KEY,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@invictus.codes/nuxt-vuetify',
    '@nuxtjs/supabase',
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
