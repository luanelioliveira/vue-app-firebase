<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm10 md8 lg6 xl4>
        <v-card class="elevation-1">
          <v-toolbar dark class="elevation-0" color="secondary">
            <v-toolbar-title>
              {{title}}
            </v-toolbar-title>
          </v-toolbar>
          <v-card-title primary-title>
            <div>
              <div class="display-1 font-weight-thin">Acessar Conta</div>
              <span class="grey--text">Informe seu e-mail e senha para acessar sua conta</span>
            </div>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
               outline
               v-model="email"
               append-icon="email"
               name="email"
               label="E-mail"
               type="text">
              </v-text-field>
              <v-text-field
               outline
               name="password"
               v-model="password"
               :append-icon="showPassword ? 'visibility' : 'visibility_off'"
               :type="showPassword ? 'text' : 'password'"
               label="Senha"
               id="password"
                @click:append="showPassword = !showPassword">
              </v-text-field>
            <v-btn
             depressed
             :loading="loading"
             :disabled="loading"
             color="primary"
             type="submit"
            >
             Acessar minha conta
            </v-btn>
            <v-btn outline color="primary" to="/signup">Criar conta</v-btn>
            </v-form>
          </v-card-text>          
        </v-card>
      </v-flex>
      
    </v-layout>
    <v-snackbar v-model="alert" :timeout="5000" absolute bottom multi-line>
      {{this.error}}
    <v-btn dark flat @click="alert = false">Fechar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
      alert: false,
    };
  },
  computed: {
    ...mapState('Application', ['title']),
    ...mapState('Application', ['error']),
    ...mapState('Application', ['loading']),
  },
  watch: {
    error(value) {
      if (value) {
        this.alert = true;
      }
    },
    alert(value) {
      if (!value) {
        this.clearError();
      }
    },
  },
  methods: {
    ...mapActions('Authentication', ['signIn']),
    ...mapActions('Application', ['clearError']),
    login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.signIn(user);
    },
  },
};
</script>
