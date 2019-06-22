import Home from '@/views/Home.vue';
import LoginView from '@/views/LoginView.vue';
import SignUp from '@/views/SignUp.vue';

export default [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
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
