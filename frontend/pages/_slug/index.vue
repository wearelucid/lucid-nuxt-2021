<template>
  <div v-if="page">
    <TheTemporaryLangSwitcher :page-translations="page.localized" />
    <h1 class="title">{{ page.title }}</h1>
    <PageBuilder :items="page.pageBuilder" />
  </div>
</template>

<script>
import { withoutLeadingSlash, withoutTrailingSlash } from '@nuxt/ufo'
import slugPageQuery from '~/graphql/queries/slugPage.gql'

/**
 * TODO: This should live somewhere in a helpers repo.
 * @example removeLanguagePrefixFromPath({ path = 'en/about', prefix = 'en' })
 * -> 'about'
 * @example removeLanguagePrefixFromPath({ path = '/en/about', prefix = 'en' })
 * -> 'about'
 */
const removeLanguagePrefixFromPath = ({ path = '', prefix = '' } = {}) => {
  if (path.startsWith(`${prefix}/`)) return path.substr(prefix.length + 1)
  if (path.startsWith(`/${prefix}/`)) return path.substr(prefix.length + 2)
  return path
}

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
    const { page } = await $graphql.request(slugPageQuery, variables)
    if (page == null) {
      error({ statusCode: 404, message: app.i18n.t('error_404') })
    }
    return { page }
  },
  head() {
    return this.$craftSEOmatic(this.page.seomatic)
  },
}
</script>
