<template>
  <div>
    <v-list-tile
      v-for="customer in customers"
      :key="customer.title"
      avatar
      @click.stop="dialog = true"
    >
      <v-list-tile-avatar color="primary">
        <span class="white--text headline">{{customer.name[0]}}</span>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title v-html="customer.name"></v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon color="primary">navigate_next</v-icon>
      </v-list-tile-action>
    </v-list-tile>
    <CustomersListDetailView
      :visible="dialog" @close="dialog=false"
    />
  </div>
</template>

<script>
import CustomersListDetailView from './CustomersListDetailView.vue';

export default {
  components: {
    CustomersListDetailView,
  },
  data() {
    return {
      dialog: false,
      customers: [
        {
          name: 'Jason Oner',
          photoURL: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
        {
          name: 'Ranee Carlson',
          photoURL: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        },
        {
          name: 'Cindy Baker',
          photoURL: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        },
        {
          name: 'Ali Connors',
          photoURL: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        },
      ],
    };
  },
};
</script>
