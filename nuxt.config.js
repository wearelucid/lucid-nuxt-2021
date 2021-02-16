import fetchRoutesToBeGenerated from './graphql/scripts/fetchRoutesToBeGenerated'
import createI18nConfig from './i18n/config'

// Set the default locale (used by i18n and pwa/manifest module)
const defaultLocale = 'de'

// Set some default colors (used by pwa/meta and manifest module and to customize nuxt progress bar)
const themeColors = {
  primary: 'black',
  background: 'white',
  error: 'red',
}

export default {
  // Server config (https://nuxtjs.org/docs/2.x/features/configuration#edit-host-and-port)
  server: {
    // Access dev server on local network:
    // host: '0', // default: localhost
  },

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
    htmlAttrs: {
      // Set lang attribute for <html> element (=> better a11y)
      // i18n: `nuxt-i18n` will override this in ./layouts/default.vue
      lang: defaultLocale,
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['./assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['plugins/craftLivePreview.client.js', 'plugins/craftSEOmatic.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    'nuxt-graphql-request',
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa',
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

  // Customize Nuxt.js Progress Bar
  loading: {
    color: themeColors.primary,
    failedColor: themeColors.error,
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
  i18n: createI18nConfig(defaultLocale),

  // @nuxtjs/pwa Options (https://pwa.nuxtjs.org/)
  pwa: {
    // Disable workbox module (don't be a PWA)
    workbox: false,
    meta: {
      theme_color: themeColors.primary,

      // Don't be `mobile-web-app-capable`
      mobileApp: false,

      // Disable options already provided by SEOmatic in a Craft CMS setup:
      name: false,
      description: false,
      lang: false,
      ogType: false,
      ogSiteName: false,
      ogTitle: false,
      ogDescription: false,
      ogHost: false,
      ogImage: false,
      ogUrl: false,
    },
    manifest: {
      lang: defaultLocale,
      background_color: themeColors.background,
    },
  },

  // Sitemap with @nuxtjs/sitemap
  // https://sitemap.nuxtjs.org/usage/sitemap
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
  },
}
