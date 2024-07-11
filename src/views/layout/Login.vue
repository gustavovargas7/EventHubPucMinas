<template>
    <div class="flex bg-gray-300 w-full h-full justify-center items-center flex">
        <div class="shadow-xl bg-gray-100 md:w-3/6 sm:w-5/6 p-6 rounded-xl flex items-center flex-col justify-center">
            <div class="w-full flex items-center flex-col gap-4">
                <div class="flex flex-col gap-4">
                    <span class="text-4xl"><i class="pi pi-users"></i></span>
                    <p class="text-2xl text-center">Please enter your login to continue.</p>
                </div>

                <Input v-for="input in inputs" :key="input.id" :dataInput="input" v-model="formData[input.id]" />

                <div class="w-3/5 sm:w-4/5 md:w-3/5">
                    <button @click="handleLogin" type="submit"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </div>

                <p v-if="loginError" class="text-red-600">Credenciais inválidas. Verifique seu login e senha.</p>

                <p>Don't have an account? <a class="text-blue-600 hover:text-gray-600" href="/register">Sign Up</a></p>
            </div>
        </div>
    </div>
</template>


<script>
import Input from '../../components/Input.vue';
import { login } from '@/scripts/login';

export default {
    name: 'login',
    components: {
        Input
    },
    data() {
        return {
            inputs: [
                {
                    icon: 'pi pi-user',
                    type: 'text',
                    id: 'login',
                    placeholder: 'Login'
                },
                {
                    icon: 'pi pi-lock',
                    type: 'password',
                    id: 'password',
                    placeholder: 'Password'
                },
            ],
            formData: {
                login: '',
                password: ''
            },
            loginError: false
        };
    },
    methods: {
        async handleLogin() {
            try {
                const loggedIn = await login(this.formData);
                console.log(loggedIn);
                if (loggedIn) {
                    console.log('Login bem-sucedido! Redirecionando...');
                } else {
                    this.loginError = true;
                    console.error('Credenciais inválidas.');
                }
            } catch (error) {
                console.error('Erro ao tentar realizar login:', error);
                this.loginError = true;
            }
        }
    }
}
</script>
