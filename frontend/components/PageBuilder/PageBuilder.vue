<template>
  <div>
    <!-- TODO: This is just a first test. -->
    <div v-for="item in items" :key="item.id">
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
      <div v-if="item.__typename === 'pageBuilder_pbLink_BlockType'">
        <craft-nuxt-link-field v-if="item.baseLink" v-bind="item.baseLink" />
      </div>
    </div>

    <!-- TODO: Delete these links later, keep them for now to test nuxt client navigation within SPA mode -->
    <p>Some Test Links:</p>
    <nuxt-link :to="localePath('/')">Back to Home localePath</nuxt-link><br />
    <nuxt-link to="/">Back to Home /</nuxt-link><br />
    <nuxt-link to="/en">Back to Home /en</nuxt-link><br />
    <nuxt-link to="/en/">Back to Home /en/</nuxt-link><br />
    <nuxt-link to="/test-seite">Testseite DE</nuxt-link><br />
    <nuxt-link to="/en/test-page">Test page EN</nuxt-link><br />
    <hr style="margin: 1em 0" />
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
