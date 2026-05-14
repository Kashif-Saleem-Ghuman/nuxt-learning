// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  ssr: false,          // disable server-side rendering
  nitro: {
    preset: 'static'   // generate static files
  },
  app: {
    head: {
      title: 'Nuxt Learning',
      meta: [
        { name: 'description', content: 'A Nuxt.js learning project' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ],
    }
  }
})