<template>
  <div v-if="page">
    <!-- TODO: This is just a test. The lang switcher should live in its own component -->
    <aside>
      <div v-if="page.localized.length">
        <a
          v-for="locale in page.localized"
          :key="locale.language"
          :href="locale.url"
        >
          {{ $i18n.locales.find((l) => l.iso === locale.language).name }}
        </a>
      </div>
      <div v-else>
        <span>No translation available</span>
      </div>
      <br />
    </aside>

    <h1 class="title">{{ page.title }}</h1>

    <!-- TODO: This is just a test for the pageBuilder. -->
    <div v-for="item in page.pageBuilder" :key="item.id">
      <div v-if="item.__typename === 'pageBuilder_pbSection_BlockType'">
        <h2 v-if="item.baseTitle">{{ item.baseTitle }}</h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-if="item.baseRichtext" v-html="item.baseRichtext" />
      </div>
      <div v-if="item.__typename === 'pageBuilder_pbImage_BlockType'">
        <img
          v-if="item.baseImage && item.baseImage.length"
          :src="item.baseImage[0].url"
          :alt="item.baseImage[0].title"
          width="auto"
          height="300px"
        />
      </div>
    </div>
  </div>
</template>

<script>
// TODO: Replace package with updated version!
import {
  removeLeadingSlash,
  removeTrailingSlash,
  removeLeadingLang,
} from '@wearelucid/vuecid-helpers'
import slugPage from '~/apollo/queries/slugPage'

export default {
  name: 'SlugPage',
  apollo: {
    page: {
      variables() {
        return {
          site: this.$i18n.locale,
          uri: removeLeadingLang(
            removeTrailingSlash(removeLeadingSlash(this.$route.path))
          ),
        }
      },
      query: slugPage,
    },
  },
}
</script>
