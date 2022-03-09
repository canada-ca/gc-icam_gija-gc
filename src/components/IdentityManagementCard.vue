<template>
  <base-card class="identity">
    <card-title
      ><router-link to="/identity-management"
        >Identity <br />Management</router-link
      ></card-title
    >
    <combined-button
      v-for="identityManagement in identityManagements"
      :buttonInfo="identityManagement"
      :key="identityManagement.id"
      @click="this.$parent.showDetail(identityManagement)"
    >
    </combined-button>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import CardTitle from "./UI/BaseCardTitle.vue";
import CombinedButton from "./UI/CombinedButton.vue";
import identityManagements from "../resources/identityManagement.json";
export default {
  components: {
    BaseCard,
    CombinedButton,
    CardTitle
  },
  data() {
    return {
      identityManagements
    };
  }
};
</script>

<style>
.identity {
  background-color: #c00000;
}
</style>
