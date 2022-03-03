<template>
  <base-card class="credential container">
    <base-card-title
      ><router-link to="/credential-management"
        >Credential Management</router-link
      ></base-card-title
    >
    <div class="row">
      <div
        class="col"
        v-for="credentialManagement in credentialManagements"
        :key="credentialManagement.id"
      >
        <popover-button
          :description="credentialManagement.description"
          :title="credentialManagement.title"
        >
          {{ credentialManagement.title }}
        </popover-button>
      </div>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import BaseCardTitle from "./UI/BaseCardTitle.vue";
import PopoverButton from "./UI/PopoverButton.vue";
import credentialManagement from "../resources/credentialManagement.json";

export default {
  components: {
    PopoverButton,
    BaseCardTitle,
    BaseCard,
  },
  data() {
    return {
      credentialManagements: credentialManagement,
    };
  },
  methods: {},
};
</script>

<style>
.credential {
  background-color: #008000;
}
</style>
