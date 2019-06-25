<template>
  <loading
    :show='loading'
    :label='label'
    :overlay='overlay'>
  </loading>
</template>

<script>
import { mapState } from 'vuex';
import Loading from 'vue-full-loading';

export default {
  data(){
    return {
      base,
      show: false,
      overlay: true,
      label: 'Loading...',
    };
  },
  components: {
    Loading,
  },
  computed: {
    ...mapState('Application', ['loading']),
  },
};
</script>
