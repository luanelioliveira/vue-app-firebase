import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import DashboardView from '@/views/DashboardView.vue';
import AdminUsersView from '@/views/AdminUsersView.vue';
import AdminUsersConfigView from '@/views/AdminUsersConfigView.vue';
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
    component: DashboardView,
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
    path: '/admin/users-config',
    name: 'users',
    component: AdminUsersConfigView,
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
