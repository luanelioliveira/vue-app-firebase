<template>
  <v-app>
    <TheNavigationDrawer />
    <TheToolbar />
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheToolbar from './components/TheToolbar.vue';
import TheNavigationDrawer from './components/TheNavigationDrawer.vue';

export default {
  name: 'App',
  components: {
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
