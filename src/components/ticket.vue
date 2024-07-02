<template>
    <div class="max-w-lg mx-left mb-3 bg-white shadow-md rounded-lg overflow-hidden">
        <div class="flex">
            <div class="w-1/3">
                <img :src="dataTicket.imgUrl" class="object-cover w-full h-full" alt="...">
            </div>
            <div class="w-2/3 p-4">
                <h5 class="text-xl font-semibold mb-5">INGRESSO</h5>
                <p class="text-gray-700 mb-1">{{ dataTicket.event }}</p>
                <p class="text-gray-500 mb-4">{{ dataTicket.local }}</p>
                <p class="text-gray-300 text-sm mb-1">{{ dataTicket.date }} - {{ dataTicket.hour }}</p>
                <p class="text-gray-300 text-sm">Qtde: {{ dataTicket.qtde }}</p>
                <br>
                <div class="">
                    <p class="text-green-500 mb-2 border border-green-500 hover:bg-green-400 hover:text-white font-bold py-1 px-1 rounded">
                        {{ dataTicket.situation }}
                    </p>
                    <p class="hover:text-blue-500 cursor-ponter">Visualizar Ingresso</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ticket',
    props: {
      dataTicket: {
         type: Object,
         required: true,
      }
    }
}
</script>
