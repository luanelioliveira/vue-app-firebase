// eslint-disable-next-line
import store from '@/store';
import Vue from 'vue';
import Router from 'vue-router';
import routes from './routerConfig';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  saveScrollPosition: true,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.Authentication.isAuthenticated) {
      next({
        path: '/signin',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
