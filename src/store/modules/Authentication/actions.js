
// eslint-disable-next-line
import router from '@/router/index';

const signIn = ({ commit }) => {
  commit('Application/SET_LOADING', true, { root: true });
  commit('SET_AUTHENTICATED', true);
  commit('Application/SET_LOADING', false, { root: true });
  router.push('/home');
};

const signOut = ({ commit }) => {
  commit('Application/SET_LOADING', true, { root: true });
  commit('SET_AUTHENTICATED', false);
  commit('Application/SET_LOADING', false, { root: true });
  router.push('/login');
};

export default {
  signIn,
  signOut,
};
