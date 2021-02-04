<template>
  <nav id="navigation">
    <div class="TheCraftNavigation__wrap">
      <p v-if="$fetchState.pending">Fetching menu...</p>
      <ul v-else class="TheCraftNavigation__list">
        <li
          v-for="(item, key) in menu"
          :key="`nav-item-${key}`"
          :class="[
            'TheCraftNavigation__item',
            item.children && item.children.length
              ? 'TheCraftNavigation__item--has-children'
              : '',
          ]"
        >
          <NuxtLink
            class="TheCraftNavigation__link"
            :to="cleanUri(item)"
            :exact="isHomeUri(cleanUri(item))"
          >
            {{ item.title }}
          </NuxtLink>
          <ul
            v-if="item.children && item.children.length"
            class="TheCraftNavigation__sub-list"
          >
            <li
              v-for="(childItem, childkey) in item.children"
              :key="`nav-item-child-${childkey}`"
              class="TheCraftNavigation__item TheCraftNavigation__item--child"
            >
              <NuxtLink
                class="TheCraftNavigation__link"
                :to="cleanUri(childItem)"
              >
                {{ childItem.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { withLeadingSlash, withoutTrailingSlash } from '@nuxt/ufo'
import mainNavQuery from '~/graphql/queries/mainNav.gql'
export default {
  name: 'TheCraftNavigation',
  data() {
    return {
      menu: [],
    }
  },
  async fetch() {
    // Fetch mainNav with current locale
    const variables = {
      navHandle: 'mainNav',
      level: 1,
      site: this.$i18n.locale,
    }
    const { menu } = await this.$graphql.request(mainNavQuery, variables)
    if (!menu) {
      throw new Error(
        this.$i18n.t('error.errorInComponent', {
          component: this.$options.name,
        })
      )
    }

    // Update component data
    this.menu = menu
  },
  watch: {
    // Watch for locale change to fetch new menu based on current locale
    '$i18n.locale': {
      handler(newLocale, oldLocale) {
        if (newLocale === oldLocale) {
          return
        }
        this.$fetch()
      },
    },
  },
  methods: {
    cleanUri: ({ nodeUri }) =>
      withoutTrailingSlash(withLeadingSlash(nodeUri)) || '/',
    isHomeUri(uri) {
      return uri === '/' || uri === `/${this.$i18n.locale}`
    },
  },
}
</script>

<style scoped>
.TheCraftNavigation__link {
  text-decoration: none;
}
.nuxt-link-active {
  font-weight: bold;
}
.nuxt-link-exact-active {
  text-decoration: underline;
}
</style>
