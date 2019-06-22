import Home from '@/views/Home.vue';
import LoginView from '@/views/LoginView.vue';

export default [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
];
