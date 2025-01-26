<script lang="ts" setup>
import CommonPage from '@/components/commonPage/index.vue'
const pageConfig = {
  bannerUrl: 'src/assets/banner_2.jpg',
  title: '应用案例',
  translation: 'LANDING CASES'
}

const data = [
  {
    name: '鼎镁新材料股份有限公司智能AI生产建设项目',
    url: '/src/assets/solution_icon_1.jpg'
  },
  {
    name: '富士和机械有限公司二道门智能管控系统',
    url: '/src/assets/solution_icon_1.jpg'
  },
  {
    name: '鼎镁新材料股份有限公司智能AI生产建设项目',
    url: '/src/assets/solution_icon_1.jpg'
  },
  {
    name: '富士和机械有限公司二道门智能管控系统',
    url: '/src/assets/solution_icon_1.jpg'
  },
  {
    name: '鼎镁新材料股份有限公司智能AI生产建设项目',
    url: '/src/assets/solution_icon_1.jpg'
  },
  {
    name: '富士和机械有限公司二道门智能管控系统',
    url: '/src/assets/solution_icon_1.jpg'
  },
  {
    name: '鼎镁新材料股份有限公司智能AI生产建设项目',
    url: '/src/assets/solution_icon_1.jpg'
  },
  {
    name: '富士和机械有限公司二道门智能管控系统',
    url: '/src/assets/solution_icon_1.jpg'
  },
  {
    name: '鼎镁新材料股份有限公司智能AI生产建设项目',
    url: '/src/assets/solution_icon_1.jpg'
  },
  {
    name: '富士和机械有限公司二道门智能管控系统',
    url: '/src/assets/solution_icon_1.jpg'
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
        <div class="h-20 bg-blue-500 text-white text-6 font-bold flex justify-center items-center">{{ pageConfig.title }}</div>
        <div class="h-15 bg-gray-200 text-4 flex justify-center items-center cursor-pointer">
          方案展示
        </div>
        <div class="h-10 bg-gray-200">
        </div>
      </div>
      <div class="w-230">
        <div class="text-6 font-bold">应用案例</div>
        <div class="bg-gray-300 h-0.5 w-full my-2"></div>
        <div class="py-5 flex case-container">
          <div class="h-45 w-50 flex flex-col justify-between" v-for="(item, index) in data">
            <div class="overflow-hidden">
              <img class="h-30 w-50 case-icon-item_picture" :src="`${item.url}`"  alt=""/>
            </div>
            <div class="case-icon-item_name text-slate-500">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </common-page>
</template>

<style scoped lang="css">
.case-container {
  flex-wrap: wrap;
  gap: 10px;
  .case-icon-item_picture {
    overflow: hidden;
    display: block;
    transition: transform 1s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>