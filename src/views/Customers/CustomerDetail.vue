<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.stop="show=false">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title>Dados do Cliente</v-toolbar-title>
        <v-spacer></v-spacer>
          <CustomerEdit :visible="show" @close="show=false" />
      </v-toolbar>
      <v-list two-line>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Nome</v-list-tile-title>
            <v-list-tile-sub-title>{{currentCustomer.name}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Cliente Desde</v-list-tile-title>
            <v-list-tile-sub-title>{{currentCustomer.createdAt | date}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <CustomerPlansList />
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import CustomerEdit from './CustomerEdit.vue';
import CustomerPlansList from './CustomerPlansList.vue';

export default {
  components: {
    CustomerEdit,
    CustomerPlansList,
  },
  props: ['customer', 'visible'],
  computed: {
    ...mapState('Customers', ['currentCustomer']),
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
