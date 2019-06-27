import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import DashboardView from '@/views/DashboardView.vue';
import ProfileView from '@/views/ProfileView.vue';
import AdminCategoriesView from '@/views/AdminCategoriesView.vue';
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
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin/categories',
    name: 'users',
    component: AdminCategoriesView,
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
    path: '/admin/config',
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
