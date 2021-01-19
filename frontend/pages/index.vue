<template>
  <div v-if="page">
    <the-temporary-lang-switcher :page-translations="page.localized" />
    <h1 class="title">{{ page.title }}</h1>
    <page-builder :items="page.pageBuilder" />
  </div>
</template>

<script>
import homePageQuery from '~/graphql/queries/homePage.gql'

export default {
  name: 'HomePage',
  async asyncData({ app, $graphql, error }) {
    const variables = {
      site: app.i18n.locale,
      section: 'home',
    }
    const { page } = await $graphql.request(homePageQuery, variables)
    if (page == null) {
      error({ statusCode: 404, message: app.i18n.t('error_404') })
    }
    return { page }
  },
}
</script>
