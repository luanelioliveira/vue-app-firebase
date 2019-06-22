const SET_TITLE = (state, title) => {
  const s = state;
  s.title = title;
};

const SET_LOADING = (state, loading) => {
  const s = state;
  s.loading = loading;
};

export default {
  SET_LOADING,
  SET_TITLE,
};
