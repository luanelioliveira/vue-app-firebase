
import firebase from 'firebase';

const setCurrentCustomer = ({ commit }, payload) => {
  commit('SET_CURRENT_CUSTOMER', payload);
};

const getCustomers = ({ rootState, commit }) => {
  commit('Application/SET_LOADING', true, { root: true });
  const userId = rootState.Authentication.currentUser.uid;
  firebase.database().ref('customers').child(userId).once('value')
    .then((data) => {
      const customers = [];
      const dataCustomers = data.val();
      // eslint-disable-next-line
      for (let key in dataCustomers) {
        customers.push({
          id: key,
          createdAt: dataCustomers[key].createdAt,
          name: dataCustomers[key].name,
          status: dataCustomers[key].status,
        });
      }
      commit('SET_CUSTOMERS', customers);
      commit('Application/SET_LOADING', false, { root: true });
    })
    .catch((error) => {
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

const updateCustomer = ({ rootState, commit }, payload) => {
  commit('Application/SET_LOADING', true, { root: true });
  const customer = {};
  if (payload.id) {
    customer.id = payload.id;
  }
  if (payload.name) {
    customer.name = payload.name;
  }
  const date = new Date(Date.now());
  customer.updatedAt = date.toISOString();
  const userId = rootState.Authentication.currentUser.uid;
  firebase.database().ref(`customers/${userId}`).child(payload.id).update(customer)
    .then(() => {
      commit('UPDATE_CUSTOMER', customer);
      commit('Application/SET_LOADING', false, { root: true });
    })
    .catch((error) => {
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

const addCustomer = ({ rootState, commit }, payload) => {
  commit('Application/SET_LOADING', true, { root: true });
  const userId = rootState.Authentication.currentUser.uid;
  const date = new Date(Date.now());
  const customer = {
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
    name: payload.customer.name,
    status: 'active',
  };
  firebase.database().ref('customers').child(userId).push(customer)
    .then((data) => {
      commit('ADD_CUSTOMER', {
        ...customer,
        id: data.key,
      });
      commit('Application/SET_LOADING', false, { root: true });
    })
    .catch((error) => {
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

const addPlan = ({ rootState, commit }, payload) => {
  commit('Application/SET_LOADING', true, { root: true });
  const userId = rootState.Authentication.currentUser.uid;
  const plan = {
    id: payload.plan.id,
    name: payload.plan.name,
  };
  firebase.database().ref(`customer-plans/${userId}`).child(payload.customer.id).push(plan)
    .then(() => {
      commit('ADD_CUSTOMER_PLAN', payload.plan);
      commit('Application/SET_LOADING', false, { root: true });
    })
    .catch((error) => {
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

const getCustomerPlans = ({ rootState, commit }, payload) => {
  commit('Application/SET_LOADING', true, { root: true });
  const userId = rootState.Authentication.currentUser.uid;
  console.log(payload);
  firebase.database().ref(`customer-plans/${userId}`).child(payload).once('value')
    .then((data) => {
      console.log(data);
      const plans = [];
      const customerPlans = data.val();
      // eslint-disable-next-line
      for (let key in customerPlans) {
        plans.push({
          id: key,
          createdAt: customerPlans[key].createdAt,
          name: customerPlans[key].name,
          status: customerPlans[key].status,
        });
      }
      commit('SET_CUSTOMER_PLANS', plans);
      commit('Application/SET_LOADING', false, { root: true });
    })
    .catch((error) => {
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};


export default {
  setCurrentCustomer,
  addCustomer,
  getCustomers,
  updateCustomer,
  addPlan,
  getCustomerPlans,
};
