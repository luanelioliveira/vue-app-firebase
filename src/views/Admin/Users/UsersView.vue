<template>
  <v-layout>
    <v-flex>
      <UsersList/>
    </v-flex>
  </v-layout>
</template>

<script>
import UsersList from './UsersList.vue';

export default {
  components: {
    UsersList,
  },
};
</script>
