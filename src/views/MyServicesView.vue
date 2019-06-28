<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="elevation-0 transparent">
        <v-list two-line class="transparent">
          <v-list-tile
            v-for="item in services"
            :key="item.title"
            avatar
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
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
      services: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Jason Oner',
          subtitle: 'Jun 9, 2019',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Ranee Carlson',
          subtitle: 'Jun 9, 2019',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Ranee Carlson',
          subtitle: 'Jun 10, 2019',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Ali Connors',
          subtitle: 'Jun 11, 2019',
        },
      ],
    };
  },
};
</script>
