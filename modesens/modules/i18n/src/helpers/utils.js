/* gconfig app, req, vuex, store */
const {
  COUNTRY_CODE_KEY,
  LOCALE_CODE_KEY,
  LOCALE_DOMAIN_KEY
} = require('./constants')

/**
 * Get an array of country codes from a list of countries
 * @param  {Array}  countries Countries list from nuxt config
 * @return {Array}          List of country codes
 */
const getCountryCodes = (countries = []) => {
  if (countries.length) {
    // If first item is a sting, assume locales is a list of codes already
    if (typeof countries[0] === 'string') {
      return countries
    }
    // Attempt to get codes from a list of objects
    if (typeof countries[0][COUNTRY_CODE_KEY] === 'string') {
      return countries.map(country => country[COUNTRY_CODE_KEY])
    }
  }
  return []
}

exports.getCountryCodes = getCountryCodes

/**
 * Get an array of locale codes from a list of locales
 * @param  {Array}  locales Locales list from nuxt config
 * @return {Array}          List of locale codes
 */
const getLocaleCodes = (locales = []) => {
  if (locales.length) {
    // If first item is a sting, assume locales is a list of codes already
    if (typeof locales[0] === 'string') {
      return locales
    }
    // Attempt to get codes from a list of objects
    if (typeof locales[0][LOCALE_CODE_KEY] === 'string') {
      return locales.map(locale => locale[LOCALE_CODE_KEY])
    }
  }
  return []
}

exports.getLocaleCodes = getLocaleCodes

/**
 * Retrieve page's options from the module's configuration for a given route
 * @param  {Object} route    Route
 * @param  {Object} pages    Pages options from module's configuration
 * @param  {Array} locales   Locale from module's configuration
 * @param  {String} pagesDir Pages dir from Nuxt's configuration
 * @return {Object}          Page options
 */
exports.getPageOptions = (route, pages, locales, pagesDir) => {
  const options = {
    locales: getLocaleCodes(locales),
    paths: {}
  }
  const pattern = new RegExp(`${pagesDir}/`, 'i')
  const chunkName = route.chunkName
    ? route.chunkName.replace(pattern, '')
    : route.name
  const pageOptions = pages[chunkName]
  // Routing disabled
  if (pageOptions === false) {
    return false
  }
  // Skip if no page options defined
  if (!pageOptions) {
    return options
  }
  // Construct options object
  Object.keys(pageOptions).forEach(locale => {
    // Remove disabled locales from page options
    if (pageOptions[locale] === false) {
      options.locales = options.locales.filter(l => l !== locale)
    } else if (typeof pageOptions[locale] === 'string') {
      // Set custom path if any
      options.paths[locale] = pageOptions[locale]
    }
  })
  return options
}

/**
 * Extract country and locale code from cookie:
 * - Try to extract country and locale from it.
 * - Update country and locale in cookie if necessary
 * @param  {Object} app                 App
 * @param  {Object} detectBrowserLanguage detectBrowserLanguage
 * @return {[string, string]}           Country and locale code found if any
 */
exports.getCountryLocaleFromCookie = (app, detectBrowserLanguage) => {
  const { useCookie, cookieKey, countryKey, localeKey } = detectBrowserLanguage
  return [app.$cookies.get(countryKey), app.$cookies.get(localeKey)]
}

/**
 * Update country and locale code in cookie:
 * - Try to set country and locale from it.
 * - Update country and locale in cookie if necessary
 * @param  {Object} app                 App
 * @param  {Object} detectBrowserLanguage detectBrowserLanguage
 * @param  {string} country             Country to set
 * @param  {string} locale              Locale to set
 * @param  {string} cookie              Cookies to serialize, only for plugin
 * @param  {string} Cookies              JS-Cookie, only for pugin
 */
exports.setCountryLocaleToCookie = (
  app,
  detectBrowserLanguage,
  country,
  locale,
  cookie = null,
  Cookies = null
) => {
  const { useCookie, cookieKey, countryKey, localeKey } = detectBrowserLanguage

  const date = new Date()

  if (Cookies) {
    const countryCookie = cookie.serialize(countryKey, country, {
      expires: new Date(date.setDate(date.getDate() + 365)),
      path: '/'
    })
    const localeCookie = cookie.serialize(localeKey, locale, {
      expires: new Date(date.setDate(date.getDate() + 365)),
      path: '/'
    })
    Cookies.set([countryCookie, localeCookie])
  } else {
    app.$cookies.set(countryKey, country, {
      expires: new Date(date.setDate(date.getDate() + 365)),
      path: '/'
    })
    app.$cookies.set(localeKey, locale, {
      expires: new Date(date.setDate(date.getDate() + 365)),
      path: '/'
    })
  }
}

/**
 * Extract country and locale code from given route:
 * - If route has a name, try to extract locale from it
 * - Otherwise, fall back to using the routes'path
 * @param  {Object} route               Route
 * @param  {String} routesNameSeparator Separator used to add locale suffixes in routes names
 * @param  {Array}  countries           Countries list from nuxt config
 * @param  {Array}  locales             Locales list from nuxt config
 * @return {[string, string]}           Country and locale code found if any
 */
exports.getCountryLocaleFromRoute = (
  route = {},
  routesNameSeparator = '',
  countries = [],
  locales = []
) => {
  const country_codes = getCountryCodes(countries)
  const countriesPattern = `(${country_codes.join('|')})`
  const codes = getLocaleCodes(locales)
  const localesPattern = `(${codes.join('|')})`
  // Extract from route name
  if (0 && route.name) {
    const regexp = new RegExp(
      `${routesNameSeparator}${countriesPattern}${routesNameSeparator}${localesPattern}$`,
      'i'
    )
    const matches = route.name.match(regexp)
    if (matches && matches.length > 2) {
      return [matches[1], matches[2]]
    }
  } else if (route.path) {
    // Extract from path
    const regexp = new RegExp(`^/${countriesPattern}/${localesPattern}/`, 'i')
    const matches = route.path.match(regexp)
    if (matches && matches.length > 2) {
      return [matches[1], matches[2]]
    }
  }
  return [null, null]
}

/**
 * Get x-forwarded-host
 * @return {String} x-forwarded-host
 */
const getForwarded = () =>
  process.browser
    ? window.location.href.split('/')[2]
    : req.headers['x-forwarded-host']
      ? req.headers['x-forwarded-host']
      : req.headers.host

exports.getForwarded = getForwarded

/**
 * Get hostname
 * @return {String} Hostname
 */
const getHostname = () =>
  process.browser ? window.location.href.split('/')[2] : req.headers.host // eslint-disable-line

exports.getHostname = getHostname

/**
 * Get locale code that corresponds to current hostname
 * @return {String} Locade code found if any
 */
exports.getLocaleDomain = () => {
  const hostname = app.i18n.forwardedHost ? getForwarded() : getHostname()
  if (hostname) {
    const localeDomain = app.i18n.locales.find(l => l[LOCALE_DOMAIN_KEY] === hostname) // eslint-disable-line
    if (localeDomain) {
      return localeDomain[LOCALE_CODE_KEY]
    }
  }
  return null
}

/**
 * Dispatch store module actions to keep it in sync with app's locale data
 * @param  {String} locale   Current locale
 * @param  {Object} messages Current messages
 * @return {void}
 */
exports.syncVuex = (locale = null, messages = null) => {
  if (vuex && store) {
    if (locale !== null && vuex.mutations.setLocale) {
      store.dispatch(vuex.moduleName + '/setLocale', locale)
    }
    if (messages !== null && vuex.mutations.setMessages) {
      store.dispatch(vuex.moduleName + '/setMessages', messages)
    }
  }
}
