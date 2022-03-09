<template>
  <base-card class="credential container">
    <base-card-title
      ><router-link to="/credential-management"
        >Credential Management</router-link
      ></base-card-title
    >
    <div class="row gx-0">
      <div
        class="col"
        v-for="credentialManagement in credentialManagements"
        :key="credentialManagement.id"
      >
        <combined-button
          :buttonInfo="credentialManagement"
          @click="this.$parent.showDetail(credentialManagement)"
        >
        </combined-button>
      </div>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import BaseCardTitle from "./UI/BaseCardTitle.vue";
import credentialManagement from "../resources/credentialManagement.json";
import CombinedButton from "./UI/CombinedButton.vue";

export default {
  components: {
    BaseCardTitle,
    BaseCard,
    CombinedButton
  },
  data() {
    return {
      credentialManagements: credentialManagement
    };
  }
};
</script>

<style>
.credential {
  background-color: #008000;
}
</style>
