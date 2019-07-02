<template>
  <v-layout>
    <v-flex>
      <v-card class="elevation-0 transparent">
        <v-list two-line class="transparent">
          <MyServicesListView/>
        </v-list>
      </v-card>
    </v-flex>
    <BtnFloating />
  </v-layout>
</template>

<script>
import MyServicesListView from './MyServicesListView.vue';

export default {
  components: {
    MyServicesListView,
  },
};
</script>
