import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import possibleTypes from './possibleTypes.json'

/**
 * Adding possible types because we get a "WARNING: heuristic fragment matching going on!" otherwise.
 * Mostly following this guide: https://medium.com/commutatus/whats-going-on-with-the-heuristic-fragment-matcher-in-graphql-apollo-client-e721075e92be
 * Here is more official info about the cache part: https://www.apollographql.com/docs/react/data/fragments/#generating-possibletypes-automatically
 *
 * Just discovered someone wrote a small package to solve this problem (but last commit is 2019):
 * https://github.com/lucasconstantino/apollo-progressive-fragment-matcher
 */
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: possibleTypes,
})

/**
 * Default client config for apollo. Including `InMemoryCache` with possible types.
 */
export default function ({ $config: { apiUrl } }) {
  return {
    httpEndpoint: apiUrl,
    cache: new InMemoryCache({
      fragmentMatcher,
    }),
    apollo: {
      defaultOptions: {
        // Disable cache for queries (for now it doesn't seem to update the variables on route change otherwise):
        query: {
          fetchPolicy: 'no-cache',
        },
      },
    },
  }
}
