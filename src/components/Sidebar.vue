<template>
  <div></div>
  <!-- <div class="container-sidebar h-screen w-[300px] bg-gray-800">
    <div class="flex items-center bg-gray-700 h-[50px] w-full">
      <div class="align-center text-xl text-white font-semibold text-center w-full">
        Event Hub
      </div>
    </div>
    <div class="items flex flex-col gap-4">
      <div class="user h-[100px] flex justify-center items-center p-2">
        <div
          class="profile relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer hover:bg-gray-50">
          <svg class="svg absolute w-20 h-20 text-gray-400 -left-0 top-2" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
            </path>
          </svg>
        </div>
      </div>
      <hr class="border-gray-600">
      <ol id="sideBarItems" class="flex gap-2 flex-col">
        <li v-for="item in sideItems" :key="item.id"
          class="p-2 flex w-full gap-3 text-white font-semibold cursor-pointer hover:bg-gray-50 hover:text-black">
          <a class="items-center flex gap-3 w-full" :href="item.link">
            <i class="items-center flex icons-sidebar" :class="item.class"></i>
            <span class="options-sidebar text-base">{{ item.name }}</span>
          </a>
        </li>
      </ol>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      sideItems: []
    };
  },
  mounted() {
    this.sideItems = [
      { id: 1, name: 'Home', link: '/', class: 'pi pi-home' },
      { id: 2, name: 'Meus ingressos', link: '/tickets', class: 'pi pi-ticket' },
      { id: 4, name: 'Sobre', link: '/about', class: 'pi pi-info-circle' },
    ];
  },
};
</script>

<style>
i {
  display: flex !important;
  align-items: center !important;
  justify-content: center;
}

.icons-sidebar {
  font-size: 1.4rem !important;
}
</style>
