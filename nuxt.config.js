import fetchRoutesToBeGenerated from './graphql/scripts/fetchRoutesToBeGenerated'
import createI18nConfig from './i18n/i18nConfig'
import colors from './configs/colors.mjs'
// import createNuxtImageConfig from './configs/nuxtImageConfig'

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
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },

  // Environment variables that are required at runtime
  // https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config/#runtimeconfig
  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
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
  plugins: ['plugins/craftLivePreview.client.js', 'plugins/whatinput.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-graphql-request',
    '@nuxtjs/pwa',
  ],

  // Stylelint config (https://github.com/nuxt-community/stylelint-module)
  stylelint: {
    files: [
      'assets/**/*.{s?(a|c)ss,less,stylus}',
      '{components,layouts,pages}/**/*.vue',
      '{components,layouts,pages}/**/*.scss',
    ],
  },

  // @nuxt/image config
  // image: createNuxtImageConfig([process.env.IMAGES_URL]),

  // ? Do you need nuxt-mq? Here you go:
  // nuxt-mq config (https://github.com/vanhoofmaarten/nuxt-mq)
  // import { nuxtMqBreakpoints } from './configs/breakpoints'
  // mq: { breakpoints: nuxtMqBreakpoints, defaultBreakpoint: 'large' },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap', '@wearelucid/nuxt-seomatic'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // TODO: 'vue-link' seems not to work if not transpiled by babel. Maybe I'm missing something here.
    transpile: ['vue-link'],
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
    color: colors.primary,
    failedColor: colors.error,
  },

  // Example Storybook Config
  // Storybook Options (https://storybook.nuxtjs.org/options)
  // import storybookConfig from './configs/storybookConfig'
  // storybook: storybookConfig,

  // nuxt-graphql-request Options (https://github.com/gomah/nuxt-graphql-request)
  graphql: {
    clients: { default: { endpoint: process.env.API_URL } },
    // See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
    options: {},
  },

  /**
   * TODO: Configure i18n in './i18n/i18nConfig'
   * If you don't need i18n: Remove dependency, delete '/i18n' folder,
   * remove this config item and search for implementations in components
   * (i.e. `i18n.$t` or `i18n.t`)
   */
  i18n: createI18nConfig({
    defaultLocale: DEFAULT_LOCALE,
    browserLanguageDetection: process.env.NODE_ENV !== 'development',
  }),

  // @nuxtjs/pwa Options (https://pwa.nuxtjs.org/)
  pwa: {
    // Disable workbox module (don't be a PWA)
    workbox: false,
    meta: {
      theme_color: colors.primary,

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
      background_color: colors['background-light'],
    },
  },
}
