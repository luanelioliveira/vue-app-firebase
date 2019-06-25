<template>
  <v-btn flat @click="logout">Sair</v-btn>
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
