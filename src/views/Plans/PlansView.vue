<template>
  <v-layout>
    <v-flex>
      <v-card class="elevation-0 transparent">
        <v-list class="transparent">
          <PlansListView/>
        </v-list>
      </v-card>
    </v-flex>
    <PlansAddView />
  </v-layout>
</template>

<script>
import PlansListView from './PlansListView.vue';
import PlansAddView from './PlansAddView.vue';

export default {
  components: {
    PlansListView,
    PlansAddView,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
