<script lang="ts" setup>
</script>
<template>
  <div class="text-white h-60 w-50 core-product-item_outer flex-col flex justify-between">
    <div>
      <div class="core-product-item_title text-base">产品优势</div>
      <div class="text-xs leading-relaxed core-product-item_content">MAI到大数据,从金陆到公众号,
        公司提供最新、最全的产品支持从
        WEP端到移动端,从小程序APP,
        移可以满足用户在任何地方的用
        求,不断提升的技术、不断优化的
        体验、不断扩展的产品是我们最大
        的市场竞争力
      </div>
    </div>
    <div class="text-xs core-product-item_detail">查看详情 >></div>
  </div>
</template>
<style lang="css" scoped>
.core-product-item_outer {
  background-color: white;
  padding: 30px 20px 30px 20px;
  color: black;
  cursor: pointer;
  &:hover {
    transition-duration: 0.3s;
    background-color: dodgerblue;
    .core-product-item_title {
      color: white;
      &::after {
        background-color: white;
      }
    }
    .core-product-item_content {
      color: white;
    }
    .core-product-item_detail {
      color: white;
    }
  }
}

.core-product-item_title {
  color: black;
  &::after {
    content: '';
    width: 18px;
    height: 2px;
    display: block;
    margin: 16px 0 16px 0;
    background-color: royalblue;
  }
}

.core-product-item_content {
  color: gray;
}

.core-product-item_detail {
  color: dodgerblue;
}

</style>