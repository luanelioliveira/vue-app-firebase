<template>
  <div id="navigation">
    <v-toolbar app dark flat color="primary" v-if="isAuthenticated">
      <v-toolbar-side-icon @click.stop="toogle"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{title}}</span>
        <span class="font-weight-light">{{subtitle}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="logout">Sign Out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <TheNavigationDrawer />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TheNavigationDrawer from './TheNavigationDrawer.vue';

export default {
  components: {
    TheNavigationDrawer,
  },
  data() {
    return {
      title: 'Example',
      subtitle: 'App',
    };
  },
  computed: {
    ...mapState('Authentication', ['isAuthenticated']),
    ...mapState('Application', ['drawer']),
  },
  methods: {
    ...mapActions('Authentication', ['signOut']),
    ...mapActions('Application', ['setDrawer']),
    logout() {
      this.signOut();
    },
    toogle() {
      this.setDrawer(!this.drawer);
    },
  },
};
</script>
