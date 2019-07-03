
import firebase from 'firebase';

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
  const userId = rootState.Authentication.currentUser.uid;
  const date = new Date(Date.now());
  const customer = {
    id: payload.id,
    name: payload.name,
    updatedAt: date.toISOString(),
  };
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

export default {
  addCustomer,
  getCustomers,
  updateCustomer,
};
