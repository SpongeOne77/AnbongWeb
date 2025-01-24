<script setup>
import {ref} from "vue";

const solutions = [
  {
    index: 1,
    title: '智慧用电',
    description: '面向电力需求侧的智慧用电产品,通过对用电设备的实时监测和控制，实现节能减排的效果。\n' +
      '例如，通过智能控制空调、照明等设备的开关时间、温度和\n' +
      '亮度的调整，可以有效地减少能源的浪费，降低二氧化碳的\n' +
      '排放量 ',
  }, {
    index: 2,
    title: '安防三件套',
    description: 'dklsafhjdsahfjasdhdflasjhflkdjnfklahjdifajsldkfhasdofhalsjkdhjfadklsafhjdsahfjasdhdflasjhflkdjnfklahjdifajsldkfhasdofhalsjkdhjfadklsafhjdsahfjasdhdflasjhflkdjnfklahjdifajsldkfhasdofhalsjkdhjfa',
  }, {
    index: 3,
    title: '智能管控系统',
    description: 'dklsafhjdsahfjasdhdflasjhflkdjnfklahjdifajsldkfhasdofhalsjkdhjfadklsafhjdsahfjasdhdflasjhflkdjnfklahjdifajsldkfhasdofhalsjkdhjfadklsafhjdsahfjasdhdflasjhflkdjnfklahjdifajsldkfhasdofhalsjkdhjfa',
  }, {
    index: 4,
    title: '安防8+1',
    description: 'dklsafhjdsahfjasdhdflasjhflkdjnfklahjdifajsldkfhasdofhalsjkdhjfadklsafhjdsahfjasdhdflasjhflkdjnfklahjdifajsldkfhasdofhalsjkdhjfadklsafhjdsahfjasdhdflasjhflkdjnfklahjdifajsldkfhasdofhalsjkdhjfa',
  }, {
    index: 5,
    title: '搬运机器人',
    description: 'dklsafhjdsahfjasdhdflasjhflkdjnfklahjdifajsldkfhasdofhalsjkdhjfa',
  },
];

const curIndex = ref(1);
const curItem = ref(null);

curItem.value = solutions[curIndex.value - 1];

const onHoverTag = (item, index) => {
  curIndex.value = index + 1;
  curItem.value = item;
}
</script>
<template>
  <div class="h-180 w-full solution_bg">
    <div class="h-4/5 flex items-center justify-center">
      <div class="w-60">
        <div class="text-15 text-end text-blue-500">{{curIndex}}/{{ solutions.length || 0}}</div>
        <div class="text-8 text-center">
          solution
          <br>
          解决方案
          <br>
          foo bar
        </div>
      </div>
      <div class="h-60 w-60 bg-green-100 rounded mx-25" style="background-image: url('/src/assets/solution_icon_1.jpg')"></div>
      <div class="w-60 flex flex-col justify-between">
        <div class="text-8">{{ curItem.title }}</div>
        <div class="solution_description">{{ curItem.description }}</div>
        <div class="h-10 w-40 bg-blue flex justify-center items-center text-white ">查看更多</div>
      </div>
    </div>
    <div class="flex justify-center">
      <div @mouseover="onHoverTag(item, index)" v-for="(item, index) in solutions" class="solution_tag">{{ item.title }}</div>
    </div>
  </div>
</template>
<style scoped>
.solution_tag {
  width: 200px;
  align-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    color: #4777d1;
    cursor: pointer;
  }
}

.solution_description {
  color: #a1a1a9;
  word-wrap: break-word;
  margin: 20px 0;
}

.solution_bg {
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
    background-image: url("/src/assets/solution_bg_3.jpg");
    background-size: cover;
    background-position: center;
    //opacity: 0.2;
    z-index: -1;
  }
}
</style>