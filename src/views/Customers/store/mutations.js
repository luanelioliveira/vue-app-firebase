const SET_CURRENT_CUSTOMER = (state, payload) => {
  const s = state;
  s.currentCustomer = payload;
};

const ADD_CUSTOMER = (state, payload) => {
  const s = state;
  s.customers.push(payload);
};

const UPDATE_CUSTOMER = (state, payload) => {
  const s = state;
  const customer = s.customers.find((data) => {
    return data.id === payload.id;
  });
  if (payload.name) {
    customer.name = payload.name;
  }
  if (payload.updatedAt) {
    customer.updatedAt = payload.updatedAt;
  }
  if (payload.plans) {
    customer.plans = payload.plans;
  }
};

const SET_CUSTOMERS = (state, payload) => {
  const s = state;
  s.customers = payload;
};

const SET_CUSTOMER_PLANS = (state, payload) => {
  const s = state;
  s.customerPlans = payload;
};

const ADD_CUSTOMER_PLAN = (state, payload) => {
  const s = state;
  s.customerPlans.push(payload);
};

export default {
  SET_CURRENT_CUSTOMER,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER,
  SET_CUSTOMERS,
  SET_CUSTOMER_PLANS,
  ADD_CUSTOMER_PLAN,
};
