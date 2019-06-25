<template>
  <v-navigation-drawer
    v-model="statusDrawer"
    fixed
    clipped
    app
  >
    <TheNavigationDrawerProfile />
    <TheNavigationDrawerMenu />
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TheNavigationDrawerProfile from './TheNavigationDrawerProfile.vue';
import TheNavigationDrawerMenu from './TheNavigationDrawerMenu.vue';

export default {
  components: {
    TheNavigationDrawerProfile,
    TheNavigationDrawerMenu,
  },
  computed: {
    ...mapState('Application', ['drawer']),
    statusDrawer: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.setDrawer(value);
      },
    },
  },
  methods: {
    ...mapActions('Application', ['setDrawer']),
  },
};
</script>
