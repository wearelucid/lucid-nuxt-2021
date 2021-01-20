<template>
  <footer>
    <p v-if="$fetchState.pending">Fetching Footer...</p>
    <p v-else-if="$fetchState.error" style="color: red">
      {{ $fetchState.error.message }}
    </p>
    <div v-else>
      {{ footer.baseTitle }}
    </div>
  </footer>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'TheFooter',
  data() {
    return {
      footer: null,
    }
  },
  async fetch() {
    // Query directly in component with `graphql-tag`:
    const query = gql`
      query Footer($site: [String], $handle: [String]) {
        globalSet(site: $site, handle: $handle) {
          ... on footer_GlobalSet {
            baseTitle
          }
        }
      }
    `
    const variables = {
      site: this.$i18n.locale,
      handle: 'footer',
    }

    // Make request:
    const response = await this.$graphql.request(query, variables)

    // Throw error in component if no data comes back (-> $fetchState.error):
    if (response?.globalSet?.baseTitle == null) {
      throw new Error(
        this.$i18n.t('error_in_component', { component: this.$options.name })
      )
    }

    // Set data:
    this.footer = response.globalSet
  },
  watch: {
    // Re-fetch on locale change:
    '$i18n.locale': '$fetch',
  },
}
</script>
