<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex>
        <h1 class='display-2 font-weight-bold mb-3'>
          This is an Users List page
        </h1>
        <p>
        {{users}}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  mounted() {
    this.getUsers();
    console.log(this.users);
  },
  computed: {
    ...mapGetters('Users', ['users']),
  },
  methods: {
    ...mapActions('Users', ['getUsers']),
  },
};
</script>
