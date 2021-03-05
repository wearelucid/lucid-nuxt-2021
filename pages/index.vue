<template>
  <div v-if="page" :class="$options.name">
    <TheTemporaryLangSwitcher :page-translations="page.localized" />
    <h1 :class="`${$options.name}__title`">{{ page.title }}</h1>
    <CraftNeoFieldBlocksPageBuilder :items="page.pageBuilder" />
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
    const { page } = await $graphql.default.request(homePageQuery, variables)
    if (page == null) {
      error({ statusCode: 404, message: app.i18n.t('error.message404') })
    }
    return { page }
  },
  head() {
    return this.$craftSEOmatic(this.page.seomatic)
  },
}
</script>

<style src="~/assets/scss/pages/homepage.scss" lang="scss" />
