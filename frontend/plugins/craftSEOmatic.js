const consola = require('consola')

const pluginName = 'craftSEOmatic'
const expectedProps = [
  'metaTitleContainer',
  'metaTagContainer',
  'metaLinkContainer',
]
const ignoredProps = [
  'metaScriptContainer',
  'metaJsonLdContainer',
  'metaSiteVarsContainer',
]

/**
 * Consume Craft SEOmatic data and convert it to a format that Nuxt.js expects in it's head property.
 * Inspired by: https://github.com/devotoare/nuxt-seomatic-meta-apollo/blob/master/lib/plugin.js
 * TODO: Create nuxt module, separate package
 */
export default function ({ isDev }, inject) {
  inject(pluginName, (data, { config = {}, debug = isDev } = {}) => {
    // Always return if no data is provided
    if (data == null) {
      // Complain about it in debug mode
      if (debug) {
        consola
          .withTag(pluginName)
          .error(
            'No data provided. Make sure to include "seomatic" in your GraphQL query and that SEOmatic is installed on your Craft CMS instance.',
            { data }
          )
      }
      return
    }

    // Add some debugging help
    if (debug) {
      // Create a list of all provided keys
      const providedDataKeys = JSON.parse(JSON.stringify(Object.keys(data)))
      const providedDataKeysToPrint = providedDataKeys.join(', ')

      // Complain if we don't get what we expect
      expectedProps.forEach((prop) => {
        if (!providedDataKeys.includes(prop)) {
          consola
            .withTag(pluginName)
            .error(
              `Please provide ${prop}. You provided: ${providedDataKeysToPrint}`
            )
        }
      })

      // Warn if data is provided that's not being processed
      ignoredProps.forEach((prop) => {
        if (providedDataKeys.includes(prop)) {
          consola
            .withTag(pluginName)
            .warn(
              `${prop} will not be processed! Consider removing it or extending the plugin.`
            )
        }
      })
    }

    // Convert the GraphQL JSON data to an object so we can work with it:
    const {
      metaTitleContainer: {
        title: { title },
      },
      metaTagContainer,
      metaLinkContainer,
    } = Object.entries(data).reduce((acc, [key, value]) => {
      if (key !== '__typename') {
        acc[key] = JSON.parse(value)
        return acc
      }

      return acc
    }, {})

    // Flatten metaTagContainer values into string:
    const meta = metaTagContainer
      ? Object.values(metaTagContainer).reduce(
          (flat, next) => flat.concat(next),
          []
        )
      : null

    // Flatten metaLinkContainer values into string:
    const link = metaLinkContainer
      ? Object.values(metaLinkContainer).reduce(
          (flat, next) => flat.concat(next),
          []
        )
      : null

    const headData = {
      ...(title && { title }),
      ...(meta && { meta }),
      ...(link && { link }),
    }

    if (debug) consola.withTag(pluginName).info('Processed Data: ', headData)

    return headData
  })
}
