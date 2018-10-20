const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Enforce trailingslash
    ['./modules/trailingslash', {
      methods: [
        'GET',
      ],
    }],
    ['./modules/i18n', {
      countries: [
        {
          code: 'us',
          defaultLocale: 'en',
          iso: 'en-US'
        },
        {
          code: 'cn',
          defaultLocale: 'zh',
          iso: 'zh-CN'
        },
      ],
      locales: [
        {
          code: 'en',
          file: 'en-US.js',
          name: 'English'
        },
        {
          code: 'zh',
          file: 'zh-CN.js',
          name: '中文'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultCountry: 'us',
      defaultLocale: 'en',
      strategy: 'prefix',
      detectBrowserLanguage: {
        // If enabled, a cookie is set once a user has been redirected to his
        // preferred language to prevent subsequent redirections
        // Set to false to redirect every time
        useCookie: true,
        // Cookie name
        cookieKey: 'i18n_redirected',
        countryKey: 'i18n_country',
        localeKey: 'i18n_locale'
      },
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: {
            welcome: 'Welcome'
          },
          zh: {
            welcome: '欢迎'
          }
        }
      }
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
