<template>
  <v-app>
    <TheNavigationDrawer />
    <TheToolbar />
    <v-content>
      <v-container fluid>
        <loading-page/>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LoadingPage from './components/LoadingPage.vue';
import TheToolbar from './components/TheToolbar.vue';
import TheNavigationDrawer from './components/TheNavigationDrawer.vue';

export default {
  name: 'App',
  components: {
    LoadingPage,
    TheToolbar,
    TheNavigationDrawer,
  },
  data() {
    return {
      //
    };
  },
};
</script>
