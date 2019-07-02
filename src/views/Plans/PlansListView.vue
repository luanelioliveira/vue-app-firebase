<template>
  <div>
    <v-list-tile
      v-for="plan in plans"
      :key="plan.title"
      avatar
      @click.stop="dialog = true"
    >
      <v-list-tile-avatar>
        <v-icon :class="[plan.iconClass]">{{ plan.icon }}</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title v-html="plan.name"></v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon color="primary">navigate_next</v-icon>
      </v-list-tile-action>
    </v-list-tile>
    <PlansListDetailView
      :visible="dialog" @close="dialog=false"
    />
  </div>
</template>

<script>
import PlansListDetailView from './PlansListDetailView.vue';

export default {
  components: {
    PlansListDetailView,
  },
  data() {
    return {
      dialog: false,
      plans: [
        {
          name: 'Plano Iniciante',
          icon: 'directions_walk',
        },
        {
          name: 'Plano Intermediário',
          icon: 'directions_run',
        },
        {
          name: 'Plano Atleta',
          icon: 'directions_bike',
        },
      ],
    };
  },
};
</script>
