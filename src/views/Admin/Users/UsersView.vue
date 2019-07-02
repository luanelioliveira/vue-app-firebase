<template>
  <v-layout>
    <v-flex>
      <v-card class="elevation-0 transparent">
        <v-list two-line class="transparent">
          <AdminUsersListView/>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AdminUsersListView from './UsersListView.vue';

export default {
  components: {
    AdminUsersListView,
  },
};
</script>
