<template>
  <v-layout>
    <v-flex>
      <v-card class="elevation-0 transparent">
        <v-list two-line class="transparent">
          <ServicesListView/>
        </v-list>
      </v-card>
    </v-flex>
    <BtnFloating />
  </v-layout>
</template>

<script>
import ServicesListView from './ServicesListView.vue';

export default {
  components: {
    ServicesListView,
  },
};
</script>
