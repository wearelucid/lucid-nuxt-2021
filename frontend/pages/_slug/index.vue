<template>
  <div v-if="page">
    <the-temporary-lang-switcher :page-translations="page.localized" />
    <h1 class="title">{{ page.title }}</h1>
    <page-builder :items="page.pageBuilder" />
  </div>
</template>

<script>
import { withoutLeadingSlash, withoutTrailingSlash } from '@nuxt/ufo'
import slugPageQuery from '~/graphql/queries/slugPage'

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
  async asyncData({ app, route, $graphql }) {
    const variables = {
      site: app.i18n.locale,
      uri: removeLanguagePrefixFromPath({
        path: withoutTrailingSlash(withoutLeadingSlash(route.path)),
        prefix: app.i18n.locale,
      }),
    }
    const { page } = await $graphql.request(slugPageQuery, variables)
    return { page }
  },
}
</script>
