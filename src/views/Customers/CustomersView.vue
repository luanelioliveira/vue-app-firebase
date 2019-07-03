<template>
  <v-layout>
    <v-flex>
      <v-card class="elevation-0 transparent">
        <v-list class="transparent">
          <CustomersListView/>
        </v-list>
      </v-card>
    </v-flex>
    <CustomersAddView />
  </v-layout>
</template>

<script>
import CustomersListView from './CustomersListView.vue';
import CustomersAddView from './CustomersAddView.vue';

export default {
  components: {
    CustomersListView,
    CustomersAddView,
  },
};
</script>
