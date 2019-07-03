
import firebase from 'firebase';

const addPlan = ({ commit }, payload) => {
  console.log(payload);
  const date = new Date(Date.now());
  const plan = {
    createdAt: date.toISOString(),
    creatorId: payload.userId,
    name: payload.plan.name,
    status: 'active',
  };
  console.log(plan);
  const plansRef = firebase.database().ref('plans').child(1);
  plansRef.set(plan)
    .then(() => {
      commit('ADD_PLAN', plan);
      commit('Application/SET_LOADING', false, { root: true });
    })
    .catch((error) => {
      commit('Application/SET_ERROR', error, { root: true });
      commit('Application/SET_LOADING', false, { root: true });
    });
};

export default {
  addPlan,
};
