// App
import { createApp } from 'vue'
import App from './App.vue'
// Rotas
import router from './router'
// CSS
import '../src/assets/css/app.css'

// Prime Vue
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.mount('#app');