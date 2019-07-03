
import firebase from 'firebase';

const getPlans = ({ rootState, commit }) => {
  commit('Application/SET_LOADING', true, { root: true });
  const userId = rootState.Authentication.currentUser.uid;
  firebase.database().ref('plans').child(userId).once('value')
    .then((data) => {
      const plans = [];
      const dataPlans = data.val();
      // eslint-disable-next-line
      for (let key in dataPlans) {
        plans.push({
          id: key,
          createdAt: dataPlans[key].createdAt,
          name: dataPlans[key].name,
          status: dataPlans[key].status,
        });
      }
      commit('SET_PLANS', plans);
      commit('Application/SET_LOADING', false, { root: true });
    })
    .catch((error) => {
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

const updatePlan = ({ rootState, commit }, payload) => {
  commit('Application/SET_LOADING', true, { root: true });
  const userId = rootState.Authentication.currentUser.uid;
  const date = new Date(Date.now());
  const plan = {
    id: payload.id,
    name: payload.name,
    updatedAt: date.toISOString(),
  };
  firebase.database().ref(`plans/${userId}`).child(payload.id).update(plan)
    .then(() => {
      commit('UPDATE_PLAN', plan);
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
  const date = new Date(Date.now());
  const plan = {
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
    name: payload.plan.name,
    status: 'active',
  };
  firebase.database().ref('plans').child(userId).push(plan)
    .then((data) => {
      commit('ADD_PLAN', {
        ...plan,
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
  addPlan,
  getPlans,
  updatePlan,
};
