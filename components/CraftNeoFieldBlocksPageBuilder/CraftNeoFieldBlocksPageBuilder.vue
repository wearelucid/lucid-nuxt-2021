<template>
  <div :class="$options.name">
    <div v-for="item in items" :key="item.id" :class="`${$options.name}__item`">
      <BaseSection
        v-if="item.typeHandle === 'pbSection'"
        :title="item.baseTitle"
      >
        <BaseRichtext v-if="item.baseRichtext" :content="item.baseRichtext" />
      </BaseSection>

      <code v-if="item.typeHandle === 'pbImage'">
        PageBuilder Images temporarily disabled because of nginx config not
        ready yet
      </code>
      <!-- <NuxtImg
        v-if="item.typeHandle === 'pbImage'"
        :alt="item.baseImage[0].title"
        :src="item.baseImage[0].url"
        sizes="initial:100vw small:50vw medium:500px large:768px"
        loading="lazy"
      /> -->

      <CraftTypedLinkField
        v-if="item.typeHandle === 'pbLink' && item.baseLink"
        v-bind="item.baseLink"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CraftNeoFieldBlocksPageBuilder',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
