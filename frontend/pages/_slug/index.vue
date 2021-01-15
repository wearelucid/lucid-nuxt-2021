<template>
  <div class="container">
    <div>
      <h1 class="title">{{ page.title }}</h1>
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
  </div>
</template>

<script>
// TODO: Replace package with updated version!
import {
  removeLeadingSlash,
  removeTrailingSlash,
} from '@wearelucid/vuecid-helpers'
import slugPage from '~/apollo/queries/slugPage'

export default {
  name: 'SlugPage',
  apollo: {
    page: {
      variables() {
        return {
          site: 'default',
          uri: removeTrailingSlash(removeLeadingSlash(this.$route.path)),
        }
      },
      query: slugPage,
    },
  },
}
</script>
