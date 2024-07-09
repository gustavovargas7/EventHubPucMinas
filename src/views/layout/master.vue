<template>
  <div class="w-full h-full flex">
    <Sidebar />
    <div class="w-full flex flex-col">
      <HeaderTop />
      <div class="flex-1 overflow-y-auto px-4 py-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue'

export default {
    components: { HeaderTop, Sidebar }
}
</script>

