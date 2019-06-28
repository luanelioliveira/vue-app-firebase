<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="elevation-0 transparent">
        <v-list class="transparent">
          <v-list-tile
            v-for="item in plans"
            :key="item.title"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
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
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data() {
    return {
      plans: [
        {
          title: 'Pacote Atleta',
          icon: 'directions_run',
        },
        {
          title: 'Pacote Iniciante',
          icon: 'directions_walk',
        },
        {
          title: 'Pacote Intermediário',
          icon: 'directions_bike',
        },
      ],
    };
  },
};
</script>
