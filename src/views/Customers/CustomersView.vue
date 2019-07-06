<template>
  <v-layout>
    <v-flex>
      <CustomersList />
    </v-flex>
  </v-layout>
</template>

<script>
import CustomersList from './CustomersList.vue';

export default {
  components: {
    CustomersList,
  },
};
</script>
