export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cares-app-front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api/index',
   
    
    {src: '~/plugins/vue-cookie-law', mode: 'client'}
 
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    
      '@nuxtjs/firebase',
     
  
    'cookie-universal-nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  firebase: {
    // options
    config: {
      apiKey: 'AIzaSyD3nnwMTS6s95xhZlNctB6cjSEq9qhyT68',
      authDomain: 'cares-jobs.firebaseapp.com',
      projectId: 'cares-jobs',
      storageBucket: 'cares-jobs.appspot.com',
      messagingSenderId: '818409067708',
      appId: '1:818409067708:web:7cea0a2e300e525b7becb9',
      measurementId: 'G-6MK1WGQTVV',
    },
    services: {
      database: true,
    }
  
 },

env: {
    baseURL: ' https://cares-jobs-app.herokuapp.com/'
  },

}
