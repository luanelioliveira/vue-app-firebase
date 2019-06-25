<template>
  <div>
    <v-list two-line class="pa-1" >
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{currentUser.displayName}}</v-list-tile-title>
          <v-list-tile-sub-title>{{currentUser.email}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('Authentication', ['currentUser']),
  },
};
</script>
