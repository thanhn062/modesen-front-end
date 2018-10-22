// import cookie from 'cookie'
// import Cookies from 'js-cookie'
import middleware from '../middleware'

middleware['i18n'] = async ({ app, req, res, route, store, redirect, isHMR }) => {
  if (isHMR) {
    return
  }

  // Options
  const lazy = <%= options.lazy %>
  const vuex = <%= JSON.stringify(options.vuex) %>
  const differentDomains = <%= options.differentDomains %>
  const isSpa = <%= options.isSpa %>

  // Helpers
  const COUNTRY_CODE_KEY = '<%= options.COUNTRY_CODE_KEY %>'
  const LOCALE_CODE_KEY = '<%= options.LOCALE_CODE_KEY %>'
  const getCountryCodes = <%= options.getCountryCodes %>
  const getLocaleCodes = <%= options.getLocaleCodes %>
  const getCountryLocaleFromCookie = <%= options.getCountryLocaleFromCookie %>
  const setCountryLocaleToCookie = <%= options.setCountryLocaleToCookie %>
  const getCountryLocaleFromRoute = <%= options.getCountryLocaleFromRoute %>
  const routesNameSeparator = '<%= options.routesNameSeparator %>'
  const countries = getCountryCodes(<%= JSON.stringify(options.countries) %>)
  const locales = getLocaleCodes(<%= JSON.stringify(options.locales) %>)
  const syncVuex = <%= options.syncVuex %>

  let country = app.i18n.country || app.i18n.defaultCountry || null
  let locale = app.i18n.locale || app.i18n.defaultLocale || null

  // Handle root path redirect
  const rootRedirect = '<%= options.rootRedirect %>'
  if (route.path === '/' && rootRedirect) {
    redirect('/' + rootRedirect)
    return
  }

  /*// Handle browser language detection
  const detectBrowserLanguage = <%= JSON.stringify(options.detectBrowserLanguage) %>

  if (detectBrowserLanguage) {
    // Get browser language either from navigator if running in mode SPA, or from the headers
    let browserLocale = null
    if (isSpa && typeof navigator !== 'undefined' && navigator.language) {
      browserLocale = navigator.language.toLocaleLowerCase().substring(0, 2)
    } else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      browserLocale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substring(0, 2)
    }

    if (browserLocale) {
      const { useCookie, cookieKey } = detectBrowserLanguage

      const redirectToBrowserLocale = () => {
        const routeName = route && route.name ? app.getRouteBaseName(route) : 'index'
        if (browserLocale && browserLocale !== app.i18n.locale && locales.indexOf(browserLocale) !== -1) {
          redirect(app.localePath(Object.assign({}, route , {
            name: routeName
          }), browserLocale))
        }
      }

      const getCookie = () => {
        if (isSpa) {
          return Cookies.get(cookieKey);
        } else if (req && typeof req.headers.cookie !== 'undefined') {
          const cookies = req.headers && req.headers.cookie ? cookie.parse(req.headers.cookie) : {}
          return cookies[cookieKey]
        }
        return null
      }

      const setCookie = () => {
        const date = new Date()
        if (isSpa) {
          Cookies.set(cookieKey, 1, {
            expires: new Date(date.setDate(date.getDate() + 365))
          })
        } else if (res) {
          const redirectCookie = cookie.serialize(cookieKey, 1, {
            expires: new Date(date.setDate(date.getDate() + 365))
          })
          res.setHeader('Set-Cookie', redirectCookie)
        }
      }

      // Handle cookie option to prevent multiple redirections
      if (useCookie) {
        if (!getCookie()) {
          // Set cookie
          setCookie()
          redirectToBrowserLocale()
        }
      } else {
        redirectToBrowserLocale()
      }
    }
  }*/

  // Abort if different domains option enabled
  if (app.i18n.differentDomains) {
    return
  }

  const detectBrowserLanguage = <%= JSON.stringify(options.detectBrowserLanguage) %>

  const [cookieCountry, cookieLocale] = getCountryLocaleFromCookie(app, detectBrowserLanguage)
  country = cookieCountry ? cookieCountry : country
  locale = cookieLocale ? cookieLocale : locale

  const [routeCountry, routeLocale] = getCountryLocaleFromRoute(route, routesNameSeparator, countries, locales)
  country = routeCountry ? routeCountry : country
  locale = routeLocale ? routeLocale : locale

  // geoip-country cannot run on windows
  if (0 && !cookieCountry && !routeCountry) {
    const requestIp = require('request-ip');
    const geoip = require("geoip-country");
    const ip = requestIp.getClientIp(req);
    const geo = geoip.lookup(ip);

    if (geo) {
      const ipCountry = geo['country'].toLowerCase()
      if (ipCountry && ipCountry !== app.i18n.country && countries.indexOf(ipCountry) !== -1) {
        country = ipCountry
      }
    }
  }

  if (!cookieLocale && !routeLocale) {
    // Get browser language either from navigator if running in mode SPA, or from the headers
    let browserLocale = null

    if (isSpa && typeof navigator !== 'undefined' && navigator.language) {
      browserLocale = navigator.language.toLocaleLowerCase().substring(0, 2)
    } else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      browserLocale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substring(0, 2)
    }

    if (browserLocale && browserLocale !== app.i18n.locale && locales.indexOf(browserLocale) !== -1) {
      locale = browserLocale
    }
  }

  if (cookieCountry != country || cookieLocale != locale) {
    setCountryLocaleToCookie(app, detectBrowserLanguage, country, locale)
  }

  app.i18n.country = country
  // Abort if locale did not change
  if (locale === app.i18n.locale) {
    return
  }

  const oldLocale = app.i18n.locale
  app.i18n.beforeLanguageSwitch(oldLocale, locale)
  // Lazy-loading enabled
  if (lazy) {
    const { loadLanguageAsync } = require('./utils')
    const messages = await loadLanguageAsync(app.i18n, locale)
    app.i18n.locale = locale
    app.i18n.onLanguageSwitched(oldLocale, locale)
    syncVuex(locale, messages)
  } else {
    // Lazy-loading disabled
    app.i18n.locale = locale
    app.i18n.onLanguageSwitched(oldLocale, locale)
    syncVuex(locale, app.i18n.getLocaleMessage(locale))
  }
}
