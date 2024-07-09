import { createRouter, createWebHistory } from 'vue-router';
//User
import Login from "@/views/layout/Login.vue";
//Master System
import AboutEvent from "@/views/layout/AboutEvent.vue";
import About from "@/views/layout/About.vue";
import Contacts from "@/views/layout/Contacts.vue";
import Master from "@/views/layout/Master.vue";
import Home from "@/views/layout/Home.vue";
import Events from "@/views/layout/Events.vue";
import Tickets from "@/views/layout/Tickets.vue";
import Register from "@/views/layout/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/master',
      name: 'Master',
      component: Master,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/events',
          name: 'Events',
          component: Events,
        },
        {
          path: '/tickets',
          name: 'My Tickets',
          component: Tickets,
        },
        {
          path: '/about',
          name: 'About',
          component: About,
        },
        {
          path: '/contacts',
          name: 'Contatos',
          component: Contacts,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      children: []
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/aboutEvent',
      name: 'About Event',
      component: AboutEvent,
    },
  ]
})

export default router;
