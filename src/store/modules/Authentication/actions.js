const signIn = ({ commit }) => {
  commit('Application/SET_LOADING', true, { root: true });
  commit('SET_AUTHENTICATED', true);
};

export default {
  signIn,
};
