<template>
    <div class="w-full bg-gray-100">
        <div class="flex justify-between items-center w-full h-[50px] pl-0 pr-3 p-2">
            <div class="p-2 sm:w-[60%] md:w-[40%] cursor-pointer" @click="closeSidebar">
                <!-- alocIcons -->
                <nav>
                    <ol id="sideBarItems" class="flex gap-2">
                        <li v-for="item in sideItems" :key="item.id" :href="item.link"
                            class="hover:bg-gray-50 flex w-full sm:gap-4 md:gap-8 gap-3 text-white font-semibold flex justify-center items-center">
                            <a class="items-center w-full hover:rounded-xl p-2 justify-center text-gray-500 flex gap-3cursor-pointer hover:bg-gray-50 hover:text-black"
                                :href="item.link" :title="item.name">
                                <i class="items-center flex icons-sidebar" :class="item.class"></i>
                            </a>
                        </li>
                    </ol>
                </nav>
                <!-- <i class="pi pi-bars bg-red"></i> -->
            </div>
            <!-- <div class="flex">
                <input id="search" name="search" type="search" required
                    class="text-xs outline-none h-[32px] flex-auto rounded-md border-1-solid bg-white/5 px-3.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Search">
            </div> -->
            <div class="flex items-center gap-4 w-[40%] flex-row-reverse">
                <div
                    class="relative w-7 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer hover:bg-gray-50">
                    <svg class="absolute w-9 h-7 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <a class="text-sm text-black max-w-lg" href="/register">Gustavo Vargas</a>
            </div>
        </div>
    </div>
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

<!-- <script>
import { defineComponent } from "vue";
import { closeSidebar } from "../scripts/sidebar";

export default defineComponent({
    methods: {
        closeSidebar
    }
});
</script> -->