<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-btn
        depressed block large color="primary"
        v-on="on"
      >
        Adicionar Planos
      </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.stop="show=false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list class="transparent">
        <v-list-tile
          v-for="plan in plans"
          :key="plan.id"
          avatar
          three-line
        >
          <v-list-tile-avatar>
            <v-icon large>loyalty</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
            {{plan.name}}
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn dark fab small color="primary" @click.stop="add(plan)">
              <v-icon>add</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-snackbar
        v-model="snackbar"
        color="success"
        multi-line
        timeout="3000"
      >
        {{snackbarMessage}}
        <v-btn
          dark
          flat
          @click="snackbar = false"
        >
          Fechar
        </v-btn>
      </v-snackbar>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: ['customer'],
  data() {
    return {
      show: false,
      snackbar: false,
      snackbarMessage: '',
      title: 'Planos',
    };
  },
  mounted() {
    this.getPlans();
  },
  computed: {
    ...mapState('Plans', ['plans']),
  },
  methods: {
    ...mapActions('Plans', ['getPlans']),
    ...mapActions('Customers', ['addPlan']),
    add(planAdd) {
      const data = {
        customer: this.customer,
        plan: planAdd,
      };
      this.addPlan(data);
      this.snackbarMessage = `Plano ${data.name} foi adicionado com sucesso!`;
      this.snackbar = true;
    },
  },
};
</script>
