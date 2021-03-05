<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span :class="$options.name" v-html="content" />
</template>

<script>
export default {
  name: 'BaseRichtext',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style src="./BaseRichtext.scss" lang="scss" scoped />
