<template>
  <div class="md:h-full md:w-full flex">
    <Sidebar />
    <div class="md:w-full h-screen">
      <AddTodos />
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import AddTodos from "./AddTodos.vue";

export default {
  name: "Todos",

  components: {
    Sidebar,
    AddTodos
  },
};
</script>

<style>
</style>