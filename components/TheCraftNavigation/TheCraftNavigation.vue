<template>
  <nav id="navigation" class="TheCraftNavigation">
    <div class="TheCraftNavigation__wrap">
      <p v-if="$fetchState.pending">Fetching menu...</p>
      <p v-else-if="$fetchState.error" style="color: #f00">
        {{ $fetchState.error.message }}
      </p>
      <ul v-else class="TheCraftNavigation__list">
        <li
          v-for="item in menu"
          :key="item.id"
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
              v-for="childItem in item.children"
              :key="childItem.id"
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
import mainNavQuery from '~/graphql/queries/verbbNavigation.gql'
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
      site: this.$i18n.locale,
    }
    const { menu } = await this.$graphql.default.request(
      mainNavQuery,
      variables
    )
    if (!menu || !menu.length) {
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
        if (newLocale === oldLocale) return
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

<style src="./TheCraftNavigation.scss" lang="scss" scoped />
