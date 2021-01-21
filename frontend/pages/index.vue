<template>
  <div v-if="page">
    <TheTemporaryLangSwitcher :page-translations="page.localized" />
    <h1 class="title">{{ page.title }}</h1>
    <PageBuilder :items="page.pageBuilder" />
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
  head() {
    // TODO: This is a demo for debug mode, remove this later:
    return this.$craftSEOmatic(this.page.seomatic, { debug: true })
    // return this.$craftSEOmatic(this.page.seomatic)
  },
}
</script>
