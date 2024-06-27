<template>
    <div class="card p-2 w-[210px] bg-slate-50 rounded-md hover:shadow-2xl cursor-pointer">
        <div class="aloc-img-event w-full flex justify-center">
            <img class="rounded-md w-[200px] h-[110px]" :src="DataEvent.urlImg">
        </div>
        <div class="aloc-infos flex flex-col gap-2">
            <div class="date flex gap-2 font-semibold text-gray-800 text-xs">
                <p>{{ DataEvent.date }} - {{ DataEvent.hour }}</p>
            </div>
            <div class="local flex flex-col gap-1">
                <p class="text-sm font-sans font-medium">{{ DataEvent.nameEvent }}</p>
                <p class="text-xs font text-current font-semibold text-slate-500">{{ DataEvent.localEvent }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cardEvent',
    props: {
        DataEvent: {
            type: Object,
            required: true
        }
    }
}
</script>
