<template>
  <v-layout>
    <v-flex>
      <v-card class="elevation-0 transparent">
        <v-list class="transparent">
          <MyPlansListView/>
        </v-list>
      </v-card>
    </v-flex>
    <BtnFloating />
  </v-layout>
</template>

<script>
import MyPlansListView from './MyPlansListView.vue';

export default {
  components: {
    MyPlansListView,
  },
};
</script>
