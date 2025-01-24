<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from "./components/navigation/NavigationBar.vue";
</script>

<template>
<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo_1.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->
  <navigation-bar></navigation-bar>

  <RouterView v-slot="{Component, route}">
    <transition style="overflow: hidden" name="slide-fade" appear mode="out-in" >
      <component :is="Component" :key="route.path"></component>
    </transition>
  </RouterView>
<!--  <home-footer></home-footer>-->
</template>

<style lang="css">
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0.7;
}

body {
  width: 100%;
}
</style>
