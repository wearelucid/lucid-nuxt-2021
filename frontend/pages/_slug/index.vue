<template>
  <nuxt-content :document="page" />
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content(params.slug)
      .fetch()
      .catch((err) => error(err))
    return {
      // If `page` is an array of items (the name of a folder) -> look for `index.md` inside of it
      page: Array.isArray(page) ? page.find((x) => x.slug === 'index') : page,
    }
  },
}
</script>
