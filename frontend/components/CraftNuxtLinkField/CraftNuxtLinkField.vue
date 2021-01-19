<template>
  <div>
    <span>
      Link of type <strong>{{ type }}</strong>
      <br />
      {{ url }}
      <br />
    </span>
    <vue-link
      v-if="url"
      :to="type === 'entry' ? getPathFromUrl(url) : url"
      :new-tab="target === '_blank'"
    >
      {{ customText ? customText : text }}
    </vue-link>
    <hr />
  </div>
</template>

<script>
// Choose how you like your slashes:
// import { ForNuxt, ForNuxtAddSlash, ForNuxtStripSlash } from 'vue-link'
import { ForNuxtStripSlash } from 'vue-link'
import { parseURL } from '@nuxt/ufo'

export default {
  components: {
    'vue-link': ForNuxtStripSlash,
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
  mounted() {
    // TODO/Note: Log some important debug info to the console here:
    // Delete this later
    if (this.url)
      console.log('CraftNuxtLinkField: ', {
        type: this.type,
        rawURL: this.url,
        parsedURL: parseURL(this.url),
      })
  },
  methods: {
    getPathFromUrl: (url) => parseURL(url).pathname,
  },
}
</script>
