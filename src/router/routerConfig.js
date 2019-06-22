import Home from '@/views/Home.vue';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';

export default [
  {
    path: '/',
    redirect: '/signin',
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
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
];
