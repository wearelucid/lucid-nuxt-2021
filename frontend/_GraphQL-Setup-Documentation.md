# GraphQL Setup Documentation

Here we document GraphQL/Apollo-specific changes we made step by step as we go along:

1. Installed [`@nuxtjs/apollo`](https://github.com/nuxt-community/apollo-module) with a basic config in `nuxt.config.js`
2. Installed [`graphql-tag`](https://www.npmjs.com/package/graphql-tag) for parsing GraphQL queries.
3. Added basic query to `/pages/index.vue`. It works but we get a "WARNING: heuristic fragment matching going on!" warning. Let's fix it in the next step.
4. Add `API_URL` as env variable
5. Followed [this](https://www.apollographql.com/docs/react/data/fragments/#generating-possibletypes-automatically) and [this](https://medium.com/commutatus/whats-going-on-with-the-heuristic-fragment-matcher-in-graphql-apollo-client-e721075e92be) guide to fetch possible queries from GraphQL endpoint. Also [this question and the answers on stackoverflow](https://stackoverflow.com/questions/59690194/apollographql-heuristic-fragment-manual-matching) describe what we are trying to do in this step.
6. Now we get data back from apollo in `/pages/index.vue` ✔️
