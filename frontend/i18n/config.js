import i18nMessages from './messages'

/**
 * * i18n Config
 * see https://i18n.nuxtjs.org/
 */
export default {
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
  defaultLocale: 'de',
  // TODO: Re-enable browser lang detection by removing this property.
  // ! But fix issues with live preview first: https://github.com/wearelucid/frontend-boilerplate/issues/25
  detectBrowserLanguage: false,
  vueI18n: {
    fallbackLocale: 'de',
    messages: i18nMessages,
  },
}
