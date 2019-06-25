import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import pt from 'vuetify/es5/locale/pt';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  theme: {
    primary: colors.purple.darken4, // #E53935
  },
  iconfont: 'md',
  lang: {
    locales: { pt },
    current: 'pt',
  },
});
