<template>
  <base-card class="access">
    <card-title
      ><router-link to="/access-management"
        >Access <br />Management</router-link
      ></card-title
    >
    <popover-button
      v-for="accessManagement in accessManagements"
      :description="accessManagement.description"
      :title="accessManagement.title"
      :key="accessManagement.id"
    >
      {{ accessManagement.title }}
    </popover-button>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import PopoverButton from "./UI/PopoverButton.vue";
import CardTitle from "./UI/BaseCardTitle.vue";
import accessManagement from "../resources/accessManagement.json";

export default {
  components: {
    BaseCard,
    PopoverButton,
    CardTitle,
  },
  data() {
    return {
      accessManagements: accessManagement,
    };
  },
};
</script>

<style>
.access {
  background-color: #004cb1;
}
</style>
