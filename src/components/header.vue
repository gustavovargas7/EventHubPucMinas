<template>
    <div class="w-full bg-gray-100">
        <div class="flex justify-between items-center h-[50px] pl-0 pr-3 p-2">
            <div class="p-4 cursor-pointer hover:bg-gray-50" @click="closeSidebar">
                <i class="pi pi-bars bg-red"></i>
            </div>
            <!-- <div class="flex">
                <input id="search" name="search" type="search" required
                    class="text-xs outline-none h-[32px] flex-auto rounded-md border-1-solid bg-white/5 px-3.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Search">
            </div> -->
            <div class="flex items-center gap-4">
                <p class="text-sm text-black max-w-lg">Gustavo Vargas</p>
                <div
                    class="relative w-7 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer hover:bg-gray-50">
                    <svg class="absolute w-9 h-7 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { closeSidebar } from "../scripts/sidebar";

export default defineComponent({
    methods: {
        closeSidebar
    }
});
</script>