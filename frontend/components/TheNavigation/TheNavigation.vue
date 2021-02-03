<template>
  <nav id="navigation">
    <div class="TheNavigation__wrap">
      <p v-if="$fetchState.pending">Fetching menu...</p>
      <p v-else-if="$fetchState.error">Menu konnte nicht geladen werden</p>
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
          <NuxtLink class="TheNavigation__link" :to="item.nodeUri">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import mainNavQuery from '~/graphql/queries/mainNav.gql'
export default {
  name: 'TheNavigation',
  data() {
    return {
      menu: [],
    }
  },
  async fetch() {
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
    this.menu = menu
  },
  watch: {
    '$i18n.locale': {
      handler(newLocale, oldLocale) {
        if (newLocale === oldLocale) {
          return
        }
        this.$fetch()
      },
      immediate: true,
    },
  },
}
</script>
