<template>
    <div class="sm:max-w-[90%] carousel p-4 relative shadow-md rounded-xl md:max-w-[50%]">
        <div class="overflow-hidden relative">
            <div class="carousel-slide flex transition-transform duration-300 ease-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0 carousel-item">
                    <img :src="slide.image" :alt="'Slide ' + (index + 1)" class="w-full h-full rounded-xl">
                </div>
            </div>
        </div>
        <div @click="prevSlide"
            class="cursor-pointer carousel-prev absolute rounded-full top-1/2 transform -translate-y-1/2 -left-6 bg-gray-800 text-white w-[36px] h-[36px] font-bold shadow-md p-2 flex items-center justify-center">
            <span class="pi pi-angle-double-left"></span>
        </div>
        <div @click="nextSlide"
            class="cursor-pointer carousel-next absolute rounded-full top-1/2 transform -translate-y-1/2 -right-6 bg-gray-800 text-white w-[36px] h-[36px] font-bold shadow-md p-2 flex items-center justify-center">
            <span class="pi pi-angle-double-right"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: {
        currentIndex: Number,
        slides: Array
    },
    methods: {
        prevSlide() {
            this.$emit('prev');
        },
        nextSlide() {
            this.$emit('next');
        }
    }
};
</script>

<style scoped>
.carousel-slide {
    width: 100%;
}

.carousel-item {
    width: 100%;
}

.carousel-prev,
.carousel-next {
    top: 50%;
    transform: translateY(-50%);
}
</style>
