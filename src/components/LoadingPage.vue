<template>
  <loading
    :show='loading'
    :label='label'
    :overlay='overlay'>
  </loading>
</template>

<script>
// eslint-disable-next-line
import Loading from 'vue-full-loading';
import { mapState } from 'vuex';

export default {
  data() {
    return {
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
