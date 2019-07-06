<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.stop="show=false">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click.stop="update">
          <v-icon>send</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field v-model="data.name" label="Nome do plano*" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['visible', 'data'],
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
  methods: {
    ...mapActions('Plans', ['updatePlan']),
    update() {
      this.updatePlan(this.data);
      this.show = false;
    },
  },
};
</script>
