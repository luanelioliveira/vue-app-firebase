<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click.stop="show=false">
        <v-icon>navigate_before</v-icon>
      </v-btn>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon dark>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  </v-dialog>
</template>

<script>

export default {
  props: ['visible'],
  data() {
    return {
      title: 'Detalhes do Plano',
    };
  },
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit('close');
        }
      },
    },
  },
};
</script>
