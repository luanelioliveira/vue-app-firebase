<template>
  <div>
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
        <v-divider          
          inset
        ></v-divider>        
      </template>        
      <AdminUsersListDetailView 
       :user="userDetail"
       :visible="dialog" @close="dialog=false"
      />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AdminUsersListDetailView from './AdminUsersListDetailView.vue';

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
    AdminUsersListDetailView,
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
