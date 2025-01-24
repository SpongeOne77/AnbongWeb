<script lang="ts" setup>
import Card from "@/components/layout/Card.vue";
</script>
<template>
  <card>
    <template v-slot:content>
      <div class="product-outer">
        <div v-for="item in 6" class="product-item text-center flex flex-col justify-between">
          <div class="text-lg font-bold">大数据采集</div>
          <div class="flex justify-center">
            <div class="h-20 w-20 bg-red"></div>
          </div>
          <div class="text-sm text-center text-gray-500">通过大数据为怎打造专民的文章素材库,同时
            提供公众号分析、智能编辑器等工具助您轻松
            运营公众号
          </div>
        </div>
      </div>
    </template>
  </card>
</template>
<style lang="css" scoped>
.product-outer {
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  background-color: white;
  justify-content: space-between;
}

.product-item {
  width: calc((100% - 100px) / 3);
  height: 220px;
  padding: 30px 0 30px 30px;
  background-color: white;
  &:nth-child(3n - 2) {
    padding-left: 0;
  }
  &:nth-child(3n) {
    padding-right: 0;
  }
}
</style>