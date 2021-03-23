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

import slugPage from '~/mixins/slugPage'
import craftSEOmatic from '~/mixins/craftSEOmatic'

export default {
  name: 'SlugPage',
  mixins: [slugPage, craftSEOmatic],
}
</script>
