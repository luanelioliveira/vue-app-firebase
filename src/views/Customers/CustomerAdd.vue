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
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field v-model="customer.name" label="Nome" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      customer: {
        name: '',
      },
      show: false,
      title: 'Novo Cliente',
    };
  },
  methods: {
    ...mapActions('Customers', ['addCustomer']),
    add() {
      const payload = {
        customer: this.customer,
      };
      this.addCustomer(payload);
      this.close();
      this.clearData();
    },
    clearData() {
      this.customer = {
        name: '',
      };
    },
    close() {
      this.show = false;
    },
  },
};
</script>
