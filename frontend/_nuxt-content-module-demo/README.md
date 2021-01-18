# How to use `@nuxt/content`

1. Read the [📖 Documentation](https://content.nuxtjs.org)
2. Delete the `/graphql` folder
3. Remove all GraphQL dependencies from `/package.json`
4. Remove all configs for GraphQL in `/nuxt.config.js`
5. `yarn add @nuxt/content`
6. Add `'@nuxt/content'` to the `modules` section in `/nuxt.config.js`
7. Move the `_nuxt-content-module-demo/content` folder to the root directory `/content`
8. Replace the `/pages` directory with `_nuxt-content-module-demo/pages` (or get inspired by the implementation)
