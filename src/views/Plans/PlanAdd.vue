<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
  <template v-slot:activator="{ on }">
    <v-btn
      dark
      fab
      fixed
      bottom
      right
      v-on="on"
      color="primary"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click.stop="show=false">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon dark @click.stop="add">
        <v-icon>send</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field v-model="plan.name" label="Nome" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      plan: {
        name: '',
      },
      show: false,
      title: 'Novo Plano',
    };
  },
  methods: {
    ...mapActions('Plans', ['addPlan']),
    add() {
      const payload = {
        plan: this.plan,
      };
      this.addPlan(payload);
      this.close();
      this.clearData();
    },
    clearData() {
      this.plan = {
        name: '',
      };
    },
    close() {
      this.show = false;
    },
  },
};
</script>
