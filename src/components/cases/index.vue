<script setup>
import {NCarousel, NCarouselItem} from 'naive-ui'

const description = '目前企业业务已在国内外制造业、银行业、企事业客户成功落地，包括昆山市消安办、昆山市应急管理局；并在本地已成功签约多家企业，包括六和轻合金(昆山)有限公司、盛旺汽车零部件（昆山）有限公司、丰田工业（昆山）有限公司、昆山统一企业食品公司、台庆精密电子（昆山）有限公司、台玻长江玻璃有限公司、竞陆电子（昆山)公司等。另外还有多家国际知名企业，包括中国花旗银行、中国渣打银行、日本西科姆等多家企业';

</script>
<template>
  <div class="w-full case_bg flex justify-center items-center">
    <div class="w-4/5 flex flex-col justify-center items-center">
      <div class="text-white text-base">{{ description }}</div>
      <n-carousel
        :slides-per-view="3"
        :space-between="20"
        autoplay
        show-arrow
      >
        <n-carousel-item v-for="(item, index) in 6" class="my-10">
          <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
          <div class="bg-white h-8 text-center">xxxxxx项目</div>
        </n-carousel-item>
      </n-carousel>
      <div>
        <div class="h-10 w-30 bg-blue-500 flex justify-center items-center rounded color-white btn">查看更多</div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.case_bg {
  overflow: hidden;
  background-color: transparent;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/solution_bg_2.jpg");
    background-size: cover;
    background-position: center;
    z-index: -1;
    -webkit-filter: brightness(50%); /* Chrome, Safari, Opera */
    filter: brightness(50%);
  }
}

.carousel-img {
  height: 240px;
  object-fit: cover;
}
.btn {
  cursor: pointer;
  user-select: none;
}
</style>/