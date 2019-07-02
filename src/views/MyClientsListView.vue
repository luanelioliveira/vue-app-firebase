<template>
  <div>
    <v-list-tile
      v-for="item in clients"
      :key="item.title"
      avatar
      @click.stop="dialog = true"
    >
      <v-list-tile-avatar color="primary">
        <span class="white--text headline">{{item.title[0]}}</span>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title v-html="item.title"></v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon color="primary">navigate_next</v-icon>
      </v-list-tile-action>
    </v-list-tile>
    <MyClientsListDetailView
      :visible="dialog" @close="dialog=false"
    />
  </div>
</template>

<script>
import MyClientsListDetailView from './MyClientsListDetailView.vue';


export default {
  components: {
    MyClientsListDetailView,
  },
  data() {
    return {
      dialog: false,
      clients: [
        {
          title: 'Jason Oner',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        },
        {
          title: 'Ranee Carlson',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        },
        {
          title: 'Cindy Baker',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        },
        {
          title: 'Ali Connors',
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        },
      ],
    };
  },
};
</script>
