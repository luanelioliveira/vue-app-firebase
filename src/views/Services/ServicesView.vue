<template>
  <v-layout>
    <v-flex>
      <ServicesList />
    </v-flex>
  </v-layout>
</template>

<script>
import ServicesList from './ServicesList.vue';

export default {
  components: {
    ServicesList,
  },
};
</script>
