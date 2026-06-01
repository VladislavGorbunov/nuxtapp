// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['bootstrap/dist/css/bootstrap.min.css', './assets/css/main.css', 'bootstrap-icons/font/bootstrap-icons.min.css'],

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [{ src: '/js/bootstrap.min.js', tagPosition: 'bodyClose' }]
    },
  },

  modules: ['nuxt-auth-utils'],
  runtimeConfig: {
    session: {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      password: process.env.NUXT_SESSION_PASSWORD || ''
    }
  }
  
})