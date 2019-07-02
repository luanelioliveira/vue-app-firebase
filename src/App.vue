<template>
  <v-app>
    <TheNavigationDrawer />
    <TheToolbar />
    <v-content transition="fade-transition">
        <router-view/>
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
