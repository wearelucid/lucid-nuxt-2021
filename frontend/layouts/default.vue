<template>
  <div>
    <ThePreviewIndicator v-if="$nuxt.isPreview" />
    <Nuxt />
    <TheFooter />
  </div>
</template>
