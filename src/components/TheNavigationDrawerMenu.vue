<template>
  <div>
    <v-list class="pt-0" dense>
      <TheNavigationDrawerMenuDefault />
      <TheNavigationDrawerMenuAdmin />
      <TheNavigationDrawerMenuSignOut />
    </v-list>
  </div>
</template>

<script>
import TheNavigationDrawerMenuDefault from './TheNavigationDrawerMenuDefault.vue';
import TheNavigationDrawerMenuAdmin from './TheNavigationDrawerMenuAdmin.vue';
import TheNavigationDrawerMenuSignOut from './TheNavigationDrawerMenuSignOut.vue';

export default {
  components: {
    TheNavigationDrawerMenuDefault,
    TheNavigationDrawerMenuAdmin,
    TheNavigationDrawerMenuSignOut,
  },
};
</script>
