const SET_AUTHENTICATED = (state, status) => {
  const s = state;
  s.isAuthenticated = status;
};

export default {
  SET_AUTHENTICATED,
};
