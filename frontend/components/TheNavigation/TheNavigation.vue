<template>
  <nav id="navigation">
    <div class="TheNavigation__wrap">
      <p v-if="$fetchState.pending">Fetching menu...</p>
      <ul v-else class="TheNavigation__list">
        <li
          v-for="(item, key) in menu"
          :key="`nav-item-${key}`"
          :class="[
            'TheNavigation__item',
            item.children && item.children.length
              ? 'TheNavigation__item--has-children'
              : '',
          ]"
        >
          <a
            v-if="item.newWindow === '1'"
            class="TheNavigation__link"
            target="_blank"
            rel="external nofollow noreferrer"
            :href="item.nodeUri"
          >
            {{ item.title }}
          </a>
          <NuxtLink
            v-else
            class="TheNavigation__link"
            :to="cleanUri(item.nodeUri)"
            :exact="isHomeUri(cleanUri(item.nodeUri))"
          >
            {{ item.title }}
          </NuxtLink>
          <ul
            v-if="item.children && item.children.length"
            class="TheNavigation__sub-list"
          >
            <li
              v-for="(childItem, childkey) in item.children"
              :key="`nav-item-child-${childkey}`"
              class="TheNavigation__item TheNavigation__item--child"
            >
              <NuxtLink
                class="TheNavigation__link"
                :to="cleanUri(childItem.nodeUri)"
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
  name: 'TheNavigation',
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
    cleanUri: (uri) => withoutTrailingSlash(withLeadingSlash(uri)) || '/',
    isHomeUri(uri) {
      return uri === '/' || uri === `/${this.$i18n.locale}`
    },
  },
}
</script>

<style>
.TheNavigation__link {
  text-decoration: none;
}
.nuxt-link-active {
  font-weight: bold;
}
.nuxt-link-exact-active {
  text-decoration: underline;
}
</style>
