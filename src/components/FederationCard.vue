<template>
  <base-card class="federation">
    <card-title
      ><router-link to="/federation">Federation</router-link></card-title
    >
    <combined-button
      v-for="federation in federations"
      :buttonInfo="federation"
      :key="federation.id"
      @click="this.$parent.showDetail(federation)"
    >
    </combined-button>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import CombinedButton from "./UI/CombinedButton.vue";
import CardTitle from "./UI/BaseCardTitle.vue";
import federation from "../resources/federation.json";
export default {
  components: {
    BaseCard,
    CombinedButton,
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
