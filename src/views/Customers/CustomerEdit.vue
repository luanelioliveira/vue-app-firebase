<template>
  <v-dialog v-model="showEdit" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-btn icon dark color="primary" v-on="on">
        <v-icon>edit</v-icon>
      </v-btn>
    </template>  
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.stop="showEdit=false">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click.stop="update">
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
  props: ['customer'],
  data() {
    return {
      title: 'Alterar Cliente',
      showEdit: false,
    };
  },
  methods: {
    ...mapActions('Customers', ['updateCustomer']),
    update() {
      this.updateCustomer(this.customer);
      this.close();
    },
    close() {
      this.showEdit = false;
    },
  },
};
</script>
