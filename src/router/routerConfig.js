import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import AdminDashboardView from '@/views/AdminDashboardView.vue';
import AdminUsersView from '@/views/AdminUsersView.vue';
import NotFound from '@/views/NotFound.vue';

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
    path: '/dashboard',
    name: 'dashboard',
    component: AdminDashboardView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/users',
    name: 'users',
    component: AdminUsersView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/404',
    name: 'Notfound',
    component: NotFound,
  },
  {
    path: '*',
    component: NotFound,
  },
];
