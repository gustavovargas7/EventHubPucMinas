<template>
    <div>
        <button @click="clearLocalStorage" class="bg-red-500 text-white p-2 rounded mb-4">Limpar Ingressos
            Salvos</button>
        <div
            class="sm:flex sm:flex-col sm:justify-center sm:items-center gap-4 md:grid md:grid-cols-2 md:justify-items-center">
            <Ticket v-for="ticket in tickets" :key="ticket.event" :dataTicket="ticket" />
        </div>
    </div>
</template>

<script>
import Ticket from "../../components/Ticket.vue";

export default {
    name: 'Tickets',
    components: {
        Ticket
    },
    data() {
        return {
            tickets: []
        };
    },
    mounted() {
        this.loadTickets();
    },
    methods: {
        loadTickets() {
            const storedTickets = JSON.parse(localStorage.getItem('clickedEvents')) || [];
            this.tickets = storedTickets.map(event => ({
                imgUrl: event.urlImg,
                event: event.nameEvent,
                local: event.localEvent,
                date: event.date,
                hour: event.hour,
                qtde: 1,
                situation: 'Ativo' 
            }));
        },
        clearLocalStorage() {
            localStorage.removeItem('clickedEvents');
            this.tickets = [];
        }
    }
}
</script>
