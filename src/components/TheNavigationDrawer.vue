<template>
  <v-navigation-drawer
   v-model="statusDrawer"
   absolute
   temporary
  >
    <v-list two-line class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{currentUser.displayName}}</v-list-tile-title>
          <v-list-tile-sub-title>{{currentUser.email}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile to="/home">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>
      <TheNavigationDrawerListAdmin v-if="isAdmin"/>
      <v-list-tile @click="logout">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Sair</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import TheNavigationDrawerListAdmin from './TheNavigationDrawerListAdmin.vue';

export default {
  components: {
    TheNavigationDrawerListAdmin,
  },
  data() {
    return {
      users: [
        ['Gerenciamento', 'people_outline'],
        ['Configuração', 'settings'],
      ],
    };
  },
  computed: {
    ...mapState('Application', ['drawer']),
    ...mapState('Authentication', ['currentUser']),
    ...mapGetters('Authentication', ['isAdmin']),
    statusDrawer: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.setDrawer(value);
      },
    },
  },
  methods: {
    ...mapActions('Application', ['setDrawer']),
    ...mapActions('Authentication', ['signOut']),
    logout() {
      this.signOut();
    },
  },
};
</script>
