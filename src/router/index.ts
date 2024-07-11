import { createRouter, createWebHistory } from 'vue-router';

// User
import Login from "@/views/layout/Login.vue";
import Register from "@/views/layout/Register.vue";

// Master System
import About from "@/views/layout/About.vue";
import Home from "@/views/layout/Home.vue";
import Master from "@/views/layout/Master.vue";
import Tickets from "@/views/layout/Tickets.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Master',
      component: Master,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
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
      ],
    },
  ],
});

export default router;
