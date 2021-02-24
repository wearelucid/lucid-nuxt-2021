<template>
  <div>
    <!-- TODO: This is just a first test. -->
    <div v-for="item in items" :key="item.id">
      <div v-if="item.__typename === 'pageBuilder_pbSection_BlockType'">
        <h2 v-if="item.baseTitle">{{ item.baseTitle }}</h2>
        <richtext v-if="item.baseRichtext" :content="item.baseRichtext" />
      </div>
      <div v-if="item.__typename === 'pageBuilder_pbImage_BlockType'">
        <nuxt-img
          :alt="item.baseImage[0].title"
          :src="item.baseImage[0].url"
          sizes="small:100vw medium:50vw large:768px"
        />
      </div>
      <div v-if="item.__typename === 'pageBuilder_pbLink_BlockType'">
        <CraftNuxtLinkField v-if="item.baseLink" v-bind="item.baseLink" />
      </div>
    </div>

    <!-- TODO: Delete these links later, keep them for now to test nuxt client navigation within SPA mode -->
    <hr style="margin: 2em 0" />
    <h3>Some NuxtLinks for testing:</h3>
    <nuxt-link :to="localePath('/')">Back to Home localePath</nuxt-link><br />
    <nuxt-link to="/">Back to Home /</nuxt-link><br />
    <nuxt-link to="/en">Back to Home /en</nuxt-link><br />
    <nuxt-link to="/en/">Back to Home /en/</nuxt-link><br />
    <nuxt-link to="/test-seite">Testseite DE</nuxt-link><br />
    <nuxt-link to="/en/test-page">Test page EN</nuxt-link><br />
    <nuxt-link to="/asdf">404 Page DE</nuxt-link><br />
    <nuxt-link to="/en/asdf">404 Page EN</nuxt-link><br />
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
