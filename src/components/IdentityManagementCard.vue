<template>
  <base-card class="identity">
    <card-title
      ><router-link to="/identity-management"
        >Identity <br />Management</router-link
      ></card-title
    >
    <popover-button
      v-for="identityManagement in identityManagements"
      :description="identityManagement.description"
      :title="identityManagement.title"
      :key="identityManagement.id"
    >
      {{ identityManagement.title }}
    </popover-button>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import CardTitle from "./UI/BaseCardTitle.vue";
import PopoverButton from "./UI/PopoverButton.vue";
import identityManagements from "../resources/identityManagement.json";
export default {
  components: {
    BaseCard,
    PopoverButton,
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
