<template>
  <v-card class="elevation-0 transparent">
    <v-list class="transparent">
      <v-subheader v-if="customerPlans.length">Planos disponíveis</v-subheader>
      <v-subheader v-else>Não há planos disponíveis</v-subheader>
      <v-list-tile
        v-for="plan in customerPlans"
        :key="plan.id"
      >
        <v-list-tile-content>
          <v-list-tile-title v-html="plan.name"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-menu
            bottom
            origin="center center"
            transition="scale-transition">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>more_vert</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-tile @click="detail(plan)">
                <v-list-tile-action><v-icon>info</v-icon></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Visualizar detalhes</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="_delete(plan)">
                <v-list-tile-action><v-icon>delete</v-icon></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Excluir plano</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-card-text>
      <CustomerAddPlans />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import CustomerAddPlans from './CustomerAddPlans.vue';

export default {
  components: {
    CustomerAddPlans,
  },
  computed: {
    ...mapState('Customers', ['customerPlans']),
  },
  methods: {
    detail(data) {
      console.log(data);
    },
    _delete(data) {
      console.log(data);
    },
  },
};
</script>
