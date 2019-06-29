<template>
  <div id="toolbar">
    <v-toolbar
      clipped-left
      dark
      color="purple darken-4"
      v-if="isAuthenticated"
    >
      <TheToolbarSide />
      <TheToolbarTitle />
      <v-spacer></v-spacer>
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
