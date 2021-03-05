<template>
  <div :class="$options.name">
    <div v-for="item in items" :key="item.id" :class="`${$options.name}__item`">
      <BaseSection
        v-if="item.__typename === 'pageBuilder_pbSection_BlockType'"
        :title="item.baseTitle"
      >
        <BaseRichtext v-if="item.baseRichtext" :content="item.baseRichtext" />
      </BaseSection>

      <NuxtImg
        v-if="item.__typename === 'pageBuilder_pbImage_BlockType'"
        :alt="item.baseImage[0].title"
        :src="item.baseImage[0].url"
        sizes="initial:100vw small:50vw medium:500px large:768px"
      />

      <CraftTypedLinkField
        v-if="
          item.__typename === 'pageBuilder_pbLink_BlockType' && item.baseLink
        "
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
