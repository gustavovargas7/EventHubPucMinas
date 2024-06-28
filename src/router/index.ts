import { createRouter, createWebHistory } from 'vue-router';
//User
import Login from "@/views/layout/login.vue";
//Master System
import Master from "@/views/layout/master.vue";
import Home from "@/views/layout/home.vue";
import Events from "@/views/layout/events.vue";
import Tickets from "@/views/layout/tickets.vue";
import About from "@/views/layout/about.vue";
import Contacts from "@/views/layout/contacts.vue";
import Register from "@/views/layout/register.vue";

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
  ]
})

export default router;
