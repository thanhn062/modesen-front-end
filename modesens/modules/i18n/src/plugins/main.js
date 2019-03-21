import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import cookie from 'cookie'
import Cookies from 'js-cookie'
import cookieUniversal from 'cookie-universal'

export default async ({ app, route, store, req }) => {
  // Options
  const lazy = <%= options.lazy %>
  const vuex = <%= JSON.stringify(options.vuex) %>

  // Helpers
  const COUNTRY_CODE_KEY = '<%= options.COUNTRY_CODE_KEY %>'
  const LOCALE_CODE_KEY = '<%= options.LOCALE_CODE_KEY %>'
  const LOCALE_DOMAIN_KEY = '<%= options.LOCALE_DOMAIN_KEY %>'
  const getCountryCodes = <%= options.getCountryCodes %>
  const getLocaleCodes = <%= options.getLocaleCodes %>
  const getCountryLocaleFromCookie = <%= options.getCountryLocaleFromCookie %>
  const setCountryLocaleToCookie = <%= options.setCountryLocaleToCookie %>
  const getCountryLocaleFromRoute = <%= options.getCountryLocaleFromRoute %>
  const getHostname = <%= options.getHostname %>
  const getForwarded = <%= options.getForwarded %>
  const getLocaleDomain = <%= options.getLocaleDomain %>
  const syncVuex = <%= options.syncVuex %>

  <% if (options.vuex) { %>
  // Register Vuex module
  if (store) {
    store.registerModule(vuex.moduleName, {
      namespaced: true,
      state: () => ({
        locale: '',
        messages: {}
      }),
      actions: {
        setLocale ({ commit }, locale) {
          commit(vuex.mutations.setLocale, locale)
        },
        setMessages ({ commit }, messages) {
          commit(vuex.mutations.setMessages, messages)
        }
      },
      mutations: {
        [vuex.mutations.setLocale] (state, locale) {
          state.locale = locale
        },
        [vuex.mutations.setMessages] (state, messages) {
          state.messages = messages
        }
      }
    })
  }
  <% } %>

  // Set instance options

  app.$cookies = new cookieUniversal(req, null, <%= JSON.stringify(options.vueI18n) %>)
  app.i18n = new VueI18n(<%= JSON.stringify(options.vueI18n) %>)
  app.i18n.countries = <%= JSON.stringify(options.countries) %>
  app.i18n.locales = <%= JSON.stringify(options.locales) %>
  app.i18n.defaultCountry = '<%= options.defaultCountry %>'
  app.i18n.defaultLocale = '<%= options.defaultLocale %>'
  app.i18n.differentDomains = <%= options.differentDomains %>
  app.i18n.forwardedHost = <%= options.forwardedHost %>
  app.i18n.routesNameSeparator = '<%= options.routesNameSeparator %>'
  app.i18n.beforeLanguageSwitch = <%= options.beforeLanguageSwitch %>
  app.i18n.onLanguageSwitched = <%= options.onLanguageSwitched %>

  if (store && store.state.localeDomains) {
    app.i18n.locales.forEach(locale => {
      locale.domain = store.state.localeDomains[locale.code];
    })
  }

  const detectBrowserLanguage = <%= JSON.stringify(options.detectBrowserLanguage) %>
  const [cookieCountry, cookieLocale] = getCountryLocaleFromCookie(app, detectBrowserLanguage)
  let country = cookieCountry || app.i18n.defaultCountry || null
  let locale = cookieLocale || app.i18n.defaultLocale || null

  if (app.i18n.differentDomains) {
    const domainLocale = getLocaleDomain()
    locale = domainLocale ? domainLocale : locale
  } else {
    // const [routeCountry, routeLocale] = getCountryLocaleFromRoute(route, app.i18n.routesNameSeparator, app.i18n.countries, app.i18n.locales)



    // country = cookieCountry ? cookieCountry : country
    // locale = cookieLocale ? cookieLocale : locale
    // country = routeCountry ? routeCountry : country
    // locale = routeLocale ? routeLocale : locale

    if (cookieCountry != country || cookieLocale != locale) {
      setCountryLocaleToCookie(app, detectBrowserLanguage, country, locale, cookie, Cookies)
    }
  }

  app.i18n.country = country
  app.i18n.locale = locale

  // Lazy-load translations
  if (lazy) {
    const { loadLanguageAsync } = require('./utils')
    const messages = await loadLanguageAsync(app.i18n, app.i18n.locale)
    syncVuex(locale, messages)
    return messages
  } else {
    // Sync Vuex
    syncVuex(locale, app.i18n.getLocaleMessage(locale))
  }
}
