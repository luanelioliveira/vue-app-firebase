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

const dialog = (state) => {
  return state.dialog;
};

export default {
  loading,
  title,
  error,
  drawer,
  dialog,
};
