<template>
  <v-container fill-height text-xs-center>
    <v-layout justify-center align-center>
      <v-flex xs10 sm6 md6 lg4 xl3>
        <v-card class="elevation-1">
          <v-toolbar class="elevation-0" dark color="primary">
            <v-toolbar-title>Efetuar Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
               prepend-icon="person"
               name="login"
               label="Login"
               type="text">
              </v-text-field>
              <v-text-field
               prepend-icon="lock"
               name="password"
               label="Password"
               id="password"
               type="password"></v-text-field>
            <v-btn color="primary" type="submit">Entrar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      title: 'Example',
      subtitle: 'App',
    };
  },
  methods: {
    ...mapActions('Authentication', ['signIn']),
    login() {
      const user = {
        login: this.login,
        password: this.password,
      };
      this.signIn(user);
    },
  },
};
</script>
