<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-list-tile
        avatar v-for="item in users"
        :key="item.email"
        @click="setUser(item)"
        v-on="on"
      >
        <v-list-tile-avatar>
          <img :src="item.photoURL">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.displayName }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.email }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn flat icon v-on="on" color="primary">
            <v-icon>navigate_next</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>Dados do usuário</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon dark @click="dialog = false">
            <v-icon>navigate_before</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list three-line>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Nome do usuário</v-list-tile-title>
            <v-list-tile-sub-title>{{userDetail.displayName}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Email do usuário</v-list-tile-title>
            <v-list-tile-sub-title>{{userDetail.email}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Último acesso</v-list-tile-title>
            <v-list-tile-sub-title>{{userDetail.lastLogin | date}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list three-line subheader>
        <v-subheader>Geral</v-subheader>
        <v-list-tile avatar>
          <v-list-tile-action>
            <v-checkbox disabled v-model="userDetail.isAdmin"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Administrador</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-action>
            <v-checkbox disabled v-model="userDetail.emailVerify"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Email validado</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      userDetail: {
        displayName: '',
        email: '',
        isAdmin: false,
        emailVerify: false,
        lastLogin: '',
      },
      dialog: false,
    };
  },
  mounted() {
    this.getUsers();
  },
  computed: {
    ...mapGetters('Users', ['users']),
  },
  methods: {
    ...mapActions('Users', ['getUsers']),
    setUser(user) {
      this.userDetail = {
        displayName: user.displayName,
        email: user.email,
        isAdmin: user.isAdmin,
        emailVerify: user.emailVerify,
        lastLogin: user.lastLogin,
      };
    },
  },
};
</script>
