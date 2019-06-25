
import firebase from 'firebase';

const getUsers = ({ commit }) => {
  const users = [];
  commit('Application/SET_LOADING', true, { root: true });
  firebase.database().ref('/users').once('value')
    .then((snapshot) => {
      snapshot.forEach((user) => {
        users.push({
          uid: user.val().uid,
          email: user.val().email,
          emailVerified: user.val().emailVerified,
          displayName: user.val().displayName,
          photoURL: user.val().photoURL,
          phoneNumber: user.val().phoneNumber,
          isAdmin: user.val().isAdmin,
          createdAt: user.val().createdAt,
          updatedAt: user.val().updatedAt,
          lastLogin: user.val().lastLogin,
        });
      });
      commit('SET_USERS', users);
      commit('Application/SET_LOADING', false, { root: true });
    })
    .catch((error) => {
      commit('Application/SET_ERROR', error.message, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

export default {
  getUsers,
};
