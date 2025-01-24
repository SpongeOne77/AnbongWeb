<script lang="ts" setup>
import Card from "@/components/layout/Card.vue";

const footerInfo = [
  {
    title: '关于我们',
    items: [
      {
        itemName: '免责申明',
        url: ''
      },
      {
        itemName: '帮助中心',
        url: ''
      }
    ]
  },
  {
    title: '相关产品',
    items: [
      {
        itemName: '智慧用电',
        url: '',
      },
      {
        itemName: '二道门智能管控系统',
        url: ''
      }
    ]
  },
  {
    title: '品牌优势',
    items: [
      {
        itemName: '优势1',
      },
      {
        itemName: '优势2',
      }
    ]
  },
  {
    title: '在线客服',
    items: [
      {
        itemName: '电话：xxxxxxxxxxx',
      },
      {
        itemName: '9小时尊贵服务',
      },
      {

        itemName: '工作日早上9:00 - 下午5:30',
      }
    ]
  }

]
</script>
<template>
  <div class="w-full h-70 bg-slate-800 py-5 text-white">
    <card bg-color="transparent" :title="false">
      <template v-slot:content>
        <div class="flex justify-between text-white">
          <div v-for="item in footerInfo">
            {{ item.title }}
            <div class="mt-5">
              <div class="text-xs text-gray-400" v-for="suItem in item.items">
                {{ suItem.itemName }}
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 bg-gray-400 h-px w-full"></div>
      </template>
    </card>
    <div class="text-xs text-white text-center">安邦版权所有</div>
  </div>
</template>
<style scoped lang="css">
</style>