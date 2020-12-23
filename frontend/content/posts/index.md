# Posts

[Post 1](/posts/post-1)
[Post 2](/posts/post-2)
[Back to home](/)

## Using @nuxt/content with nested pages or posts
When fetching $content(*path*) where *path* is a folder, @nuxt/content will return an array of items in that folder. One can use this to create a (filtered/sorted) listing of items by using the API. Getting data for an *index* page can be achieved by finding the *index* page in the array of items or by creating a named folder (like `/posts`) inside the pages directory (see below).

### Creating a listing
Consider [using the `$content` API](https://content.nuxtjs.org/fetching) and create a proper listing instead of hardcoding the links:

```js
const posts = await this.$content('posts').sortBy('createdAt').fetch()
```

### Var. A) Handling index pages within dynamic pages (`/_slug`)
> `/posts` being renderd by `/_slug.vue`
```js
async asyncData({ $content, params, error }) {
  const page = await $content(params.slug).fetch()
  return {
    // If `page` is an array of items (the name of a folder) -> look for `index.md` inside of it
    page: Array.isArray(page) ? page.find((x) => x.slug === 'index') : page,
  }
},
```

### Var. B) Creating a named route for `/posts`
> `/posts` being renderd by `/posts/index.vue`
Create a `posts` folder inside the `pages` directory and use something like this:
```js
export default {
  async asyncData({ $content, route, error }) {
    const page = await $content(route.name, 'index').fetch()
    return { page }
  },
}
```
