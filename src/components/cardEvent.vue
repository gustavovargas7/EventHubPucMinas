<template>
    <div class="card p-2 w-[210px] bg-slate-50 rounded-md hover:shadow-2xl cursor-pointer">
        <div class="aloc-img-event w-full flex justify-center">
            <img class="rounded-md w-[200px] h-[110px]" :src="DataEvent.urlImg" :alt="DataEvent.nameEvent">
        </div>
        <div class="aloc-infos flex flex-col gap-2">
            <div class="date flex gap-2 font-semibold text-gray-800 text-xs">
                <p>{{ eventDate }}</p>
            </div>
            <div class="local flex flex-col gap-1">
                <p class="text-sm font-sans font-medium">{{ DataEvent.nameEvent }}</p>
                <div class="flex gap-2 justify-between">
                    <p class="text-xs font text-current font-semibold text-slate-500">{{ DataEvent.localEvent }}</p>
                    <div class="cart bg-green-500 w-[25px] flex items-center justify-center p-1 rounded-lg hover:bg-green-400"
                        @click="saveEvent">
                        <i class="pi pi-cart-minus text-white"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardEvent',
    props: {
        DataEvent: {
            type: Object,
            required: true
        }
    },
    computed: {
        eventDate() {
            return `${this.DataEvent.date} - ${this.DataEvent.hour}`;
        }
    },
    methods: {
        saveEvent() {
            const storedEvents = JSON.parse(localStorage.getItem('clickedEvents')) || [];
            storedEvents.push(this.DataEvent);
            localStorage.setItem('clickedEvents', JSON.stringify(storedEvents));
        }
    }
}
</script>