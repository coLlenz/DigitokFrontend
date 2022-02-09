<template>
  <div class="h-screen">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "App",
  // components: {
  //   Login,
  // },
};
</script>

<style>
</style>
