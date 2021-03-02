<template>
  <header>
    <ThePreviewIndicator v-if="$nuxt.isPreview" />
    <TheCraftNavigation />
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>
