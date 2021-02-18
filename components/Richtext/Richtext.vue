<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span class="richtext" v-html="content" />
</template>

<script>
export default {
  name: 'Richtext',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style src="./Richtext.scss" lang="scss" scoped />
