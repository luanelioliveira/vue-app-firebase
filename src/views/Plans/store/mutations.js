const ADD_PLAN = (state, payload) => {
  const s = state;
  s.plans.push(payload);
};

const UPDATE_PLAN = (state, payload) => {
  const s = state;
  const plan = s.plans.find((data) => {
    return data.id === payload.id;
  });
  if (payload.name) {
    plan.name = payload.name;
  }
  if (payload.updatedAt) {
    plan.updatedAt = payload.updatedAt;
  }
};

const SET_PLANS = (state, payload) => {
  const s = state;
  s.plans = payload;
};

export default {
  ADD_PLAN,
  UPDATE_PLAN,
  SET_PLANS,
};
