<template>
  <div id="toolbar">
    <v-toolbar app dark flat color="primary" v-if="isAuthenticated">
      <TheToolbarSide />
      <TheToolbarTitle />
      <v-spacer></v-spacer>
      <TheToolbarItemsRight />
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheToolbarSide from './TheToolbarSide.vue';
import TheToolbarTitle from './TheToolbarTitle.vue';
import TheToolbarItemsRight from './TheToolbarItemsRight.vue';

export default {
  components: {
    TheToolbarSide,
    TheToolbarTitle,
    TheToolbarItemsRight,
  },
  computed: {
    ...mapState('Authentication', ['isAuthenticated']),
  },
};
</script>
