<template>
  <v-list class="pt-0" >
    <TheNavigationDrawerMenuItems />
    <TheNavigationDrawerMenuSignOut />
  </v-list>
</template>

<script>
import TheNavigationDrawerMenuItems from './TheNavigationDrawerMenuItems.vue';
import TheNavigationDrawerMenuSignOut from './TheNavigationDrawerMenuSignOut.vue';

export default {
  components: {
    TheNavigationDrawerMenuItems,
    TheNavigationDrawerMenuSignOut,
  },
};
</script>
