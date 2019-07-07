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
            <v-list-tile-title>Cliente Desde</v-list-tile-title>
            <v-list-tile-sub-title>{{customer.createdAt | date}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <CustomerPlansList />
      <v-card-text>
        <CustomerAddPlans :customer="customer" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import CustomerEdit from './CustomerEdit.vue';
import CustomerAddPlans from './CustomerAddPlans.vue';
import CustomerPlansList from './CustomerPlansList.vue';

export default {
  components: {
    CustomerEdit,
    CustomerAddPlans,
    CustomerPlansList,
  },
  props: ['customer', 'visible'],
  computed: {
    ...mapState('Customers', ['customerPlans']),
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
