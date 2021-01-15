# GraphQL Setup Documentation

Here we document GraphQL/Apollo-specific changes we made step by step as we go along:

1. Installed [`@nuxtjs/apollo`](https://github.com/nuxt-community/apollo-module) with a basic config in `nuxt.config.js`
2. Installed [`graphql-tag`](https://www.npmjs.com/package/graphql-tag) for parsing GraphQL queries.
3. Added basic query to `/pages/index.vue`. It works but we get a "WARNING: heuristic fragment matching going on!" warning. Let's fix it in the next step.
