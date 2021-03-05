<template>
  <div v-if="page" :class="$options.name">
    <TheTemporaryLangSwitcher :page-translations="page.localized" />
    <h1 :class="`${$options.name}__title`">{{ page.title }}</h1>
    <CraftNeoFieldBlocksPageBuilder :items="page.pageBuilder" />
  </div>
</template>

<script>
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

<style src="~/assets/scss/pages/slugpage.scss" lang="scss" />
