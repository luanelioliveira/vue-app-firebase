const SET_TITLE = (state, title) => {
  const s = state;
  s.title = title;
};

const SET_LOADING = (state, loading) => {
  const s = state;
  s.loading = loading;
};

const SET_ERROR = (state, error) => {
  const s = state;
  s.error = error;
};

export default {
  SET_LOADING,
  SET_TITLE,
  SET_ERROR,
};
