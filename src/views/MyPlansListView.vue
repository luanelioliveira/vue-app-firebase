<template>
  <div>
    <v-list-tile
      v-for="item in plans"
      :key="item.title"
      avatar
      @click.stop="dialog = true"
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
    <MyPlansListDetailView
      :visible="dialog" @close="dialog=false"
    />
  </div>
</template>

<script>
import MyPlansListDetailView from './MyPlansListDetailView.vue';

export default {
  components: {
    MyPlansListDetailView,
  },
  data() {
    return {
      dialog: false,
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
