<template>
  <div>
    <ThePreviewIndicator v-if="$nuxt.isPreview" />
    <TheCraftNavigation />
    <Nuxt />
    <TheFooter />
  </div>
</template>
