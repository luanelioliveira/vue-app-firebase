<template>
  <div>
    <v-list two-line class="pa-1" >
      <v-list-tile avatar>
        <router-link to="/profile">
          <v-list-tile-avatar>
            <img :src="currentUser.photoURL">
          </v-list-tile-avatar>
        </router-link>
        <v-list-tile-content>
          <v-list-tile-title>{{currentUser.displayName}}</v-list-tile-title>
          <v-list-tile-sub-title>{{currentUser.email}}</v-list-tile-sub-title>
        </v-list-tile-content>
        <TheNavigationDrawerProfileClosed/>
      </v-list-tile>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheNavigationDrawerProfileClosed from './TheNavigationDrawerProfileClosed.vue';

export default {
  components: {
    TheNavigationDrawerProfileClosed,
  },
  computed: {
    ...mapState('Authentication', ['currentUser']),
  },
};
</script>
