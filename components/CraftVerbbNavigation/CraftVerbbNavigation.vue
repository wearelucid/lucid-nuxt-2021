<template>
  <div :class="$options.name">
    <p v-if="$fetchState.pending">Fetching menu...</p>
    <p v-else-if="$fetchState.error" :style="'color: #f00'">
      {{ $fetchState.error.message }}
    </p>
    <CraftVerbbNavigationList v-else>
      <CraftVerbbNavigationListItem
        v-for="item in menu"
        :key="item.id"
        v-bind="item"
      />
    </CraftVerbbNavigationList>
  </div>
</template>

<script>
import query from './CraftVerbbNavigation.gql'

export default {
  name: 'CraftVerbbNavigation',
  props: {
    navHandle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      menu: [],
    }
  },
  async fetch() {
    const variables = {
      navHandle: this.navHandle,
      site: this.$i18n.locale,
    }
    const { menu } = await this.$graphql.default.request(query, variables)
    if (!menu || !menu.length) {
      throw new Error(
        this.$i18n.t('error.errorInComponent', {
          component: this.$options.name,
        })
      )
    }
    this.menu = menu
  },
  watch: {
    // Watch for locale change to fetch new menu based on current locale
    '$i18n.locale': {
      handler(newLocale, oldLocale) {
        if (newLocale === oldLocale) return
        this.$fetch()
      },
    },
  },
}
</script>
