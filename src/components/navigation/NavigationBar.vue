<script lang="ts" setup>
import NavigationButton from '@/components/navigation/NavigationButton.vue';
import { NInput} from 'naive-ui';
import {useRouter} from "vue-router";

const router = useRouter();

const data = [
  {
    title: '首页',
    translation: 'HOME',
    path: '/'
  },
  {
    title: '关于我们',
    translation: 'ABOUTUS',
    path: '/aboutUs'
  },
    {
    title: '解决方案',
    translation: 'SOLUTIONS',
    path: '/solutions'
  },
    {
    title: '应用案例',
    translation: 'LANDING CASES',
    path: '/landingCases'
  },
    {
    title: '新闻资讯',
    translation: 'NEWS',
    path: '/'
  },
    {
    title: '联系我们',
    translation: 'CONTACTUS',
    path: '/'
  }
]

const onSelect = (item, index) => {
  console.log(index);
  router.push({ path: item.path });
}
</script>
<template>
  <div class="bg-white h-20 pl-2 flex justify-between items-center stick-on-top">
    <img class="h-10 ml-5" src="/src/assets/anbong_logo_1.png">
    <div class="flex py-2 justify-center">
      <navigation-button
        v-for="(item, index) in data"
        :title="item.title"
        :subtitle="item.translation"
        @click="onSelect(item, index)"
      ></navigation-button>
    </div>
    <n-input class="mr-5" placeholder="请输入搜索的内容" style="width: 20%">
      <template #suffix>
        搜索
      </template>
    </n-input>
  </div>
</template>
<style lang="css" scoped>
.stick-on-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>