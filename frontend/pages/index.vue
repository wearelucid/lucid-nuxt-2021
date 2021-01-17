<template>
  <div v-if="page">
    <the-temporary-lang-switcher :page-translations="page.localized" />
    <h1 class="title">{{ page.title }}</h1>
    <page-builder :items="page.pageBuilder" />
  </div>
</template>

<script>
import homePage from '~/apollo/queries/homePage'

export default {
  name: 'HomePage',
  async asyncData({ app, route }) {
    const response = await app.apolloProvider.defaultClient.query({
      query: homePage,
      variables: {
        site: app.i18n.locale,
        section: 'home',
      },
    })
    const { page } = response.data
    return { page }
  },
}
</script>
