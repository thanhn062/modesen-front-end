const pkg = require('./package')
const countries = require('./countries')
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
      // { hid: 'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#FFF' },
      { name: 'ir-site-verification-token', value: '-1470320165' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'ModeSens' },
      { property: 'fb:app_id', content: '822420867799662' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' },
      { rel: 'chrome-webstore-item', href: 'https://chrome.google.com/webstore/detail/cmfmhegpbogfmojekmidappigcfbgbcb' },
      { rel: 'manifest', href: '/manifest.json'}
    ]
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://127.0.0.1/',
    browserBaseURL: process.env.BROWSER_BASE_URL || 'https://test.modesens.com/',
    secretKey: 'gDsdSXwddn3xp3SWgujuTUizGbfUM3wHcrzj8FLihicCJLUUePkX1dT9NiW8',
    client_id: 'cNO3k5SqBdKtbZFHCduXzHTX1u5pz29gDRa0uitF',
    client_secret:
      'quBIP7yZJ5ysiupbaDcLOLOVLlPup5EQ5eBjXEQDj8VtcqQiyWfeBowkb7cjS43XRDgf5NvRY5jOY3qhTfp299S6JvFjDXK96oyrUyJaxJB1TzoL1eJK6ky2hDkNmSdn'
  },
  /*
	** Customize the progress-bar color
	*/
  loading: { color: '#fff' },

  /*
	** gconfig CSS
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
    { src: '~/plugins/axios.js', ssr: false },
    { src: '~/plugins/init.js', ssr: false },
    { src: '~/assets/js/utils/utils.js', ssr: false}
  ],

  router: {
    // base: '/vue/'
    // 在每页渲染前运行 middleware下 中间件的逻辑
    middleware: ['device']
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
        baseUrl: 'https://test.modesens.com',
        defaultDomain: 'modesens.com',
        countries: countries,
        locales: [
          {
            code: 'en',
            file: 'en.js',
            iso: 'en-us',
            domain: 'test.modesens.com',
            name: 'English'
          },
          {
            code: 'zh',
            file: 'zh.js',
            iso: 'zh-cn',
            domain: 'test.modesens.com',
            name: '简体中文'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultCountry: 'us',
        defaultLocale: 'en',
        strategy: 'prefix',
        differentDomains: true,
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
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           propertyName: 'access_token'
  //         },
  //         // user: { url: 'me', method: 'get', propertyName: 'data' },
  //         logout: false
  //       }
  //     }
  //   },
  //   client_id: 'cNO3k5SqBdKtbZFHCduXzHTX1u5pz29gDRa0uitF',
  //   client_secret:
  //     'quBIP7yZJ5ysiupbaDcLOLOVLlPup5EQ5eBjXEQDj8VtcqQiyWfeBowkb7cjS43XRDgf5NvRY5jOY3qhTfp299S6JvFjDXK96oyrUyJaxJB1TzoL1eJK6ky2hDkNmSdn'
  // },
  /*
	** Build configuration
	*/
  build: {
    styleResources: {
      less: './assets/css/common2.less'
    },
    extractCSS: { allChunks: true },
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
