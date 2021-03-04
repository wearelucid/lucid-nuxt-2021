<template>
  <li :class="[$options.name, `${$options.name}--level-${level}`]">
    <p v-if="computedType === 'passive'" :class="`${$options.name}__title`">
      {{ title }}
    </p>
    <a
      v-else-if="computedType === 'external'"
      :href="url"
      :target="newWindow === '1' ? '_blank' : false"
      :rel="newWindow === '1' ? 'noopener' : false"
      :class="`${$options.name}__link ${$options.name}__link--external`"
    >
      {{ title }}
    </a>
    <NuxtLink
      v-else
      :class="`${$options.name}__link`"
      :to="cleanPath(nodeUri)"
      :exact="isHomePath(cleanPath(nodeUri))"
    >
      {{ title }}
    </NuxtLink>
    <CraftVerbbNavigationList v-if="children.length" :items="children" />
  </li>
</template>

<script>
import { withLeadingSlash, withoutTrailingSlash } from '@nuxt/ufo'

export default {
  name: 'CraftVerbbNavigationListItem',
  props: {
    level: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: '',
    },
    nodeUri: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    children: {
      type: Array,
      default: () => [],
    },
    newWindow: {
      type: String,
      default: '0',
    },
  },
  computed: {
    computedType() {
      // no type -> it's a custom link
      if (!this.type) {
        // starts with http -> treat as external
        if (this.nodeUri.startsWith('http')) return 'external'
        // otherwise treat as internal
        return 'internal'
      }
      // passive items don't render links, only show a title
      if (this.type.includes('PassiveType')) return 'passive'

      // default -> internal link (would be of type entry)
      return 'internal'
    },
  },
  methods: {
    isHomePath(path) {
      return path === '/' || path === `/${this.$i18n.locale}`
    },
    cleanPath: (path) => withoutTrailingSlash(withLeadingSlash(path)) || '/',
  },
}
</script>

<style src="./CraftVerbbNavigationListItem.scss" lang="scss" scoped />
