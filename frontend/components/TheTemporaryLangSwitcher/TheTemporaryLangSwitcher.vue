<template>
  <!-- TODO: This is just a first test. -->
  <aside>
    <p>
      {{ $i18n.locales.find((l) => l.code === $i18n.locale).name }}
      is the current lang (code: {{ $i18n.locale }})
    </p>
    <div v-if="pageTranslations.length">
      <nuxt-link
        v-for="locale in pageTranslations"
        :key="locale.language"
        :to="getPathFromUrl(locale.url)"
      >
        {{ $i18n.locales.find((l) => l.iso === locale.language).name }}
      </nuxt-link>
    </div>
    <div v-else>
      <span>No translation available</span>
    </div>
    <hr style="margin: 1em 0" />
  </aside>
</template>

<script>
// TODO: Replace package
import { getPathFromUrl } from '@wearelucid/vuecid-helpers'

export default {
  props: {
    pageTranslations: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getPathFromUrl: (url) => getPathFromUrl(url),
  },
}
</script>
