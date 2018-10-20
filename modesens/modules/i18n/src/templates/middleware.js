import cookie from 'cookie'
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

  /*if (1 || !routeCountry || !routeLocale){
	  // Handle browser language detection
	  const detectBrowserLanguage = <%= JSON.stringify(options.detectBrowserLanguage) %>
	  console.log(detectBrowserLanguage)
	  if (detectBrowserLanguage) {
  		// Get browser language either from navigator if running in mode SPA, or from the headers
  		let browserLocale = null
  		if (isSpa && typeof navigator !== 'undefined' && navigator.language) {
  		  browserLocale = navigator.language.toLocaleLowerCase().substring(0, 2)
  		} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
  		  browserLocale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substring(0, 2)
  		}

      console.log(browserLocale)

  		if (browserLocale) {
  		  const { useCookie, cookieKey, countryKey, localeKey } = detectBrowserLanguage
        console.log(useCookie, cookieKey)
  		  const redirectToBrowserLocale = () => {
    			const routeName = route && route.name ? app.getRouteBaseName(route) : 'index'
    			if (browserLocale && browserLocale !== app.i18n.locale && locales.indexOf(browserLocale) !== -1) {
    			  redirect(app.localePath(Object.assign({}, route , {
    				name: routeName
    			  }), browserLocale))
    			}
  		  }

  		  const getCookie = () => {
          console.log(133, isSpa)
    			if (isSpa) {
            console.log(134, Cookies.get(cookieKey))
    			  return Cookies.get(cookieKey);
    			} else if (req && typeof req.headers.cookie !== 'undefined') {
    			  const cookies = req.headers && req.headers.cookie ? cookie.parse(req.headers.cookie) : {}
            console.log(139, cookies[cookieKey])
    			  return cookies[cookieKey]
    			}
    			return null
  		  }

        const getCookieCountryLocale = () => {
          const cookies = req.headers && req.headers.cookie ? cookie.parse(req.headers.cookie) : {}
          console.log(147, [cookies[countryKey], cookies[localeKey]])
          return [cookies[countryKey], cookies[localeKey]]
        }

  		  const setCookie = () => {
          console.log(146, res)
    			const date = new Date()
    			if (isSpa) {
    			  Cookies.set(cookieKey, 1, {
    				expires: new Date(date.setDate(date.getDate() + 365))
    			  })
    			} else if (res) {
    			  const redirectCookie = cookie.serialize(cookieKey, 1, {
    				expires: new Date(date.setDate(date.getDate() + 365))
    			  })
            console.log(155, redirectCookie)
    			  res.setHeader('Set-Cookie', redirectCookie)
    			}
  		  }

        const setCookieCountryLocale = (country, locale) => {
          const date = new Date()
          const countryCookie = cookie.serialize(countryKey, country, {
            expires: new Date(date.setDate(date.getDate() + 365)),
            path: '/'
          })
          const localeCookie = cookie.serialize(localeKey, locale, {
            expires: new Date(date.setDate(date.getDate() + 365)),
            path: '/'
          })
          console.log(174, countryCookie, localeCookie)
          res.setHeader('Set-Cookie', [countryCookie, localeCookie])
        }

  		  // Handle cookie option to prevent multiple redirections
        console.log(162, useCookie)
  		  if (useCookie) {
          const [cookieCountry, cookieLocale] = getCookieCountryLocale()
          console.log(183, cookieCountry, cookieLocale)
    			if (routeCountry && routeLocale){
            if ((routeCountry != cookieCountry || routeLocale != cookieLocale)) {
      			  // Set cookie
      			  setCookieCountryLocale(routeCountry, routeLocale)
      			  // redirectToBrowserLocale()
      			}
          }

          country = cookieCountry ? cookieCountry : country
          locale = cookieLocale ? cookieLocale : locale
  		  }
  		}
	  }
  }*/

  const [routeCountry, routeLocale] = getCountryLocaleFromRoute(route, routesNameSeparator, countries, locales)

  const detectBrowserLanguage = <%= JSON.stringify(options.detectBrowserLanguage) %>
  const [cookieCountry, cookieLocale] = getCountryLocaleFromCookie(req, cookie, detectBrowserLanguage)

  console.log('203'+cookieCountry + cookieLocale)
  console.log('204'+routeCountry + routeLocale)

  country = cookieCountry ? cookieCountry : country
  locale = cookieLocale ? cookieLocale : locale
  country = routeCountry ? routeCountry : country
  locale = routeLocale ? routeLocale : locale
  console.log('205'+country + locale + app.i18n.locale)

  if (cookieCountry != country || cookieLocale != locale) {
    setCountryLocaleToCookie(res, cookie, detectBrowserLanguage, country, locale)
  }


  app.i18n.country = country
  // Abort if locale did not change
  if (locale === app.i18n.locale) {
    return
  }
  console.log('204'+country + locale)

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
