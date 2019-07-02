<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click.stop="show=false">
        <v-icon>navigate_before</v-icon>
      </v-btn>
      <v-toolbar-title>Dados do Usuário</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn icon dark>
          <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
    <v-list three-line>
      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>Nome do usuário</v-list-tile-title>
          <v-list-tile-sub-title>{{user.displayName}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>Email do usuário</v-list-tile-title>
          <v-list-tile-sub-title>{{user.email}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title>Último acesso</v-list-tile-title>
          <v-list-tile-sub-title>{{user.lastLogin | date}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
    <v-list two-line subheader>
      <v-subheader>Geral</v-subheader>
      <v-list-tile>
        <v-list-tile-action>
          <v-checkbox disabled v-model="user.isAdmin"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Administrador</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-checkbox disabled v-model="user.emailVerify"></v-checkbox>
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

export default {
  props: ['user', 'visible'],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit('close');
        }
      },
    },
  },
};
</script>
