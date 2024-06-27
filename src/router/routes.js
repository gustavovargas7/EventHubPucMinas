import { createRouter, createWebHistory } from 'vue-router';

import Master from '@/views/layout/master.vue';
import Dashboard from '@/views/layout/dashboard.vue';

const routes = [
  {
    name: 'Master',
    path: '/',
    component: Master,
    redirect: '/dashboard',
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard', 
        component: Dashboard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
