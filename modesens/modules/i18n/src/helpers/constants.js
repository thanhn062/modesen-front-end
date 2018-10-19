const packageJson = require('../../package.json')

// Internals
exports.MODULE_NAME = packageJson.name
exports.ROOT_DIR = 'nuxt-i18n'
exports.HELPERS_PATH = 'helpers/'
exports.PLUGINS_DIR = 'plugins/'
exports.TEMPLATES_DIR = 'templates/'
exports.COUNTRY_CODE_KEY = 'code'
exports.LOCALE_CODE_KEY = 'code'
exports.LOCALE_ISO_KEY = 'iso'
exports.LOCALE_DOMAIN_KEY = 'domain'
exports.LOCALE_FILE_KEY = 'file'

// Options
const STRATEGIES = {
  PREFIX: 'prefix',
  PREFIX_EXCEPT_DEFAULT: 'prefix_except_default',
  PREFIX_AND_DEFAULT: 'prefix_and_default'
}

exports.STRATEGIES = STRATEGIES

exports.COMPONENT_OPTIONS_KEY = 'nuxtI18n'
exports.DEFAULT_OPTIONS = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [],
  defaultLocale: null,
  routesNameSeparator: '___',
  strategy: STRATEGIES.PREFIX_EXCEPT_DEFAULT,
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  },
  differentDomains: false,
  forwardedHost: false,
  seo: true,
  baseUrl: '',
  vuex: {
    moduleName: 'i18n',
    mutations: {
      setLocale: 'I18N_SET_LOCALE',
      setMessages: 'I18N_SET_MESSAGES'
    }
  },
  parsePages: true,
  pages: {},
  beforeLanguageSwitch: () => null,
  onLanguageSwitched: () => null
}
exports.NESTED_OPTIONS = ['detectBrowserLanguage', 'vuex']
