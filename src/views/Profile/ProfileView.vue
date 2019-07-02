<template>
  <v-layout
    column
    wrap
    justify-space-around
  >
    <v-flex xs12 md3>
      <v-card class="elevation-0 transparent">
        <v-card-text>
          <v-avatar
            size="180"
            color="grey lighten-4"
          >
            <img :src="userProfile.photoURL" alt="avatar">
          </v-avatar>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md9>
      <v-card class="elevation-0 transparent">
        <v-card-text>
          <v-flex
            xs12
            md6
          >
            <v-text-field
              v-model="userProfile.displayName"
              disabled
              :counter="50"
              label="Nome do usuário"
              required
            ></v-text-field>
          </v-flex>
          <v-flex
            xs12
            md6
          >
            <v-text-field
              v-model="userProfile.email"
              disabled
              label="E-mail"
              required
            ></v-text-field>
          </v-flex>
        </v-card-text>
        <v-card-actions>
          <v-btn class="ml-0 primary" disabled>Salvar Alterações</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
</v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      titlePage: 'Meu Perfil',
      userProfile: {
        displayName: null,
        email: null,
        photoURL: null,
        lastLogin: null,
      },
    };
  },
  mounted() {
    this.userProfile.displayName = this.currentUser.displayName;
    this.userProfile.email = this.currentUser.email;
    this.userProfile.photoURL = this.currentUser.photoURL;
    this.userProfile.lastLogin = this.currentUser.lastLogin;
  },
  computed: {
    ...mapState('Authentication', ['currentUser']),
  },
};
</script>
