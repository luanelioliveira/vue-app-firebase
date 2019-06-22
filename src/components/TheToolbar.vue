<template>
    <v-toolbar flat app color="primary" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{title}}</span>
        <span class="font-weight-light">{{subtitle}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/login" >
        <span>Sign In</span>
      </v-btn>
    </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      title: 'Example',
      subtitle: 'App',
    };
  },
};
</script>
