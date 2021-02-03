<template>
  <div>
    <ThePreviewIndicator v-if="$nuxt.isPreview" />
    <TheNavigation />
    <Nuxt />
    <TheFooter />
  </div>
</template>
