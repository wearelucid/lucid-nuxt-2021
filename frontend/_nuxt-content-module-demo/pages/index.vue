<template>
  <div class="container">
    <div>
      <h1 class="title">{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
export default {
  /**
   * Basic example for fetching content with @nuxt/content
   */
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'home'
    const page = await $content(slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found.' })
      })
    return { page }
  },
}
</script>
