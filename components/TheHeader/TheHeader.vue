<template>
  <header>
    <ThePreviewIndicator v-if="$nuxt.isPreview" />
    <TheMainNavigation />
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>
