<template>
  <div>
    <ThePreviewIndicator v-if="$nuxt.isPreview" />
    <Nuxt />
  </div>
</template>
