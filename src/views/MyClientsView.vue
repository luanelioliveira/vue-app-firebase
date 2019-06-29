<template>
  <v-layout>
    <v-flex>
      <v-card class="elevation-0 transparent">
        <v-list class="transparent">
          <v-list-tile
            v-for="item in clients"
            :key="item.title"
            avatar
            @click=""
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
        </v-list>
      </v-card>
    </v-flex>
    <BtnFloating />
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
