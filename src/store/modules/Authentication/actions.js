
// eslint-disable-next-line
import router from '@/router/index';
import firebase from 'firebase';

const signIn = ({ commit }, payload) => {
  commit('Application/SET_LOADING', true, { root: true });
  firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(() => {
      commit('SET_AUTHENTICATED', true);
      commit('Application/SET_LOADING', false, { root: true });
      router.push('/home');
    })
    .catch(() => {
      commit('SET_AUTHENTICATED', false);
      commit('Application/SET_LOADING', false, { root: true });
    });
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
