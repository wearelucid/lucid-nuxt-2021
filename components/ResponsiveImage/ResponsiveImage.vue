<template>
  <nuxt-img
    v-bind="$props"
    :sizes="`small:${sizeSmall} medium:${sizeMedium} large:${sizeLarge}`"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: 'auto',
    },
    sizeSmall: {
      type: String,
      default: '100vw',
    },
    sizeMedium: {
      type: String,
      default: '50vw',
    },
    sizeLarge: {
      type: String,
      default: '800px',
    },
  },
}
</script>
