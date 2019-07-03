<template>
  <div>
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
    <CustomersEditView
      :data="customerDetail" :visible="dialog" @close="dialog=false"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CustomersEditView from './CustomersEditView.vue';

export default {
  components: {
    CustomersEditView,
  },
  data() {
    return {
      dialog: false,
      customerDetail: {
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
    setCustomer(customer) {
      this.customerDetail = {
        id: customer.id,
        name: customer.name,
        creatorId: customer.creatorId,
        createdAt: customer.createdAt,
        status: customer.status,
      };
      this.dialog = true;
    },
  },
};
</script>
