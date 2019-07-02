import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import ProfileView from '@/views/ProfileView.vue';
import MyServicesView from '@/views/MyServicesView.vue';
import MyClientsView from '@/views/MyClientsView.vue';
import MyPlansView from '@/views/MyPlansView.vue';
import DashboardView from '@/views/Admin/Dashboard/DashboardView.vue';
import ConfigurationView from '@/views/Admin/Configuration/ConfigurationView.vue';
import UsersView from '@/views/Admin/Users/UsersView.vue';
import NotFound from '@/views/NotFound.vue';

export default [
  {
    path: '/',
    redirect: '/signin',
  },
  {
    path: '/signin',
    name: 'signin',
    title: 'Sign In',
    component: SignIn,
    meta: {
      title: 'Sign In',
    },
  },
  {
    path: '/signup',
    name: 'signup',
    title: 'Sign Up',
    component: SignUp,
    meta: {
      title: 'Sign Up',
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      requiresAuth: true,
      title: 'Meu Perfil',
    },
  },
  {
    path: '/services',
    name: 'services',
    component: MyServicesView,
    meta: {
      requiresAuth: true,
      title: 'Meus Atendimentos',
    },
  },
  {
    path: '/clients',
    name: 'clients',
    component: MyClientsView,
    meta: {
      requiresAuth: true,
      title: 'Meus Clientes',
    },
  },
  {
    path: '/plans',
    name: 'plans',
    component: MyPlansView,
    meta: {
      requiresAuth: true,
      title: 'Meus Planos',
    },
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true,
      title: 'Dashboard',
    },
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: UsersView,
    meta: {
      requiresAuth: true,
      title: 'Usuários',
    },
  },
  {
    path: '/admin/config',
    name: 'admin-config',
    title: 'Configurações',
    component: ConfigurationView,
    meta: {
      requiresAuth: true,
      title: 'Configurações',
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
