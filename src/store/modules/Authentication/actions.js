import firebase from 'firebase';
// eslint-disable-next-line
import router from '@/router/index';

const autoSignIn = ({ commit }, payload) => {
  commit('Application/SET_LOADING', true, { root: true });
  const userId = payload.uid;
  let currentUser = null;
  firebase.database().ref('users').child(userId).once('value')
    .then((user) => {
      const date = new Date(Date.now());
      currentUser = {
        uid: user.val().uid,
        email: user.val().email,
        emailVerified: user.val().emailVerified,
        displayName: user.val().displayName,
        photoURL: user.val().photoURL,
        phoneNumber: user.val().phoneNumber,
        createdAt: user.val().createdAt,
        updatedAt: user.val().updatedAt,
        lastLogin: date.toISOString(),
        isAdmin: user.val().isAdmin,
        plans: user.val().plans,
      };
      firebase.database().ref('users').child(userId).update({ lastLogin: currentUser.lastLogin });
      commit('SET_CURRENT_USER', currentUser);
      commit('SET_AUTHENTICATED', true);
      commit('Application/SET_LOADING', false, { root: true });
      if (currentUser.isAdmin) {
        router.push('/admin/dashboard');
      } else {
        router.push('/services');
      }
    })
    .catch((error) => {
      commit('SET_CURRENT_USER', null);
      commit('SET_AUTHENTICATED', false);
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

const signIn = ({ commit }, payload) => {
  let currentUser = null;
  let userId = null;
  commit('Application/SET_LOADING', true, { root: true });
  firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(() => {
      userId = firebase.auth().currentUser.uid;
      const date = new Date(Date.now());
      firebase.database().ref('users').child(userId).once('value')
        .then((user) => {
          currentUser = {
            uid: user.val().uid,
            email: user.val().email,
            emailVerified: user.val().emailVerified,
            displayName: user.val().displayName,
            photoURL: user.val().photoURL,
            phoneNumber: user.val().phoneNumber,
            createdAt: user.val().createdAt,
            updatedAt: user.val().updatedAt,
            lastLogin: date.toISOString(),
            isAdmin: user.val().isAdmin,
            plans: user.val().plans,
          };
          firebase.database().ref('users').child(userId).update({ lastLogin: currentUser.lastLogin });
          commit('SET_CURRENT_USER', currentUser);
          commit('SET_AUTHENTICATED', true);
          commit('Application/SET_LOADING', false, { root: true });
          if (currentUser.isAdmin) {
            router.push('/services');
          } else {
            router.push('/admin/dashboard');
          }
        })
        .catch((error) => {
          commit('SET_CURRENT_USER', null);
          commit('SET_AUTHENTICATED', false);
          commit('Application/SET_ERROR', error, { root: true });
          commit('Application/SET_LOADING', false, { root: true });
        });
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
      const date = new Date(Date.now());
      currentUser = {
        uid: firebase.auth().currentUser.uid,
        email: firebase.auth().currentUser.email,
        emailVerified: firebase.auth().currentUser.emailVerified,
        displayName: payload.name,
        photoURL: 'https://firebasestorage.googleapis.com/v0/b/vue-app-firebase-921f6.appspot.com/o/images%2Fuser.png?alt=media&token=4e903c7e-7944-425d-beea-6c9170f0bcbd',
        phoneNumber: firebase.auth().currentUser.phoneNumber,
        createdAt: date.toISOString(),
        updatedAt: date.toISOString(),
        lastLogin: date.toISOString(),
        isAdmin: false,
        plans: [],
      };
      const usersRef = firebase.database().ref('users').child(currentUser.uid);
      usersRef.set(currentUser);
      commit('SET_CURRENT_USER', currentUser);
      commit('Application/SET_ERROR', null, { root: true });
      commit('SET_AUTHENTICATED', true);
      commit('Application/SET_LOADING', false, { root: true });
      router.push('/services');
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
  commit('Application/SET_DRAWER', false, { root: true });
  commit('SET_AUTHENTICATED', false);
  commit('Application/SET_LOADING', false, { root: true });
  router.push('/signin');
};

export default {
  signUp,
  signIn,
  signOut,
  autoSignIn,
};
