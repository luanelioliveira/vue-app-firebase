const ADD_PLAN = (state, plan) => {
  const s = state;
  s.plans.push(plan);
};

export default {
  ADD_PLAN,
};
