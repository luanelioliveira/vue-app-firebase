<template>
  <v-layout>
    <v-flex>
      <v-card class="elevation-0 transparent">
        <v-list class="transparent">
          <MyClientsListView/>
        </v-list>
      </v-card>
    </v-flex>
    <BtnFloating />
  </v-layout>
</template>

<script>
import MyClientsListView from './MyClientsListView.vue';

export default {
  components: {
    MyClientsListView,
  },
};
</script>
