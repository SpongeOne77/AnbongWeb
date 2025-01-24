<script lang="ts" setup>
import CommonPage from '@/components/commonPage/index.vue'
const pageConfig = {
  bannerUrl: 'src/assets/banner_2.jpg',
  title: '解决方案',
  translation: 'SOLUTIONS'
}

const data = [
  {
    name: 'AI边缘识别',
    description: 'AI视频分析报警系统是一种基于人工智能技术的智能监控系统，它通过视频分析技术、结合AI计算能力，对视频进行实时分析，一旦‘看’到异常情况，就会立刻发出报警信号，同时逐级推送报警信息到相关人员。\n',
    date: '2024-08-21',
    url: '/src/assets/solution_pic_1.png'
  },
  {
    name: '智慧消防',
    description: '集成通信、控制、电流、电压、漏电、温度及功率监测功能于一体，' +
      '完成对用电线路实时监控、检测、预警、保护，' +
      '广泛应用于通用电源系统、无人值守、输变电站等场景。',
    date: '2024-03-17',
    url: '/src/assets/solution_pic_2.png'
  }
]

const getDay = (date: string):string => {
  return date.slice(8, 10);
}

const getMonth = (date: string):string => {
  return date.slice(0, 7);
}
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
        <div class="text-6 font-bold">解决方案</div>
        <div class="bg-gray-300 h-0.5 w-full my-2"></div>
        <div class="py-5 flex items-center justify-between select-none cursor-pointer solution-card" v-for="(item, index) in data">
          <div class="h-50 w-50 solution-card_picture_container">
            <img class="h-50 w-50 solution-card_picture_inner" :src="`${item.url}`"  alt=""/>
          </div>
          <div class="w-3/5">
            <div class="text-5">{{ item.name }}</div>
            <div class="text-4 text-slate-500 leading-7 truncate-lines">{{ item.description }}</div>
            <div class="mt-5 h-8 w-25 border-solid border-gray flex justify-center items-center solution-card_button">查看详情</div>
          </div>
          <div class="w-30 h-40 bg-slate-200 flex flex-col justify-center items-center solution-card_date">
            <div class="text-12 font-bold">{{ getDay(item.date) }}</div>
            <div>{{ getMonth(item.date) }}</div>
          </div>
        </div>
      </div>
    </div>
  </common-page>
</template>

<style scoped lang="css">
.solution-card {
  border-bottom: 2px solid rgba(161, 161, 169, 0.46);
  .solution-card_date {
    color: #4777d1;
  }
  .solution-card_picture_container {
    display: inline-block;
    overflow: hidden;
  }
  .solution-card_picture_inner {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.5s ease; /* 添加过渡效果 */
  }
  &:hover {
    border-bottom-color: #4777d1;
    .solution-card_button, .solution-card_date {
      background-color: #4777d1;
      color: white;
      border-color: #4777d1;
    }
    .solution-card_picture_inner {
      transform: scale(1.1);
    }
  }
}
</style>