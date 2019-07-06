<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click.stop="show=false">
        <v-icon>navigate_before</v-icon>
      </v-btn>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            icon
            v-on="on"
          >
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-tile @click="update">
            <v-list-tile-title>Atualizar</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field v-model="data.name" label="Nome do plano*" required></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
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
