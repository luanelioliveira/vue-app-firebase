const SET_AUTHENTICATED = (state, status) => {
  const s = state;
  s.isAuthenticated = status;
};

const SET_CURRENT_USER = (state, user) => {
  const s = state;
  s.currentUser = user;
};

export default {
  SET_AUTHENTICATED,
  SET_CURRENT_USER,
};
