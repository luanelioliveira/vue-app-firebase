<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 md6 lg4 xl3>
        <v-card class="elevation-1">
          <v-card-title primary-title>
            <div>
              <div class="display-1 font-weight-thin">Criar uma conta</div>
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
              <v-btn depressed color="primary" type="submit">Criar minha conta</v-btn>
              <v-btn depressed color="primary" @click="$router.go(-1)">
                Voltar
                <v-icon right>arrow_back</v-icon>
              </v-btn>
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
      name: '',
      email: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    ...mapActions('Authentication', ['signUp']),
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
