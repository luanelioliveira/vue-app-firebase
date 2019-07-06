<template>

  <v-card class="elevation-0 transparent">
    <v-list class="transparent">
      <v-list-tile
        v-for="plan in plans"
        :key="plan.id"
        avatar
        three-line
        @click.stop="setPlan(plan)"
      >
        <v-list-tile-avatar>
          <v-icon large>loyalty</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
          {{plan.name}}
          </v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon color="primary">navigate_next</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <PlanEdit :data="planDetail" :visible="dialog" @close="dialog=false" />
      <PlanAdd />
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PlanEdit from './PlanEdit.vue';
import PlanAdd from './PlanAdd.vue';

export default {
  components: {
    PlanEdit,
    PlanAdd,
  },
  data() {
    return {
      dialog: false,
      planDetail: {
        id: '',
        name: '',
        creatorId: '',
        createdAt: '',
        status: '',
      },
    };
  },
  mounted() {
    this.getPlans();
  },
  computed: {
    ...mapState('Plans', ['plans']),
  },
  methods: {
    ...mapActions('Plans', ['getPlans']),
    setPlan(plan) {
      this.planDetail = {
        id: plan.id,
        name: plan.name,
        creatorId: plan.creatorId,
        createdAt: plan.createdAt,
        status: plan.status,
      };
      this.dialog = true;
    },
  },
};
</script>
