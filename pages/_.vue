<template>
  <main v-if="page" :class="['Page', 'Page--slug', $options.name]">
    <TheTemporaryLangSwitcher :page-translations="page.localized" />
    <h1 class="Page__title">{{ page.title }}</h1>
    <CraftNeoFieldBlocksPageBuilder :items="page.pageBuilder" />
  </main>
</template>

<script>
/**
 * * The `_.vue` file will handle requests that do not match a more specific route.
 * https://nuxtjs.org/docs/2.x/features/file-system-routing#unknown-dynamic-nested-routes
 * ! Handling 404 pages is up to the logic of the _.vue page.
 */
import { withoutLeadingSlash, withoutTrailingSlash } from '@nuxt/ufo'
import slugPageQuery from '~/graphql/queries/slugPage.gql'
import { removeLanguagePrefixFromPath } from '~/i18n/helpers'

export default {
  name: 'SlugPage',
  async asyncData({ app, route, $graphql, error }) {
    const variables = {
      site: app.i18n.locale,
      uri: removeLanguagePrefixFromPath({
        path: withoutTrailingSlash(withoutLeadingSlash(route.path)),
        prefix: app.i18n.locale,
      }),
    }
    const { page } = await $graphql.default.request(slugPageQuery, variables)
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
