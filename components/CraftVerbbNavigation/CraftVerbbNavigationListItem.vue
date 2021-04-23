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
      :to="computedPathForInternalLink"
      :exact="isHomePath"
    >
      {{ title }}
    </NuxtLink>
    <CraftVerbbNavigationList v-if="children && children.length">
      <CraftVerbbNavigationListItem
        v-for="item in children"
        :key="item.id"
        v-bind="item"
      />
    </CraftVerbbNavigationList>
  </li>
</template>

<script>
import { parseURL, withLeadingSlash, withoutTrailingSlash } from 'ufo'
import consola from 'consola'
const logger = consola.withTag('CraftVerbbNavigationListItem')

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
      // Links that open a new window should be treated as external links
      if (this.newWindow === '1') return 'external'

      // If there is no type, it's probably a manual link
      if (!this.type) {
        // Check if it's internal anyway
        if (this.isInternalLink) return 'internal'
        // Otherwise treat as external
        return 'external'
      }

      // Check for entries
      if (this.type.includes('Entry')) {
        // Warn for entries with mismatching host
        if (!this.isInternalLink) {
          logger.warn(
            `Mismatching host, check $config.baseURL: ${
              this.parsedURL.host
            } vs. ${parseURL(this.$config.baseURL).host}`
          )
        }
        return 'internal'
      }

      // Check for titles (aka 'passive' items),
      // they don't render links, only show a title
      if (this.type.includes('PassiveType')) return 'passive'

      // Error if no type could be determined
      logger.error(
        `Could not determine a type for item ${this.title} of type ${this.type} with url ${this.url}`
      )
      return null
    },
    parsedURL() {
      return parseURL(this.url)
    },
    computedPathForInternalLink() {
      if (this.url == null) return
      // Include `search` aka params
      const { pathname, search } = this.parsedURL
      return this.cleanPath(pathname + search)
    },
    isHomePath() {
      // Without i18n:
      // return this.computedPathForInternalLink === '/'
      return (
        this.computedPathForInternalLink === '/' ||
        this.computedPathForInternalLink === `/${this.$i18n.locale}`
      )
    },
    isInternalLink() {
      const { host, pathname } = this.parsedURL
      const baseUrlHost = parseURL(this.$config.baseURL).host

      // If there is no host, it could be a manual link (e.g. /about)
      if (!host && pathname) return true

      // If there is a host: Check if it's equal to env config
      return host === baseUrlHost
    },
  },
  methods: {
    cleanPath: (path) => withoutTrailingSlash(withLeadingSlash(path)) || '/',
  },
}
</script>

<style src="./CraftVerbbNavigationListItem.scss" lang="scss" scoped />
