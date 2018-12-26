const pkg = require('./package')
const webpack = require('webpack')
require('dotenv').config()

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://127.0.0.1/',
    browserBaseURL: process.env.BROWSER_BASE_URL || 'https://modesens.com/',
    secretKey: 'gDsdSXwddn3xp3SWgujuTUizGbfUM3wHcrzj8FLihicCJLUUePkX1dT9NiW8'
  },
  /*
	** Customize the progress-bar color
	*/
  loading: { color: '#fff' },

  /*
	** Global CSS
	*/
  css: [
    '~/assets/css/font.css',
    {src: '~/assets/css/main.less', lang: 'less'},
  ],

  /*
	** Plugins to load before mounting the App
	*/
  plugins: [
    //ssr：false是为了不让js文件再服务器中编译；
    { src: '~/plugins/axios.js', ssr: true },
  ],

  router: {
    base: '/vue/'
  },

  /*
	** Nuxt.js modules
	*/
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    //ga跟踪
    ['@nuxtjs/google-analytics', {
      id: 'UA-37288238-6'
    }],
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // 'jquery',
    // Doc: https://www.npmjs.com/package/cookie-universal-nuxt
    'cookie-universal-nuxt',
    // Doc: https://www.npmjs.com/package/nuxt-trailingslash-module
    [
      '~/modules/trailingslash',
      {
        methods: ['GET']
      }
    ],
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    [
      '~/modules/i18n',
      {
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
          }
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
      }
    ]
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
    // 防止多次打包axios
    // vendor: ['axios'],
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ],
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
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
