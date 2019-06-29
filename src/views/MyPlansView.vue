<template>
  <v-layout>
    <v-flex>
      <v-card class="elevation-0 transparent">
        <v-list class="transparent">
          <v-list-tile
            v-for="item in plans"
            :key="item.title"
            avatar
            @click=""
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
      <BtnFloating />
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data() {
    return {
      plans: [
        {
          title: 'Plano Iniciante',
          icon: 'directions_walk',
        },
        {
          title: 'Plano Intermediário',
          icon: 'directions_run',
        },
        {
          title: 'Plano Atleta',
          icon: 'directions_bike',
        },
      ],
    };
  },
};
</script>
