<template>
  <v-toolbar-side-icon @click.stop="toogle"></v-toolbar-side-icon>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('Application', ['drawer']),
  },
  methods: {
    ...mapActions('Application', ['setDrawer']),
    toogle() {
      this.setDrawer(!this.drawer);
    },
  },
};
</script>
