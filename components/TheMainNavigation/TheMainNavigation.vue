<template>
  <nav id="main-navigation" :class="$options.name">
    <CraftVerbbNavigation nav-handle="mainNav" />
  </nav>
</template>

<script>
export default {
  name: 'TheMainNavigation',
}
</script>

<style src="./TheMainNavigation.scss" lang="scss" scoped />
