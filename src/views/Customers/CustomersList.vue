<template>
  <v-card class="elevation-0 transparent">
    <v-list class="transparent">
      <v-list-tile
        v-for="customer in customers"
        :key="customer.title"
        avatar
        @click.stop="setCustomer(customer)"
      >
        <v-list-tile-avatar color="primary">
          <span class="white--text headline">{{customer.name[0]}}</span>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html="customer.name"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon color="primary">navigate_next</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <CustomerDetail :customer="customer" :visible="dialog" @close="dialog=false" />
      <CustomerAdd />
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CustomerDetail from './CustomerDetail.vue';
import CustomerAdd from './CustomerAdd.vue';

export default {
  components: {
    CustomerDetail,
    CustomerAdd,
  },
  data() {
    return {
      dialog: false,
      customer: {
        id: '',
        name: '',
        creatorId: '',
        createdAt: '',
        status: '',
      },
    };
  },
  mounted() {
    this.getCustomers();
  },
  computed: {
    ...mapState('Customers', ['customers']),
  },
  methods: {
    ...mapActions('Customers', ['getCustomers']),
    setCustomer(data) {
      this.customer = {
        id: data.id,
        name: data.name,
        creatorId: data.creatorId,
        createdAt: data.createdAt,
        status: data.status,
      };
      this.dialog = true;
    },
  },
};
</script>
