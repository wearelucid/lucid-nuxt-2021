export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Environment variables that are required at build time (rather than runtime)
  // https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config/#env
  env: {
    // baseURL: process.env.BASE_URL
  },

  // Environment variables that are required at runtime
  // https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config/#runtimeconfig
  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/
  publicRuntimeConfig: {
    // baseURL: process.env.BASE_URL || 'https://nuxtjs.org',
    apiUrl: process.env.API_URL,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/apollo', 'nuxt-i18n'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Storybook Options (https://storybook.nuxtjs.org/options)
  storybook: {
    port: 4000, // Run Storybook on localhost:4000,
  },

  // Apollo Options (https://github.com/nuxt-community/apollo-module)
  apollo: {
    clientConfigs: {
      default: '~/apollo/setup/apolloClientDefaultConfig.js',
    },
  },

  // i18n Options (https://i18n.nuxtjs.org/)
  i18n: {
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
  },
}
