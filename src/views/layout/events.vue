<template>
    <div>
        <p class="text-lg">Mais vistos:</p>
    </div>
    <div class="container-aloc-cards w-full flex flex-wrap justify-center gap-2 min-h-40">
        <cardEvent v-for="event in arrayEvent" :key="event" :DataEvent="event" />
    </div>
    <div class="container-aloc-cards w-full flex flex-wrap justify-center gap-2 min-h-40">
        <cardEvent v-for="event in arrayEvent" :key="event" :DataEvent="event" />
    </div>
    <div class="container-aloc-cards w-full flex flex-wrap justify-center gap-2 min-h-40">
        <cardEvent v-for="event in arrayEvent" :key="event" :DataEvent="event" />
    </div>
    <div class="container-aloc-cards w-full flex flex-wrap justify-center gap-2 min-h-40">
        <cardEvent v-for="event in arrayEvent" :key="event" :DataEvent="event" />
    </div>
    <div class="container-aloc-cards w-full flex flex-wrap justify-center gap-2 min-h-40">
        <cardEvent v-for="event in arrayEvent" :key="event" :DataEvent="event" />
    </div>
    <div class="container-aloc-cards w-full flex flex-wrap justify-center gap-2 min-h-40">
        <cardEvent v-for="event in arrayEvent" :key="event" :DataEvent="event" />
    </div>
    <div class="container-aloc-cards w-full flex flex-wrap justify-center gap-2 min-h-40">
        <cardEvent v-for="event in arrayEvent" :key="event" :DataEvent="event" />
    </div>
    <div class="container-aloc-cards w-full flex flex-wrap justify-center gap-2 min-h-40">
        <cardEvent v-for="event in arrayEvent" :key="event" :DataEvent="event" />
    </div>
    <div class="container-aloc-cards w-full flex flex-wrap justify-center gap-2 min-h-40">
        <cardEvent v-for="event in arrayEvent" :key="event" :DataEvent="event" />
    </div>
    <div class="container-aloc-cards w-full flex flex-wrap justify-center gap-2 min-h-40">
        <cardEvent v-for="event in arrayEvent" :key="event" :DataEvent="event" />
    </div>
</template>

<script>
import cardEvent from "../../components/cardEvent.vue";
import imgGaloxFla from '../img/galoxflamengo.webp';
import imgPalxCor from '../img/palmeirasxcorinthias.png';
import imgCruCsa from '../img/csaxcruzeiro.jpg';
import imgThiaguinho from '../img/thiaguinho.webp';
import imgAnaCastela from '../img/anacastela.png';
import imgTrintaPraUm from '../img/30praum.jpg';
import imgRestart from '../img/restart.webp';

export default {
    name: 'Events',
    components: {
        cardEvent,
    },

    data() {
        return {
            arrayEvent: [
                {
                    urlImg: imgGaloxFla,
                    date: 'QUA, 03 JUL',
                    hour: '21:30',
                    nameEvent: 'ATLÉTICO MG x FLAMENGO | Campeonato Brasileiro',
                    localEvent: 'ArenaMRV - MG',                  
                },
                {
                    urlImg: imgPalxCor,
                    date: 'DOM, 07 JUL',
                    hour: '16:00',
                    nameEvent: 'PALMEIRAS MG x CORINTHIANS | Campeonato Brasileiro',
                    localEvent: 'AlianzArena - SP',                  
                },
                {
                    urlImg: imgCruCsa,
                    date: 'SAB, 06 JUL',
                    hour: '11:00',
                    nameEvent: 'CRUZEIRO MG x CSA | Campeonato Brasileiro B',
                    localEvent: 'UNDEFINED :(',
                },
                {
                    urlImg: imgThiaguinho,
                    date: 'DOM, 06 JUL',
                    hour: '23:00',
                    nameEvent: 'Thiaguinho | Espaço Unimed',
                    localEvent: 'Espaço Unimed - SP',
                },
                {
                    urlImg: imgTrintaPraUm,
                    date: 'SAB, 20 JUL',
                    hour: '00:00',
                    nameEvent: '30PraUm | STAGE MUSICPARK',
                    localEvent: 'JURERÉ - FLORIANOPÓLIS SC',
                },
                {
                    urlImg: imgAnaCastela,
                    date: 'QUI, 13 JUL',
                    hour: '20:00',
                    nameEvent: 'ANA CASTELA | EXPOAGRO',
                    localEvent: 'ANÁPOLIS - GO',
                },
                {
                    urlImg: imgRestart,
                    date: 'SAB, 20 JUL',
                    hour: '11:00',
                    nameEvent: 'RESTART | TOUR PARA VOCÊ LEMBRAR',
                    localEvent: 'RIBEIRÃO PRETO - SP',
                },
            ]
        }
    }
}
</script>