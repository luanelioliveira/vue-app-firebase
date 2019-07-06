import SignInView from '@/views/Auth/SignInView.vue';
import SignUpView from '@/views/Auth/SignUpView.vue';
import ProfileView from '@/views/Profile/ProfileView.vue';
import ServicesView from '@/views/Services/ServicesView.vue';
import CustomersView from '@/views/Customers/CustomersView.vue';
import PlansView from '@/views/Plans/PlansView.vue';
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
    component: SignInView,
    meta: {
      title: 'Sign In',
    },
  },
  {
    path: '/signup',
    name: 'signup',
    title: 'Sign Up',
    component: SignUpView,
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
    component: ServicesView,
    meta: {
      requiresAuth: true,
      title: 'Meus Atendimentos',
    },
  },
  {
    path: '/customers',
    name: 'customers',
    component: CustomersView,
    meta: {
      requiresAuth: true,
      title: 'Meus Clientes',
    },
  },
  {
    path: '/plans',
    name: 'plans',
    component: PlansView,
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
    redirect: '/signin',
  },
];
