/**
 * Automatically detect Craft live preview
 * Adding the .client.js suffix ensures this will only be run client-side.
 */
export default function ({ query, enablePreview, $graphql, $config }, inject) {
  const craftPreview = query['x-craft-live-preview']
  const craftToken = query.token

  if (craftPreview) {
    // Update api endpoint with query params
    $graphql.url = `${$config.apiUrl}?x-craft-live-preview=${craftPreview}&token=${craftToken}`

    // Inject $craftLivePreview to be used in the whole app:
    // https://nuxtjs.org/docs/2.x/directory-structure/plugins/#inject-in-root--context
    inject('craftLivePreview', true)

    // Enable native preview mode (only works for static sites):
    // https://nuxtjs.org/docs/2.x/features/live-preview/
    enablePreview()
  }
}
