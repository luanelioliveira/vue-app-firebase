<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="elevation-0 transparent">
        <v-list class="transparent">
          <v-list-tile
            v-for="item in clients"
            :key="item.title"
            avatar
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon color="primary">navigate_next</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <v-btn
        dark
        fab
        fixed
        bottom
        right
        color="primary"
      >
        <v-icon>add</v-icon>
      </v-btn>
  </v-layout>
</template>

<script>

export default {
  data() {
    return {
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
