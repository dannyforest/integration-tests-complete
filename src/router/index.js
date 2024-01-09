import { createRouter, createWebHistory } from 'vue-router';
import UserList from '@/components/UserList.vue';
import UserProfile from "@/components/UserProfile.vue";

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/user/:id',
    name: 'UserProfile',
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
