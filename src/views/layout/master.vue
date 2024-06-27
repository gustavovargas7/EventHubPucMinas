<template>
  <div class="w-full h-full flex">
    <sidebar />
    <div class="w-full flex flex-col">
      <headerTop />
      <div class="flex-1 overflow-y-auto px-4 py-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from '../../components/header.vue'
import sidebar from '../../components/sidebar.vue'

export default {
    components: { headerTop, sidebar }
}
</script>

