const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/lereglement-sale/'
  }
} : {}

export default {
  mode: 'universal',
  ...routerBase,
  head: {
    title: "Le Règlement - Site Officiel",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        property: "og:image",
        content: "/meta.png" 
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Roboto+Mono:500,700&display=swap" }
    ],
    script: [
      { src: 'https://apis.google.com/js/platform.js' },
      { src: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  /*
   ** Nuxt.js modules
   */

  modules: [
    ['@nuxtjs/google-analytics', 
      {
        id: 'UA-104939403-1'
      }]
    ],
    
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
