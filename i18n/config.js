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
    // TODO: Re-enable browser lang detection by removing this property.
    // ! But fix issues with live preview first: https://github.com/wearelucid/lucid-nuxt-2021/issues/25
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: defaultLocale,
      messages: i18nMessages,
    },
  }
}

export default createI18nConfig
