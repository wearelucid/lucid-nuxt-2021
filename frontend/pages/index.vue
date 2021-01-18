<template>
  <div v-if="page">
    <the-temporary-lang-switcher :page-translations="page.localized" />
    <h1 class="title">{{ page.title }}</h1>
    <page-builder :items="page.pageBuilder" />
  </div>
</template>

<script>
import homePageQuery from '~/graphql/queries/homePage'

export default {
  name: 'HomePage',
  async asyncData({ app, $graphql }) {
    const variables = {
      site: app.i18n.locale,
      section: 'home',
    }
    const { page } = await $graphql.request(homePageQuery, variables)
    return { page }
  },
}
</script>
