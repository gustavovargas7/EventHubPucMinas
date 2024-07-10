import { createRouter, createWebHistory } from 'vue-router';

//User
import Login from "@/views/layout/Login.vue";
import Register from "@/views/layout/Register.vue";

//Master System
import About from "@/views/layout/About.vue";
import Home from "@/views/layout/Home.vue";
import Master from "@/views/layout/Master.vue";
import Tickets from "@/views/layout/Tickets.vue";

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
