<template>
  <v-app>
    <TheToolbar />
    <TheNavigationDrawer />
    <v-container>
      <v-layout column wrap>
        <v-content>
          <router-view/>
        </v-content>
      </v-layout>
    </v-container>
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
