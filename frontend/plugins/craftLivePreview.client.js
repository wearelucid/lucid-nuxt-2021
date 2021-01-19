import { withQuery } from '@nuxt/ufo'

/**
 * Automatically detect Craft live preview
 * Adding the .client.js suffix ensures this will only be run client-side.
 */
export default function ({ query, enablePreview, $graphql, $config }) {
  const craftPreview = query['x-craft-live-preview']
  const craftToken = query.token

  if (craftPreview) {
    // Add query params to GraphQL endpoint (override default setting specified in nuxt.config.js):
    // https://example.com/api/blabla?x-craft-live-preview=asdf&token=1234
    $graphql.url = withQuery($config.apiUrl, {
      'x-craft-live-preview': craftPreview,
      token: craftToken,
    })

    // Enable native preview mode (only works for static sites):
    // https://nuxtjs.org/docs/2.x/features/live-preview/
    enablePreview()
  }
}
