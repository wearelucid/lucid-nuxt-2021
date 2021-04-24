<template>
  <main v-if="page" :class="['Page', 'Page--home', $options.name]">
    <TheTemporaryLangSwitcher :page-translations="page.localized" />
    <h1 class="Page__title">{{ page.title }}</h1>
    <CraftNeoFieldBlocksPageBuilder :items="page.pageBuilder" />
  </main>
</template>

<script>
import homePageQuery from '~/graphql/queries/homePage.gql'
import craftSEOmatic from '~/mixins/craftSEOmatic'

export default {
  name: 'HomePage',
  mixins: [craftSEOmatic],
  async asyncData({ error, $graphql, i18n }) {
    const variables = {
      site: i18n.locale,
      section: 'home',
    }
    const { page } = await $graphql.default.request(homePageQuery, variables)
    if (page == null) {
      error({ statusCode: 404, message: i18n.t('error.message404') })
    }
    return { page }
  },
}
</script>
