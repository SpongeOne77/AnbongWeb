<script lang="ts" setup>
import CommonPage from '@/components/commonPage/index.vue'
const pageConfig = {
  bannerUrl: 'src/assets/banner.png',
  title: '关于我们',
  translation: 'ABOUTUS'
}

const data = [
  {
    title: '公司简介',
    profile: '江苏安邦信息技术服务公司是在昆山成立的一家从事 智改数转（智能安防、智慧消防、智慧用电、智慧养老、视频压缩、绿色能耗） 等业务的新型智能化科技公司。通过AI、人工智能、物联网及传感器技术，为客户提供“云-网 -端 ”全方位的信息架构，为政府、企业、制造业、银行、新零售等各个领域提供专业化、智能化、信息化的综合解决方案。\n目前企业业务已在国内外制造业、银行业、企事业客户成功落地，包括昆山市消安办、昆山市应急管理局；并在本地已成功签约多家企业，包括六和轻合金(昆山)有限公司、盛旺汽车零部件（昆山）有限公司、丰田工业（昆山）有限公司、昆山统一企业食品公司、台庆精密电子（昆山）有限公司、台玻长江玻璃有限公司、竞陆电子（昆山)公司等。另外还有多家国际知名企业，包括中国花旗银行、中国渣打银行、日本西科姆等多家企业。\n'
  }
]
</script>

<template>
  <common-page
    :bannerUrl='pageConfig.bannerUrl'
    :title='pageConfig.title'
    :translation='pageConfig.translation'
  >
    <div class="p-8 flex justify-between">
      <div class="w-60">
        <div class="h-20 bg-blue-500 text-white text-6 flex justify-center items-center">{{ pageConfig.title }}</div>
        <div class="h-15 bg-gray-200 text-4 flex justify-center items-center cursor-pointer">
          {{ data[0].title }}
        </div>
        <div class="h-10 bg-gray-200">
        </div>
      </div>
      <div class="w-230">
        <div class="text-8">{{ data[0].title }}</div>
        <div class="bg-gray-300 h-0.5 w-full my-2"></div>
        <div class="text-4 text-slate-500 leading-7">{{ data[0].profile }}</div>
      </div>
    </div>
    <div></div>
  </common-page>
</template>

<style scoped>
</style>