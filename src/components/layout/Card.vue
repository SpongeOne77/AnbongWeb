<script lang="ts" setup>

defineProps<{
  bgColor?: string,
  bgImg?: string,
  title?: boolean
}>();
</script>
<template>
  <div :style="`padding: 40px 100px 40px 100px; background-color: ${bgColor || 'white'}`">
    <div v-if="title === true" class="text-2xl pb-10">
      <slot name="title"></slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>