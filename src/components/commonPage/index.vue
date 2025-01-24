<script lang="ts" setup>
defineProps<{
  bannerUrl: string;
  title: string;
  translation?: string;
  path?: string;
}>()

</script>
<template>
  <div>
    <div class="h-110 w-full relative" :style="{backgroundImage: `url(${bannerUrl})`, backgroundSize: 'cover'}">
      <div class="text-white absolute bottom-0 left-0 h-40 w-40 p-10 text-8">{{ title }}<br>{{ translation }}</div>
      <div>{{ path }}</div>
    </div>
    <div>
      <slot></slot>
    </div>
    <div>

    </div>
  </div>
</template>
<style scoped></style>