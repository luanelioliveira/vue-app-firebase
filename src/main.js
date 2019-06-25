import Vue from 'vue';
import './plugins/vuetify';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';
import DateFilter from './filters/date';
import '@/configs/firebase/';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import App from './App.vue';
import TitlePage from './components/TitlePage.vue';

Vue.config.productionTip = false;

Vue.filter('date', DateFilter);
Vue.component('TitlePage', TitlePage);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
