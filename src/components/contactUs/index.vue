<script setup lang="ts">
</script>
<template>
  <div class="about-us_outer">
    <div class="h-60 about-us_inner text-white flex justify-between p-5">
      <div>
        <div class="text-8">CONTACT</div>
        <div class="text-xl">联系我们</div>
        <div> - </div>
        <div class="text-lg">公司地址：江苏省苏州市昆山开发区前进东路科技广场701室</div>
        <div class="text-lg">热线电话：xxxx xxxxx</div>
      </div>
      <div>
        <div class="text-8">联系电话</div>
        <div class="text-xl">xxxxxxxxxxxx</div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<style scoped lang="css">
.about-us_outer {
  background-color: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("src/assets/banner_2.jpg");
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
}
.about-us_inner {
  background-color: transparent;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #153457;
    opacity: 0.6;
    -webkit-filter: brightness(50%); /* Chrome, Safari, Opera */
    filter: brightness(50%);
  }
}
</style>