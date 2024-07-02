<template>
    <div class="flex justify-center flex-col items-center gap-4 p-2">
        <p class="text-center text-xl font-semibold">Destaques: </p>
        <div class="flex justify-center flex-col items-center">
            <Carousel :currentIndex="currentIndex" :slides="slides" @prev="prevSlide" @next="nextSlide" />
        </div>
        <div class="w-full flex flex-row p-2 font-semibold text-xl">
            <p class="">Eventos mais preocurados: </p>
        </div>
        <div class="grid gap-2 md:grid-cols-5 w-full p-2 sm:justify-center sm:grid-cols-1 sm:justify-items-center">
            <cardEvent v-for="event in arrayEvent" :key="event.id" :DataEvent="event" />
        </div>
        <div class="w-full flex flex-row p-2 font-semibold text-xl">
            <p class="">Ingressos de futebol: </p>
        </div>
        <div class="grid gap-2 md:grid-cols-5 w-full p-2 sm:justify-center sm:grid-cols-1 sm:justify-items-center">
            <cardEvent v-for="event in filterFutebol" :key="event.id" :DataEvent="event" />
        </div>
        <div class="w-full flex flex-row p-2 font-semibold text-xl">
            <p class="">Mais shows: </p>
        </div>
        <div class="grid gap-2 md:grid-cols-5 w-full p-2 sm:justify-center sm:grid-cols-1 sm:justify-items-center">
            <cardEvent v-for="event in filterShow" :key="event.id" :DataEvent="event" />
        </div>
    </div>
</template>

<script>
//Components
import Carousel from '../../components/Carousel.vue';
import cardEvent from '@/components/cardEvent.vue';
//Imagens
import imgCruCsa from '../img/csaxcruzeiro.jpg';
import imgThiaguinho from '../img/thiaguinho.webp';
import imgTrintaPraUm from '../img/30praum.jpg';
import imgPalxCor from '../img/palmeirasxcorinthias.png';
import imgRestart from '../img/restart.webp';
import imgSemanaRock from '../img/semanarock.jpg';
import imgAnaCastela from '../img/anacastela.png';
import imgCsaCru from '../img/csaxcruzeiro.jpg';
import imgFabioJr from '../img/fabioJr.png';
import imgGaloXfla from '../img/galoxflamengo.webp';
import imgCeaFort from '../img/for-cea.jpg';


export default {
    components: {
        Carousel,
        cardEvent,
    },
    data() {
        return {
            currentIndex: 0,
            slides: [
                { image: imgCruCsa },
                { image: imgThiaguinho },
                { image: imgTrintaPraUm }
            ],
            arrayEvent: [
                {
                    urlImg: imgTrintaPraUm,
                    date: 'SAB, 20 JUL',
                    hour: '00:00',
                    nameEvent: '30PraUm | STAGE MUSICPARK',
                    localEvent: 'JURERÉ - FLORIANOPÓLIS SC',
                    type: 'Show',
                },
                {
                    urlImg: imgThiaguinho,
                    date: 'DOM, 06 JUL',
                    hour: '23:00',
                    nameEvent: 'Thiaguinho | Espaço Unimed',
                    localEvent: 'Espaço Unimed - SP',
                    type: 'Show',
                },
                {
                    urlImg: imgAnaCastela,
                    date: 'QUI, 13 JUL',
                    hour: '21:30',
                    nameEvent: 'ANA CASTELA | EXPOAGRO',
                    localEvent: 'ANÁPOLIS - GO',
                    type: 'Show',
                },
                {
                    urlImg: imgPalxCor,
                    date: 'DOM, 07 JUL',
                    hour: '16:00',
                    nameEvent: 'PALMEIRAS MG x CORINTHIANS | Campeonato Brasileiro',
                    localEvent: 'AlianzArena - SP',
                    type: 'Futebol',
                },
                {
                    urlImg: imgRestart,
                    date: 'SAB, 20 JUL',
                    hour: '11:00',
                    nameEvent: 'RESTART | TOUR PARA VOCÊ LEMBRA',
                    localEvent: 'RIBEIRÃO PRETO - SP',
                    type: 'Show',
                },
                {
                    urlImg: imgCeaFort,
                    date: 'DOM, 07 JUL',
                    hour: '20:00',
                    nameEvent: 'FORTALEZA CE x CEARÁ | Campeonato Brasileiro',
                    localEvent: 'Arena Castelão - CE',
                    type: 'Futebol',
                },
                {
                    urlImg: imgSemanaRock,
                    date: 'SAB, 06 JUL',
                    hour: '21:30',
                    nameEvent: 'SLASH | SEMANA DO ROCK',
                    localEvent: 'Mineirão - MG',
                    type: 'Show',
                },
                {
                    urlImg: imgGaloXfla,
                    date: 'QUA, 03 JUL',
                    hour: '21:30',
                    nameEvent: 'ATLÉTICO MG x FLAMENGO | Campeonato Brasileiro',
                    localEvent: 'ArenaMRV - MG',
                    type: 'Futebol',
                },
                {
                    urlImg: imgFabioJr,
                    date: 'SAB, 06 JUL',
                    hour: '20:30',
                    nameEvent: 'FÁBIO JR',
                    localEvent: 'MORUMBI - SP',
                    type: 'Show',
                },
                {
                    urlImg: imgCsaCru,
                    date: 'QUA, 03 JUL',
                    hour: '21:30',
                    nameEvent: 'CRUZEIRO MG x CSA | Campeonato Brasileiro',
                    localEvent: 'UNDEFINED :(',
                    type: 'Futebol',
                },
            ],
        };
    },
    computed: {
        filterFutebol() {
            return this.arrayEvent.filter(event => event.type === 'Futebol');
        },
        filterShow() {
            return this.arrayEvent.filter(event => event.type === 'Show');
        },
        filterMostWoried() {
            return this.arrayEvent.filter(event => event.type === 'Show');
        },
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
