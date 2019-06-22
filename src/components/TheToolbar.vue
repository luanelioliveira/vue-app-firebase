<template>
    <v-toolbar app dark flat color="primary" v-if="isAuthenticated">
      <v-toolbar-title class="headline text-uppercase">
        <span>{{title}}</span>
        <span class="font-weight-light">{{subtitle}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/login" v-if="!isAuthenticated">
        <span>Sign In</span>
      </v-btn>
      <v-btn flat @click="logout">
        <span>Sign Out</span>
      </v-btn>
    </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      title: 'Example',
      subtitle: 'App',
    };
  },
  computed: {
    ...mapState('Authentication', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('Authentication', ['signOut']),
    logout() {
      this.signOut();
    },
  },
};
</script>
