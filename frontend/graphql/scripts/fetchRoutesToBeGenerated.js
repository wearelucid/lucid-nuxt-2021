import fetch from 'cross-fetch'
import { parseURL } from '@nuxt/ufo'
const consola = require('consola')

export default async function (apiUrl) {
  try {
    consola.info('🚀 Fetching routes to generate from ', apiUrl)
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          {
            entries(site: "*") {
              url
            }
          }
        `,
      }),
    })
    const jsonResponse = await response.json()
    if (jsonResponse.data == null || !jsonResponse.data.entries.length) {
      throw new Error(
        "❌ Couldn't get routes from CMS. Is API_URL defined in .env and your GraphQL endpoint working?"
      )
    }
    const fetchedRoutes = jsonResponse.data.entries.map(
      (item) => parseURL(item.url).pathname
    )
    consola.success(
      '✅ Successfully fetched routes to generate: ',
      fetchedRoutes
    )
    return fetchedRoutes
  } catch (error) {
    throw new Error(error)
  }
}
