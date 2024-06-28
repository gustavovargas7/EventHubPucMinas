<template>
    <div>
        <Ticket v-for="ticket in tickets" :key="ticket.event" :dataTicket="ticket" />
    </div>
</template>

<script>

import Ticket from "../../components/ticket.vue";
import imgGaloxFla from '../img/galoxflamengo.webp';

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
                    imgUrl: imgGaloxFla,
                    event: 'FLA',
                    local: 'Local do Evento',
                    date: 'Data do Evento',
                    hour: 'Hora do Evento',
                    qtde: 2,
                    situation: 'Ativo'
                },
                {
                    imgUrl: imgGaloxFla,
                    event: 'FLA',
                    local: 'Local do Evento',
                    date: 'Data do Evento',
                    hour: 'Hora do Evento',
                    qtde: 2,
                    situation: 'Ativo'
                },
            ]
        };
    }
}
</script>