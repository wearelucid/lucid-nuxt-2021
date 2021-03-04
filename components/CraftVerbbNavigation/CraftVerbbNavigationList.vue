<template>
  <ul :class="$options.name">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'CraftVerbbNavigationList',
}
</script>
