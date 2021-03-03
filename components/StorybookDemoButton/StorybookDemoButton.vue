<template>
  <button :class="btnClass">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    rounded: {
      type: Boolean,
      default: true,
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
      const classes = ['demo-button']
      if (this.rounded) {
        classes.push('rounded')
      }
      if (this.type === 'primary') {
        classes.push('primary')
      } else if (this.type === 'secondary') {
        classes.push('secondary')
      }
      return classes.join(' ')
    },
  },
}
</script>

<style lang="scss" scoped>
.demo-button {
  &:not(.rounded) {
    border-radius: 0;
  }

  &.secondary {
    background: $color-secondary;
    border-color: $color-secondary;

    @include on-event {
      background: $color-light;
      color: $color-secondary;
    }
  }
}
</style>
