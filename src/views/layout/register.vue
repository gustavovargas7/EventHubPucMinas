<template>
    <div class="w-full h-full bg-gray-300 items-center flex justify-center">
        <div
            class="p-2 bg-gray-100 sm:w-5/6 md:w-3/6  md:h-4/4 rounded-xl shadow-xl gap-2 items-center flex-col justify-center flex">
            <div class="flex flex-col gap-4">
                <span class="text-4xl"><i class="pi pi-users"></i></span>
                <p class="text-2xl text-center">Please register your user to continue.</p>
            </div>
            <Input v-for="input in inputs" :key="input.id" :dataInput="input" />
            <div class="w-3/5 sm:w-4/5 md:w-3/5">
                <button @click="saveFormData" type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
            </div>
        </div>
    </div>
</template>

<script>
import Input from '../../components/Input.vue'
import { saveFormData } from '@/scripts/login';

export default {
    name: 'Register',
    components: {
        Input
    },

    data() {
        return {
            inputs: [
                {
                    icon: 'pi pi-user',
                    type: 'text',
                    id: 'name',
                    placeholder: 'Complete name'
                },
                {
                    icon: 'pi pi-id-card',
                    type: 'text',
                    id: 'cpf',
                    placeholder: 'CPF'
                },
                {
                    icon: 'pi pi-phone',
                    type: 'text',
                    id: 'cellphone',
                    placeholder: 'Number'
                },
                {
                    icon: 'pi pi-envelope',
                    type: 'email',
                    id: 'email',
                    placeholder: 'Email'
                },
                {
                    icon: 'pi pi-calendar',
                    type: 'date',
                    id: 'date',
                    placeholder: 'DD/MM/AAAA'
                },
                {
                    icon: 'pi pi-user',
                    type: 'text',
                    id: 'login',
                    placeholder: 'Login'
                },
                {
                    icon: 'pi pi-key',
                    type: 'password',
                    id: 'password',
                    placeholder: 'Password'
                },
            ]
        }
    },
    methods: {
        saveFormData
    }
}

</script>