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
// TODO: The vue-link comes with the option to add or remove trailing slashes
import { ForNuxt } from 'vue-link'
import { getPathFromUrl } from '@wearelucid/vuecid-helpers'

export default {
  components: {
    'vue-link': ForNuxt,
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
  methods: {
    getPathFromUrl: (url) => getPathFromUrl(url),
  },
}
</script>
