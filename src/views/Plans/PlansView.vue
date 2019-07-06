<template>
  <v-layout>
    <v-flex>
      <PlansList />
    </v-flex>
  </v-layout>
</template>

<script>
import PlansList from './PlansList.vue';

export default {
  components: {
    PlansList,
  },
};
</script>
