<template>
  <div id="toolbar">
    <v-toolbar
      clipped-right
      dark
      color="purple darken-4"
      v-if="isAuthenticated"
    >
      <TheToolbarTitle />
      <v-spacer></v-spacer>
      <TheToolbarSide />
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheToolbarSide from './TheToolbarSide.vue';
import TheToolbarTitle from './TheToolbarTitle.vue';

export default {
  components: {
    TheToolbarSide,
    TheToolbarTitle,
  },
  computed: {
    ...mapState('Authentication', ['isAuthenticated']),
  },
};
</script>
