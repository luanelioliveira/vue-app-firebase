<template>
  <div v-if="isAdmin" >
    <v-list-group prepend-icon="build">
      <template v-slot:activator>
        <v-list-tile>
          <v-list-tile-title>Administração</v-list-tile-title>
        </v-list-tile>
      </template>
      <v-list-group no-action sub-group>
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Usuários</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-tile
          v-for="(user, i) in users"
          :key="i"
          :to="user[2]"
        >
          <v-list-tile-title v-text="user[0]">
          </v-list-tile-title>
          <v-list-tile-action>
            <v-icon v-text="user[1]"></v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      users: [
        ['Gerenciamento', 'people_outline', '/admin/users'],
        ['Configuração', 'settings', ''],
      ],
    };
  },
  computed: {
    ...mapGetters('Authentication', ['isAdmin']),
  },
};
</script>
