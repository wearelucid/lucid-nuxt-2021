import { $fetch } from 'ohmyfetch'
import { parseURL } from 'ufo'
import consola from 'consola'

export default async function (apiUrl) {
  try {
    consola.info('🚀 Fetching routes to generate from ', apiUrl)
    const { data } = await $fetch(apiUrl, {
      method: 'POST',
      body: {
        query: `#graphql
          {
            entries(site: "*") {
              url
            }
          }
        `,
      },
    })

    if (data == null || !data.entries.length) {
      throw new Error(
        "❌ Couldn't get routes from CMS. Is API_URL defined in .env and your GraphQL endpoint working?"
      )
    }

    const { entries } = data
    const routesWithUrl = entries.filter((item) => item.url) // Ignore routes without url
    const routeURLs = routesWithUrl.map((item) => parseURL(item.url).pathname)
    consola.success('✅ Successfully fetched routes to generate: ', routeURLs)
    return routeURLs
  } catch (error) {
    throw new Error(error)
  }
}
