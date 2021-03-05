<template>
  <header :class="$options.name">
    <ThePreviewIndicator v-if="$nuxt.isPreview" />
    <TheMainNavigation />
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>
