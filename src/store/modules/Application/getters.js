const loading = (state) => {
  return state.loading;
};

const title = (state) => {
  return state.title;
};

const error = (state) => {
  return state.error;
};

const drawer = (state) => {
  return state.drawer;
};

export default {
  loading,
  title,
  error,
  drawer,
};
