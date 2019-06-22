import Vue from 'vue';
import './plugins/vuetify';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';
import App from './App.vue';
import '@/configs/firebase/';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
