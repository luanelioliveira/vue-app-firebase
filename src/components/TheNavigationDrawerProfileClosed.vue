<template>
  <v-list-tile-action>
    <v-btn icon @click.stop="toogle">
      <v-icon>chevron_left</v-icon>
    </v-btn>
  </v-list-tile-action>
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
