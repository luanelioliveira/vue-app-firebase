import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import Application from './modules/Application';
// eslint-disable-next-line
import Authentication from './modules/Authentication';
import Users from '@/views/Admin/Users/store';
import Customers from '@/views/Customers/store';
import Plans from '@/views/Plans/store';

Vue.use(Vuex);

const modules = {
  Application,
  Authentication,
  Users,
  Customers,
  Plans,
};

export default new Vuex.Store({
  namespace: true,
  modules,
  state,
  getters,
  actions,
  mutations,
});
