<script setup>
import NewsCard from "./news-card.vue";
</script>

<template>
<div class="news_bg flex flex-col justify-between">
  <div  class="flex justify-center flex-wrap ">
    <news-card v-for="item in 6" class="news_cards"></news-card>
  </div>
  <div class="text-center h-50">
    合作伙伴
  </div>
</div>
</template>

<style lang="css" scoped>
.news_cards {
  margin: 10px 10px;
  :nth-child(2n) {
    margin-right: 0;
  }
  :nth-child(2n-1) {
    margin-left: 0;
  }

}

.news_bg {
  background-color: #f2faff;
}
</style>