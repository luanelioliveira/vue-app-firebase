<template>
  <loading
  :active.sync="loading"
  :can-cancel="false"
  :is-full-page="false"
  :width="45"
  :height="45"
  :opacity="0.8"
  :color="'#4A148C'">
  </loading>
</template>

<script>
import { mapState } from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  computed: {
    ...mapState('Application', ['loading']),
  },
  components: {
    Loading,
  },
};
</script>
