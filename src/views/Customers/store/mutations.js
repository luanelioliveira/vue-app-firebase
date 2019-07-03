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
};

const SET_CUSTOMERS = (state, payload) => {
  const s = state;
  s.customers = payload;
};

export default {
  ADD_CUSTOMER,
  UPDATE_CUSTOMER,
  SET_CUSTOMERS,
};
