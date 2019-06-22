const isAuthenticated = (state) => {
  return state.isAuthenticated;
};

const currentUser = (state) => {
  return state.currentUser;
};

export default {
  isAuthenticated,
  currentUser,
};
