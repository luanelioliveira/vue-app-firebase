<template>
  <div>
    <v-list-tile @click="logout">
      <v-list-tile-action>
        <v-icon>exit_to_app</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Sair</v-list-tile-title>
    </v-list-tile>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('Authentication', ['signOut']),
    logout() {
      this.signOut();
    },
  },
};
</script>
