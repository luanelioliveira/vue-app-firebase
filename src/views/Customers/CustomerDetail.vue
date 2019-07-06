<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.stop="show=false">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title>Dados do Cliente</v-toolbar-title>
        <v-spacer></v-spacer>
          <CustomerEdit :customer="customer" :visible="show" @close="show=false" />
      </v-toolbar>
      <v-list three-line>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Nome</v-list-tile-title>
            <v-list-tile-sub-title>{{customer.name}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Desde</v-list-tile-title>
            <v-list-tile-sub-title>{{customer.createdAt | date}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-card-text>
          <v-layout wrap>
            <v-flex xs12>
              <CustomerAddPlans :customer="customer" />
            </v-flex>
          </v-layout>
      </v-card-text>      
    </v-card>
  </v-dialog>
</template>

<script>
import CustomerEdit from './CustomerEdit.vue';
import CustomerAddPlans from './CustomerAddPlans.vue';

export default {
  components: {
    CustomerEdit,
    CustomerAddPlans,
  },
  props: ['customer', 'visible'],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit('close');
        }
      },
    },
  },
};
</script>
