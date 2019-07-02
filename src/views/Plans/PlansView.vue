<template>
  <v-layout>
    <v-flex>
      <v-card class="elevation-0 transparent">
        <v-list class="transparent">
          <PlansListView/>
        </v-list>
      </v-card>
    </v-flex>
    <BtnFloating />
  </v-layout>
</template>

<script>
import PlansListView from './PlansListView.vue';

export default {
  components: {
    PlansListView,
  },
};
</script>
