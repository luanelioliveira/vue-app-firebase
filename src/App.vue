<template>
  <v-app>
    <TheNavigationDrawer />
    <TheToolbar />
    <v-content transition="fade-transition">
        <Loading />
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import TheToolbar from './components/TheToolbar.vue';
import TheNavigationDrawer from './components/TheNavigationDrawer.vue';
import Loading from '@/components/LoadingPage.vue';

export default {
  name: 'App',
  components: {
    TheToolbar,
    TheNavigationDrawer,
    Loading,
  },
  data() {
    return {
      //
    };
  },
};
</script>
