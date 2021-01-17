<template>
  <!-- TODO: This is just a first test. -->
  <aside>
    <p>
      {{ $i18n.locales.find((l) => l.code === $i18n.locale).name }}
      is the current lang (code: {{ $i18n.locale }})
    </p>
    <div v-if="pageTranslations.length">
      <a
        v-for="locale in pageTranslations"
        :key="locale.language"
        :href="locale.url"
      >
        {{ $i18n.locales.find((l) => l.iso === locale.language).name }}
      </a>
    </div>
    <div v-else>
      <span>No translation available</span>
    </div>
    <hr style="margin: 1em 0" />
  </aside>
</template>

<script>
export default {
  props: {
    pageTranslations: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
