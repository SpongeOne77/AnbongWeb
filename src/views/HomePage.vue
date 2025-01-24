<script lang="ts" setup>
import Banner from "@/components/banner/Banner.vue";
import ContactUs from "@/components/contactUs/index.vue";
import Solutions from "@/components/solutions/index.vue";
import Cases from "@/components/cases/index.vue"
import News from "@/components/news/index.vue";
</script>
<template>
  <div>
    <banner></banner>
    <solutions></solutions>
    <cases class="h-180"></cases>
    <news class="h-180 w-full"></news>
    <!--  <advantages></advantages>-->
    <!--  <core-products></core-products>-->
    <contact-us class="h-200"></contact-us>
  </div>
</template>