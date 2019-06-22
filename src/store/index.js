import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import Application from './modules/Application';
import Authentication from './modules/Authentication';

Vue.use(Vuex);

const modules = {
  Application,
  Authentication,
};

export default new Vuex.Store({
  namespace: true,
  modules,
  state,
  getters,
  actions,
  mutations,
});
