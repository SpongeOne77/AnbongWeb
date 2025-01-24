<script lang="ts" setup>
</script>
<template>
  <div class="h-38 w-120 bg-white p-5 flex flex-col justify-between">
    <div class="flex justify-between ">
      <div class="items-center">
        <div class="text-slate-500 news_date">D A T E</div>
        <div class="text-10 text-center">30</div>
        <div>2022年11月</div>
      </div>
      <div class="text-wrap flex flex-col justify-center w-80">
        <div class=" font-bold text-lg">严防电动自行车起火!消防"新三件套”成功投入使用</div>
        <div class="news_preview text-slate-500">12月10日，昆山市政府第67次常务会议传达落实了深化重点领域安全生产“六化建设相关文件精神，会议中强调需要加大消防安全"三件套"以及电动自行车停车充电“新三件套"推广使用力度，持续提升本质安全水平，
          连日来，江苏安邦配合昆山开发区安环局组织工作人员对"厂中厂"电动自行车充电棚进行升级，进一步落实"厂中厂"新三件套实体化，提升电动自行车充电事故预警和应急处置能力。
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="bg-blue p">企业资讯</div>
      <div>了解更多 →</div>
    </div>
  </div>
</template>
<style>
.news_preview {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.news_date {
  //transform: scaleX(1.5);
  text-align: center;
  font-stretch: ultra-condensed;
}
</style>