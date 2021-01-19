<template>
  <div v-if="page">
    <the-temporary-lang-switcher :page-translations="page.localized" />
    <h1 class="title">{{ page.title }}</h1>
    <page-builder :items="page.pageBuilder" />
  </div>
</template>

<script>
// TODO: Replace package with updated version!
import {
  removeLeadingSlash,
  removeTrailingSlash,
  removeLeadingLang,
} from '@wearelucid/vuecid-helpers'
import slugPageQuery from '~/graphql/queries/slugPage'

export default {
  name: 'SlugPage',
  async asyncData({ app, route, $graphql }) {
    const variables = {
      site: app.i18n.locale,
      uri: removeLeadingLang(
        removeTrailingSlash(removeLeadingSlash(route.path))
      ),
    }
    const { page } = await $graphql.request(slugPageQuery, variables)
    return { page }
  },
}
</script>
