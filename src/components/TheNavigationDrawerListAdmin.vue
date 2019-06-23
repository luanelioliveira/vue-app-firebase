<template>
  <div>
    <v-list-tile to="/dashboard">
      <v-list-tile-action>
        <v-icon>dashboard</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Dashboard</v-list-tile-title>
    </v-list-tile>
    <v-list-group
      prepend-icon="build"
      value="true"
    >
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-title>Administração</v-list-tile-title>
        </v-list-tile>
      </template>
      <v-list-group
        no-action
        sub-group
        value="true"
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Usuários</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list-tile
          v-for="(user, i) in users"
          :key="i"
          to=""
        >
          <v-list-tile-title v-text="user[0]"></v-list-tile-title>
          <v-list-tile-action>
            <v-icon v-text="user[1]"></v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list-group>
  </div>
</template>

<script>

export default {
  data() {
    return {
      users: [
        ['Gerenciamento', 'people_outline'],
        ['Configuração', 'settings'],
      ],
    };
  },
};
</script>
