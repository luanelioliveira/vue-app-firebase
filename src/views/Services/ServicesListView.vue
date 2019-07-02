<template>
  <div>
    <v-list-tile
      v-for="(service, index) in services"
      :key="index"
      avatar
      @click.stop="dialog = true"
    >
      <v-list-tile-avatar color="primary">
        <span class="white--text headline">{{service.customer.name[0]}}</span>
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title>{{ service.customer.name }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ service.date }}</v-list-tile-sub-title>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-btn icon ripple>
          <v-icon color="grey lighten-1">info</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
    <ServicesListDetailView
     :visible="dialog" @close="dialog=false"
    />
  </div>
</template>

<script>
import ServicesListDetailView from './ServicesListDetailView.vue';

export default {
  components: {
    ServicesListDetailView,
  },
  data() {
    return {
      dialog: false,
      services: [
        {
          customer: {
            uid: 1,
            name: 'Jason Oner',
          },
          plan: {
            uid: 1,
            name: 'Plano Iniciante',
          },
          quantity: 1,
          date: '10 min',
        },
        {
          customer: {
            uid: 2,
            name: 'Ranee Carlson',
          },
          plan: {
            uid: 1,
            name: 'Plano Iniciante',
          },
          quantity: 1,
          date: '2 hr',
        },
        {
          customer: {
            uid: 3,
            name: 'Ali Connors',
          },
          plan: {
            uid: 1,
            name: 'Plano Intermediário',
          },
          quantity: 1,
          date: 'Hoje 20:20',
        },
        {
          customer: {
            uid: 4,
            name: 'Carlson Ali',
          },
          plan: {
            uid: 1,
            name: 'Plano Avançado',
          },
          quantity: 1,
          date: '23 de junho 11:20',
        },
      ],
    };
  },
};
</script>
