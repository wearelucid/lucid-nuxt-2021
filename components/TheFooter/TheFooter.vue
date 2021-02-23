<template>
  <footer>
    <hr style="margin: 2em 0" />
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
      footer: {},
    }
  },
  async fetch() {
    const variables = {
      site: this.$i18n.locale,
    }

    // Query directly in component with `graphql-tag`:
    const query = gql`
      query Footer($site: [String]) {
        footer: globalSet(handle: "footer", site: $site) {
          ... on footer_GlobalSet {
            baseTitle
          }
        }
      }
    `
    const { footer } = await this.$graphql.default.request(query, variables)

    // Throw error in component if no data comes back (-> $fetchState.error):
    if (footer?.baseTitle == null) {
      throw new Error(
        this.$i18n.t('error.errorInComponent', {
          component: this.$options.name,
        })
      )
    }

    this.footer = footer
  },
  watch: {
    '$i18n.locale': {
      handler(newLocale, oldLocale) {
        if (newLocale === oldLocale) return
        this.$fetch()
      },
    },
  },
}
</script>
