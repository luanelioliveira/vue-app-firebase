import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import Application from './modules/Application';

Vue.use(Vuex);

const modules = {
  Application,
};

export default new Vuex.Store({
  namespace: true,
  modules,
  state,
  getters,
  actions,
  mutations,
});
