const customers = (state) => {
  return state.customers;
};

const loadedCustomer = (state) => {
  return (customerId) => {
    return state.customers.find((customer) => {
      return customer.id === customerId;
    });
  };
};

export default {
  customers,
  loadedCustomer,
};
