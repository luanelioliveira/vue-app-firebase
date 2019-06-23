const isAuthenticated = (state) => {
  return state.isAuthenticated;
};

const currentUser = (state) => {
  return state.currentUser;
};

const isAdmin = (state) => {
  return state.currentUser.isAdmin;
};

export default {
  isAuthenticated,
  currentUser,
  isAdmin,
};
