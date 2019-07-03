
import firebase from 'firebase';

const getPlans = ({ commit }) => {
  commit('Application/SET_LOADING', true, { root: true });
  firebase.database().ref('plans').once('value')
    .then((data) => {
      const plans = [];
      const dataPlans = data.val();
      // eslint-disable-next-line
      for (let key in dataPlans) {
        plans.push({
          id: key,
          createdAt: dataPlans[key].createdAt,
          creatorId: dataPlans[key].creatorId,
          name: dataPlans[key].name,
          status: dataPlans[key].status,
        });
      }
      console.log(plans);
      commit('SET_PLANS', plans);
      commit('Application/SET_LOADING', false, { root: true });
    })
    .catch((error) => {
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

const updatePlan = ({ commit }, payload) => {
  commit('Application/SET_LOADING', true, { root: true });
  const date = new Date(Date.now());
  const plan = {
    id: payload.id,
    name: payload.name,
    updatedAt: date.toISOString(),
  };
  firebase.database().ref('plans').child(payload.id).update(plan)
    .then(() => {
      commit('UPDATE_PLAN', plan);
      commit('Application/SET_LOADING', false, { root: true });
    })
    .catch((error) => {
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

const addPlan = ({ commit }, payload) => {
  commit('Application/SET_LOADING', true, { root: true });
  const date = new Date(Date.now());
  const plan = {
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
    creatorId: payload.userId,
    name: payload.plan.name,
    status: 'active',
  };
  firebase.database().ref('plans').push(plan)
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
