<template>
  <v-app>
    <TheToolbar />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import TheToolbar from './components/TheToolbar.vue';

export default {
  name: 'App',
  components: {
    TheToolbar,
  },
  data() {
    return {
      //
    };
  },
};
</script>
