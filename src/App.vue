<template>
  <v-app>
    <TheNavigationDrawer />
    <TheToolbar />
    <v-content transition="fade-transition">
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <TheFooter />
    <loading-page/>
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
