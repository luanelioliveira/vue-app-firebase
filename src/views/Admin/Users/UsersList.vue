<template>
  <v-card class="elevation-0 transparent">
    <v-list two-line class="transparent">
      <template v-for="(item, index) in users">
        <v-list-tile
          avatar
          :key="index"
          @click.stop="setUser(item)"
        >
          <v-list-tile-avatar>
            <img :src="item.photoURL">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.displayName }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.email }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn flat icon color="primary">
              <v-icon>navigate_next</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider :key="item.uid" inset></v-divider>
      </template>
      <UserDetail :user="userDetail" :visible="dialog" @close="dialog=false" />
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UserDetail from './UserDetail.vue';

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
  components: {
    UserDetail,
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
      this.dialog = true;
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
