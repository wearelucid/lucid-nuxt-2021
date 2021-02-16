import fetchRoutesToBeGenerated from './graphql/scripts/fetchRoutesToBeGenerated'
import i18nConfig from './i18n/config'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Environment variables that are required at build time (rather than runtime)
  // https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config/#env
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
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
  css: ['./assets/scss/global/_page.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['plugins/craftLivePreview.client.js', 'plugins/craftSEOmatic.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    'nuxt-graphql-request',
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Mixins/Variables etc. shared across all components
  styleResources: {
    scss: [
      './assets/scss/settings/*.scss',
      './assets/scss/generic/*.scss',
      './assets/scss/tools/*.scss',
    ],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n', '@nuxtjs/sitemap'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // TODO: 'vue-link' seems not to work if not transpiled by babel. Maybe I'm missing something here.
    transpile: ['vue-link'],
  },

  // Generate Options
  generate: {
    fallback: true,
    routes: async () => await fetchRoutesToBeGenerated(process.env.API_URL),
  },

  // Storybook Options (https://storybook.nuxtjs.org/options)
  storybook: {
    port: 4000, // Run Storybook on localhost:4000,
  },

  // nuxt-graphql-request Options (https://github.com/gomah/nuxt-graphql-request)
  graphql: {
    endpoint: process.env.API_URL,
    // See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
    options: {},
  },

  /**
   * TODO: Configure i18n in ./i18n/config
   * If you don't need i18n: Remove dependency, delete /i18n folder,
   * remove this config item and search for implementations in components
   * (i.e. `i18n.$t` or `i18n.t`)
   */
  i18n: i18nConfig,

  // Sitemap with @nuxtjs/sitemap
  // https://sitemap.nuxtjs.org/usage/sitemap
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
  },
}
