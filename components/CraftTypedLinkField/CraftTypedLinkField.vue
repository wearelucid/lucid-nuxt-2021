<template>
  <!-- https://github.com/Developmint/vue-link#prop-overview -->
  <VueLink
    v-if="url"
    :to="isInternalLink ? getPathFromUrl(url) : url"
    :new-tab="target === '_blank'"
    :external="!isInternalLink || target === '_blank'"
    :title="title"
  >
    {{ customText ? customText : text }}
  </VueLink>
</template>

<script>
import { ForNuxt } from 'vue-link'
import { parseURL } from 'ufo'

export default {
  name: 'CraftTypedLinkField',
  components: {
    VueLink: ForNuxt,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    customText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
  computed: {
    isInternalLink() {
      return this.type === 'entry'
    },
  },
  methods: {
    getPathFromUrl: (url) => parseURL(url).pathname,
  },
}
</script>
