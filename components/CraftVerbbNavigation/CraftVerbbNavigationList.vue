<template>
  <ul class="$options.name">
    <CraftVerbbNavigationListItem
      v-for="item in items"
      :key="item.id"
      v-bind="item"
    />
  </ul>
</template>

<script>
export default {
  name: 'CraftVerbbNavigationList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
