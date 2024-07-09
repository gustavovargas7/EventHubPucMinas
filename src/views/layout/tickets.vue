<template>
    <div class="sm:flex sm:flex-col sm:justify-center sm:items-center gap-4 md:grid md:grid-cols-2 md:justify-items-center">
        <Ticket v-for="ticket in tickets" :key="ticket.event" :dataTicket="ticket" />
    </div>
</template>

<script>

import Ticket from "../../components/Ticket.vue";
import imgGaloxFla from '../../assets/images/galoxflamengo.webp';
import imgThiaguinho from '../../assets/images/thiaguinho.webp';
import imgPalXcor from '../../assets/images/palmeirasxcorinthias.png';

export default {
    name: 'Tickets',
    components: {
        Ticket
    },
    data() {
        return {
            tickets: [
                {
                    imgUrl: imgGaloxFla,
                    event: 'PAL',
                    local: 'Local do Evento',
                    date: 'Data do Evento',
                    hour: 'Hora do Evento',
                    qtde: 2,
                    situation: 'Ativo'
                },
                {
                    imgUrl: imgThiaguinho,
                    event: 'FLA',
                    local: 'Local do Evento',
                    date: 'Data do Evento',
                    hour: 'Hora do Evento',
                    qtde: 2,
                    situation: 'Ativo'
                },
                {
                    imgUrl: imgPalXcor,
                    event: 'Palmeiras x Corinthians | Campeonato Brasileiro',
                    local: 'Alianz Parque',
                    date: '01/07/2024',
                    hour: '20:00',
                    qtde: 2,
                    situation: 'Ativo'
                },
            ]
        };
    }
}
</script>