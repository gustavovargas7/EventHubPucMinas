<template>
    <div class="flex w-3/5 sm:w-4/5 md:w-3/5">
        <span
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <i :class="dataInput.icon"></i>
        </span>
        <input :type="dataInput.type" :id="dataInput.id"
            class="outline-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :placeholder="dataInput.placeholder" required>
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        dataInput: {
            type: Object,
            required: true,
            validator(value) {
                return ['icon', 'type', 'id', 'placeholder'].every(prop => prop in value)
            }
        }
    }
}
</script>
