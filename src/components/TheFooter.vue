<template>
  <v-footer class="pa-3 grey lighten-3">
    <v-spacer></v-spacer>
    <VersionApp/>
  </v-footer>
</template>

<script>
import VersionApp from './VersionApp.vue';

export default {
  components: {
    VersionApp,
  },
};
</script>
