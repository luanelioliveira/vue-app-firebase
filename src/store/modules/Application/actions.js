
const setTitle = ({ commit }, payload) => {
  commit('SET_TITLE', payload);
};

const setError = ({ commit }, payload) => {
  commit('SET_ERROR', payload);
};

const clearError = ({ commit }) => {
  commit('SET_ERROR', null);
};

const setDrawer = ({ commit }, payload) => {
  commit('SET_DRAWER', payload);
};

const setDialog = ({ commit }, payload) => {
  commit('SET_DIALOG', payload);
};

export default {
  setTitle,
  setError,
  setDrawer,
  setDialog,
  clearError,
};
