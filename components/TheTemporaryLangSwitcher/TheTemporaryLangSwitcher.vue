<template>
  <aside>
    <hr :style="'margin: 1em 0'" />
    <p>
      {{ $i18n.localeProperties.name }}
      is the current lang (code: {{ $i18n.locale }})
    </p>
    <div v-if="pageTranslations.length">
      <NuxtLink
        v-for="locale in localeLinksToRender"
        :key="locale.language"
        :to="locale.routerLink"
      >
        {{ locale.name }}
      </NuxtLink>
    </div>
    <div v-else>
      <span>No translation available</span>
    </div>
    <hr :style="'margin: 1em 0'" />
  </aside>
</template>

<script>
import { withLeadingSlash, withoutTrailingSlash } from 'ufo'

export default {
  props: {
    pageTranslations: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    localeLinksToRender() {
      return this.pageTranslations.map((craftPageTranslation) => {
        const matchedI18nLocale =
          this.getNuxtI18nLocaleFromCraftTranslation(craftPageTranslation)
        return {
          ...craftPageTranslation,
          name: matchedI18nLocale?.name,
          // https://i18n.nuxtjs.org/api#methods
          routerLink: this.localePath(
            {
              path: withLeadingSlash(
                withoutTrailingSlash(craftPageTranslation?.uri)
              ),
            },
            matchedI18nLocale?.code
          ),
        }
      })
    },
  },
  methods: {
    /**
     * Match craft translation language with nuxt-i18n locale by iso string (i.e. 'en-US')
     */
    getNuxtI18nLocaleFromCraftTranslation(craftPageTranslation) {
      return this.$i18n.locales.find(
        (l) => l.iso === craftPageTranslation.language
      )
    },
  },
}
</script>
