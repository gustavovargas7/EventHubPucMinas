<template>
    <div id="app">
      <router-view/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'App',
  });
  </script>

  <style scoped>
  html,
  body,
  #app {
    height: 100%;
  }

  #app {
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>