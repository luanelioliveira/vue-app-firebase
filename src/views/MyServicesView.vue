<template>
  <v-layout>
    <v-flex>
      <v-card class="elevation-0 transparent">
        <v-list two-line class="transparent">
          <v-list-tile
            v-for="(item, index) in services"
            :key="index"
            avatar
            @click=""
          >
            <v-list-tile-avatar color="primary">
              <span class="white--text headline">{{item.title[0]}}</span>
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
    <BtnFloating />
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
          subtitle: '10 min',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Carlson Ali',
          subtitle: '2 hr',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Ranee Carlson',
          subtitle: 'Hoje 20:20',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Ranee Carlson',
          subtitle: '23 de junho 11:20',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Ali Connors',
          subtitle: '24 de junho 10:11',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Ranee Jason',
          subtitle: '24 de junho 10:11',
        },
      ],
    };
  },
};
</script>
