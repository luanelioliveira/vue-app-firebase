<template>
  <div>
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
    <PlansEditView
      :data="planDetail" :visible="dialog" @close="dialog=false"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PlansEditView from './PlansEditView.vue';

export default {
  components: {
    PlansEditView,
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
