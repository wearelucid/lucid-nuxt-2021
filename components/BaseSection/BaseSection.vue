<template>
  <section :class="$options.name">
    <h2 v-if="title" :class="`${$options.name}__title`">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'BaseSection',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
