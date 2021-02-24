import jsonImporter from 'node-sass-json-importer'
import fetchRoutesToBeGenerated from './graphql/scripts/fetchRoutesToBeGenerated'
import createI18nConfig from './configs/i18n/i18nConfig'
import colorConfig from './configs/colors.json'
import storybookConfig from './configs/storybookConfig'
import createNuxtImageConfig from './configs/nuxtImageConfig'

/**
 * Set the default locale (used by i18n and pwa/manifest module)
 * ! Don't forget to update this (also for projects without i18n)
 */
const DEFAULT_LOCALE = 'de'

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
      lang: DEFAULT_LOCALE,
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['./assets/scss/global.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    'plugins/craftLivePreview.client.js',
    'plugins/craftSEOmatic.js',
    'plugins/whatinput.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/stylelint-module',
    'nuxt-graphql-request',
    '@nuxtjs/pwa',
    '@nuxt/image',
  ],

  // Style Resources Config
  // (https://github.com/nuxt-community/style-resources-module)
  styleResources: {
    // Share variables, mixins, functions across all style files
    // Don't include actual styles.
    scss: ['./assets/scss/style-resources.scss'],
  },

  // Stylelint config (https://github.com/nuxt-community/stylelint-module)
  stylelint: {
    files: [
      'assets/**/*.{s?(a|c)ss,less,stylus}',
      '{components,layouts,pages}/**/*.vue',
      '{components,layouts,pages}/**/*.scss',
    ],
  },

  // @nuxt/image config
  image: createNuxtImageConfig([process.env.IMAGES_URL]),

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n', '@nuxtjs/sitemap'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // TODO: 'vue-link' seems not to work if not transpiled by babel. Maybe I'm missing something here.
    transpile: ['vue-link'],

    loaders: {
      // Add node-sass-json-importer (https://github.com/pmowrer/node-sass-json-importer)
      scss: { sassOptions: { importer: jsonImporter({ convertCase: true }) } },
    },
  },

  // Generate Options
  generate: {
    fallback: true,
    crawler: false, // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate/#crawler
    routes: async () => await fetchRoutesToBeGenerated(process.env.API_URL),
  },

  // Sitemap with @nuxtjs/sitemap
  // https://sitemap.nuxtjs.org/usage/sitemap
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
  },

  // Customize Nuxt.js Progress Bar
  loading: {
    color: colorConfig.colorPrimary,
    failedColor: colorConfig.colorError,
  },

  // Storybook Options (https://storybook.nuxtjs.org/options)
  storybook: storybookConfig,

  // nuxt-graphql-request Options (https://github.com/gomah/nuxt-graphql-request)
  graphql: {
    clients: { default: { endpoint: process.env.API_URL } },
    // See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
    options: {},
  },

  /**
   * TODO: Configure i18n in './configs/i18n/i18nConfig'
   * If you don't need i18n: Remove dependency, delete '/configs/i18n' folder,
   * remove this config item and search for implementations in components
   * (i.e. `i18n.$t` or `i18n.t`)
   */
  i18n: createI18nConfig(DEFAULT_LOCALE),

  // @nuxtjs/pwa Options (https://pwa.nuxtjs.org/)
  pwa: {
    // Disable workbox module (don't be a PWA)
    workbox: false,
    meta: {
      theme_color: colorConfig.colorPrimary,

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
      lang: DEFAULT_LOCALE,
      background_color: colorConfig.colorBackgroundLight,
    },
  },
}
