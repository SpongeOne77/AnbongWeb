<script lang="ts" setup>
import CoreProductItem from "@/components/products/CoreProductItem.vue";
import Card from "@/components/layout/Card.vue";

</script>
<template>
  <card bg-color="lightgray">
    <template v-slot:title>
      核心产品
    </template>
    <template v-slot:content>
      <div class="flex">
        <core-product-item class="mr-4" v-for="item in 4"></core-product-item>
      </div>
    </template>
  </card>
</template>