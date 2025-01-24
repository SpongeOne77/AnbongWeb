<script lang="ts" setup>
const props = defineProps({
  title: String,
  subtitle: String
})
</script>
<template>
  <div class="w-30 flex items-center justify-center color-black custom">
    <div class="text-center">
      <div class="text-xl">{{ props.title }}</div>
      <div class="text-xs color-gray">{{ props.subtitle }}</div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.custom {
  cursor: pointer;
  transition:
    width 2s,
    height 2s,
    border-color 2s,
    rotate 2s;
  &:hover {
    border-bottom: 4px solid white;
    color: steelblue;
  }
}
</style>