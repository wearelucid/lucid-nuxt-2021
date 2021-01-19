<template>
  <div>
    <the-preview-indicator v-if="$nuxt.isPreview" />
    <Nuxt />
  </div>
</template>
