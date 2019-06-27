<template>
  <div>
    <title-page :text="titlePage" />
    <v-flex xs12>
      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        hide-actions
        :pagination.sync="pagination"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.displayName }}</td>
          <td class="text-xs-left">{{ props.item.email }}</td>
          <td class="text-xs-left">{{ props.item.isAdmin ? 'Sim' : 'Não' }}</td>
          <td class="text-xs-left">{{ props.item.emailVerified ? 'Sim' : 'Não' }}</td>
          <td class="text-xs-left">{{ props.item.createdAt | date }}</td>
          <td class="text-xs-left">{{ props.item.updatedAt | date }}</td>
          <td class="text-xs-left">{{ props.item.lastLogin | date }}</td>
        </template>
      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </v-flex>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      titlePage: 'Usuários',
      search: '',
      pagination: {},
      selected: [],
      headers: [
        {
          text: 'Nome do usuário',
          align: 'left',
          value: 'displayName',
        },
        {
          text: 'E-mail',
          value: 'email',
        },
        {
          text: 'Admin?',
          value: 'isAdmin',
        },
        {
          text: 'E-mail validado?',
          value: 'emailVerified',
        },
        {
          text: 'Data de criação',
          value: 'createdAt',
        },
        {
          text: 'Data de atualização',
          value: 'updatedAt',
        },
        {
          text: 'Último acesso',
          value: 'lastLogin',
        },
      ],
    };
  },
  mounted() {
    this.getUsers();
  },
  computed: {
    ...mapGetters('Users', ['users']),
    pages() {
      if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) {
        return 0;
      }
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage);
    },
  },
  methods: {
    ...mapActions('Users', ['getUsers']),
  },
};
</script>
