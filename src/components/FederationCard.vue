<template>
  <base-card class="federation">
    <card-title
      ><router-link to="/federation">Federation</router-link></card-title
    >
    <popover-button
      v-for="federation in federations"
      :description="federation.description"
      :title="federation.title"
      :key="federation.id"
    >
      {{ federation.title }}
    </popover-button>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import PopoverButton from "./UI/PopoverButton.vue";
import CardTitle from "./UI/BaseCardTitle.vue";
import federation from "../resources/federation.json";
export default {
  components: {
    BaseCard,
    PopoverButton,
    CardTitle
  },
  data() {
    return {
      federations: federation
    };
  }
};
</script>

<style>
.federation {
  background-color: #7030a0;
}
</style>
