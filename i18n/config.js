import i18nMessages from './messages'

/**
 * * i18n Config
 * see https://i18n.nuxtjs.org/
 */
const createI18nConfig = (defaultLocale = 'de') => {
  return {
    locales: [
      {
        code: 'de',
        iso: 'de-CH',
        name: 'Deutsch',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
    ],
    defaultLocale,
    /**
     * ! Restraints when working with Craft CMS live preview:
     * Preview inside iframe will be redirected to browser language
     * and has to be set to desired language manually.
     * This only applies to the home page if `onlyOnRoot` is set to `true`.
     * https://github.com/wearelucid/lucid-nuxt-2021/issues/25
     */
    detectBrowserLanguage: {
      onlyOnRoot: true, // Only detect and redirect on home page
      useCookie: true, // Store selected lang in a cookie
      cookieCrossOrigin: true, // Make it work inside iframe
    },
    vueI18n: {
      fallbackLocale: defaultLocale,
      messages: i18nMessages,
    },
  }
}

export default createI18nConfig
