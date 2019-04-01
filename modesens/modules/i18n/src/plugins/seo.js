import Vue from 'vue'

Vue.mixin({
  head() {
    const COMPONENT_OPTIONS_KEY = '<%= options.COMPONENT_OPTIONS_KEY %>'
    if (
      !this._hasMetaInfo ||
      !this.$i18n ||
      !this.$i18n.locales ||
      this.$options[COMPONENT_OPTIONS_KEY] === false ||
      (this.$options[COMPONENT_OPTIONS_KEY] &&
        this.$options[COMPONENT_OPTIONS_KEY].seo === false)
    ) {
      return {}
    }
    const LOCALE_CODE_KEY = '<%= options.LOCALE_CODE_KEY %>'
    const LOCALE_ISO_KEY = '<%= options.LOCALE_ISO_KEY %>'
    const BASE_URL = '<%= options.baseUrl %>'

    // Prepare html lang attribute
    const currentLocaleData = this.$i18n.countries.find(
      l => l[LOCALE_CODE_KEY] === this.$i18n.country
    )

    const htmlAttrs = {}
    if (currentLocaleData) {
      htmlAttrs.lang = currentLocaleData[LOCALE_ISO_KEY]
    }

    // hreflang tags for countries
    const link = this.$i18n.countries
      .map(country => {
        if (country[LOCALE_ISO_KEY] && country[LOCALE_ISO_KEY] != currentLocaleData[LOCALE_ISO_KEY] ) {
          return {
            hid: 'alternate-hreflang-' + country[LOCALE_ISO_KEY],
            rel: 'alternate',
            href: this.switchLocalePath(country.code, country.defaultLocale),
            hreflang: country[LOCALE_ISO_KEY]
          }
        } else {
          console.warn(
            '[<%= options.MODULE_NAME %>] Locale ISO code is required to generate alternate link'
          )
          return null
        }
      })
      .filter(item => !!item)

  link.unshift({
    hid: 'canonical-' + currentLocaleData[LOCALE_CODE_KEY],
    rel: 'canonical',
    href: this.switchLocalePath(currentLocaleData[LOCALE_CODE_KEY], currentLocaleData[LOCALE_ISO_KEY]),
  })

    // og:locale meta
    const meta = []
    // og:locale - current
    if (currentLocaleData && currentLocaleData[LOCALE_ISO_KEY]) {
      meta.push({
        hid: 'og:locale',
        name: 'og:locale',
        property: 'og:locale',
        // Replace dash with underscore as defined in spec: language_TERRITORY
        content: currentLocaleData[LOCALE_ISO_KEY].replace(/-/g, '_')
      })
    }
    // og:locale - alternate
    meta.push(
      ...this.$i18n.locales
        .filter(
          l =>
            l[LOCALE_ISO_KEY] &&
            l[LOCALE_ISO_KEY] !== currentLocaleData[LOCALE_ISO_KEY]
        )
        .map(locale => ({
          hid: 'og:locale:alternate-' + locale[LOCALE_ISO_KEY],
          name: 'og:locale:alternate',
          property: 'og:locale:alternate',
          content: locale[LOCALE_ISO_KEY].replace(/-/g, '_')
        }))
    )

    return {
      htmlAttrs,
      link,
      meta
    }
  }
})
