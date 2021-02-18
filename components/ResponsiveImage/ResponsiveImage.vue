<template>
  <nuxt-img
    :alt="alt"
    :src="src"
    :width="width"
    :height="height"
    :sizes="`sm:${sizeSmall} md:${sizeMedium} lg:${sizeLarge}`"
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
      default: 'lg:800px',
    },
  },
}
</script>
