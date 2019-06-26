<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm10 md8 lg5 xl4>
        <v-card class="elevation-0 transparent">
          <v-card-title primary-title>
            <div>
              <div class="display-1 font-weight-thin">Criar Conta</div>
              <span class="grey--text">Informe seu dados para criar sua conta!</span>
            </div>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="signup">
              <v-text-field
               outline
               v-model="name"
               append-icon="account_circle"
               name="name"
               label="Nome Completo"
               type="text">
              </v-text-field>
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
               depressed block large
               :loading="loading"
               :disabled="loading"
               @click="loader = 'loading'"
               color="primary"
               type="submit">
                Criar minha conta
              </v-btn>
              <v-btn class="ml-0" depressed flat color="primary" @click="$router.go(-1)">
                Voltar
                <v-icon right>arrow_back</v-icon>
              </v-btn>
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
      name: '',
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
    ...mapActions('Authentication', ['signUp']),
    ...mapActions('Application', ['clearError']),
    signup() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.signUp(user);
    },
  },
};
</script>
