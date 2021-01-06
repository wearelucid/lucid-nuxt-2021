<template>
  <button :class="btnClass">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    round: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
    },
    text: {
      type: String,
      default: 'Button',
    },
  },
  computed: {
    btnClass() {
      const classes = []
      if (this.round) {
        classes.push('rounded')
      }
      if (this.type === 'primary') {
        classes.push('color-primary')
      } else if (this.type === 'secondary') {
        classes.push('color-secondary')
      }
      return classes.join(' ')
    },
  },
}
</script>

<style scoped>
.rounded {
  border-radius: 0.5em;
}
.color-primary {
  background-color: blue;
}
.color-secondary {
  background-color: red;
}
</style>
