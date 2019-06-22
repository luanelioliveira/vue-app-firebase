
// eslint-disable-next-line
import router from '@/router/index';
import firebase from 'firebase';

const signIn = ({ commit }, payload) => {
  commit('Application/SET_LOADING', true, { root: true });
  firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(() => {
      const currentUser = {
        uid: firebase.auth().currentUser.uid,
        email: firebase.auth().currentUser.email,
        emailVerified: firebase.auth().currentUser.emailVerified,
        displayName: firebase.auth().currentUser.displayName,
        photoURL: firebase.auth().currentUser.photoURL,
        phoneNumber: firebase.auth().currentUser.phoneNumber,
      };
      commit('SET_CURRENT_USER', currentUser);
      commit('SET_AUTHENTICATED', true);
      commit('Application/SET_LOADING', false, { root: true });
      router.push('/home');
    })
    .catch((error) => {
      commit('SET_CURRENT_USER', null);
      commit('SET_AUTHENTICATED', false);
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

const signUp = ({ commit }, payload) => {
  let currentUser = null;
  commit('Application/SET_LOADING', true, { root: true });
  firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .then(() => {
      firebase.auth().currentUser.updateProfile({
        displayName: payload.name,
      });
    })
    .then(() => {
      currentUser = {
        uid: firebase.auth().currentUser.uid,
        email: firebase.auth().currentUser.email,
        emailVerified: firebase.auth().currentUser.emailVerified,
        displayName: payload.name,
        photoURL: firebase.auth().currentUser.photoURL,
        phoneNumber: firebase.auth().currentUser.phoneNumber,
      };
      commit('SET_CURRENT_USER', currentUser);
      commit('Application/SET_ERROR', null, { root: true });
      commit('SET_AUTHENTICATED', true);
      commit('Application/SET_LOADING', false, { root: true });
      router.push('/home');
    })
    .catch((error) => {
      commit('SET_CURRENT_USER', null);
      commit('SET_AUTHENTICATED', false);
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

const signOut = ({ commit }) => {
  firebase.auth().signOut();
  commit('Application/SET_LOADING', true, { root: true });
  commit('SET_AUTHENTICATED', false);
  commit('Application/SET_LOADING', false, { root: true });
  router.push('/signin');
};

export default {
  signUp,
  signIn,
  signOut,
};
