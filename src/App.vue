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
    <TheFooter />
  </v-app>
</template>

<script>
import LoadingPage from './components/LoadingPage.vue';
import TheToolbar from './components/TheToolbar.vue';
import TheNavigationDrawer from './components/TheNavigationDrawer.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    LoadingPage,
    TheToolbar,
    TheNavigationDrawer,
    TheFooter,
  },
  data() {
    return {
      //
    };
  },
};
</script>
