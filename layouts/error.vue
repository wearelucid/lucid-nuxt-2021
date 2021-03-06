<template>
  <main :class="['Page', 'Page--error']">
    <h1 class="Page__title">{{ message }}</h1>
    <p v-if="statusCode === 404">
      <a v-if="typeof $route === 'undefined'" href="/">
        {{ $t('error.backToHome') }}
      </a>
      <NuxtLink v-else :to="localePath('/')">
        {{ $t('error.backToHome') }}
      </NuxtLink>
    </p>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: this.message,
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || this.$i18n.t('error.messageDefault')
    },
  },
}
</script>
