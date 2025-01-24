<script setup lang="ts">
import {NCarousel} from 'naive-ui'
</script>
<template>
  <n-carousel>
    <div class="carousel-img" style="background-image: url('/src/assets/banner_1.jpg')">
      safsadf
    </div>

    <img
      class="carousel-img"
      src="/src/assets/banner_2.jpg"
      alt=""
    />
  </n-carousel>
</template>
<style lang="css" scoped>
.carousel-img {
  width: 100%;
  height: 700px;
  object-fit: cover;
}
</style>