<template>
  <v-app>
    <Toolbar />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
  },
  data() {
    return {
      //
    };
  },
};
</script>
