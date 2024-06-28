<template>
    <div class="flex justify-center flex-col items-center">
        <Carousel :currentIndex="currentIndex" :slides="slides" @prev="prevSlide" @next="nextSlide" />
        <cardEvent v-for="" :key=""/>
    </div>
</template>

<script>
import Carousel from '../../components/Carousel.vue';
import cardEvent from '@/components/cardEvent.vue';
import imgCruCsa from '../img/csaxcruzeiro.jpg';
import imgThiaguinho from '../img/thiaguinho.webp';
import imgTrintaPraUm from '../img/30praum.jpg';

export default {
    components: {
        Carousel,
        cardEvent
    },
    data() {
        return {
            currentIndex: 0,
            slides: [
                { image: imgCruCsa },
                { image: imgThiaguinho },
                { image: imgTrintaPraUm }
            ], 
            arrayEvents: [
                urlImg: imgCruCsa,
                date: 'QUA, 03 JUL',
                hour: '21:30',
                nameEvent: 'ATLÉTICO MG x FLAMENGO | Campeonato Brasileiro',
                localEvent: 'ArenaMRV - MG',
            ]
        };
    },
    methods: {
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        }
    }
};
</script>
