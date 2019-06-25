<template>
  <v-btn flat small @click="logout">
    Sair
    <v-icon right dark>exit_to_app</v-icon>
  </v-btn>
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
