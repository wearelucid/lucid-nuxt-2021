<template>
  <footer>
    <hr style="margin: 2em 0" />
    <p v-if="$fetchState.pending">Fetching Footer...</p>
    <p v-else-if="$fetchState.error" style="color: red">
      {{ $fetchState.error.message }}
    </p>
    <div v-else>
      {{ title }}
    </div>
  </footer>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'TheFooter',
  data() {
    return {
      footerTranslations: [],
    }
  },
  async fetch() {
    // Query directly in component with `graphql-tag`:
    const query = gql`
      query Footer {
        footerTranslations: globalSets(handle: "footer", site: "*") {
          language
          ... on footer_GlobalSet {
            baseTitle
          }
        }
      }
    `
    // Make request:
    const { footerTranslations } = await this.$graphql.request(query)

    // Throw error in component if no data comes back (-> $fetchState.error):
    if (footerTranslations[0]?.baseTitle == null) {
      throw new Error(
        this.$i18n.t('error_in_component', { component: this.$options.name })
      )
    }

    // Set data:
    this.footerTranslations = footerTranslations
  },
  computed: {
    localizedFooter() {
      return this.footerTranslations.find(
        (item) => item.language === this.currentIsoCode
      )
    },
    currentIsoCode() {
      // This should probably be `this.$i18n.localeProperties.iso`
      // but somehow it doesn't get updated in computed property. Workaround:
      return this.$i18n.locales.find((l) => l.code === this.$i18n.locale).iso
    },
    title() {
      return this.localizedFooter.baseTitle
    },
  },
}
</script>
