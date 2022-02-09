<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <transition name="slide" mode="in-out">
          <router-view></router-view>
      </transition>
    </div>
  </div>
</template> 

<script>
export default {
  name: "Auth",
};
</script>
<style scoped>
  .slide-enter-active, 
  .slide-leave-active {
    transition: opacity 1.5s, transform 1s;
  }

  .slide-enter, 
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-0%);
  }

</style>
