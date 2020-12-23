<template>
  <nuxt-content :document="page" />
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content(params.slug, params.slug2)
      .fetch()
      .catch((err) => error(err))
    return { page }
  },
}
</script>
