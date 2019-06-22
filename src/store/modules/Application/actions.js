
const setTitle = ({ commit }, payload) => {
  commit('SET_TITLE', payload);
};

const setError = ({ commit }, payload) => {
  commit('SET_ERROR', payload);
};

const clearError = ({ commit }) => {
  commit('SET_ERROR', null);
};

export default {
  setTitle,
  setError,
  clearError,
};
