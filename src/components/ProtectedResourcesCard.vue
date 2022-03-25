<template>
  <base-card class="protectedResource">
    <card-title
      ><router-link to="/protected-resources">{{
        $t("protectedResources")
      }}</router-link></card-title
    >
    <combined-button
      v-for="protectedResource in protectedResources"
      :buttonInfo="protectedResource"
      :key="protectedResource.id"
      @click="this.$parent.showDetail(protectedResource)"
    >
    </combined-button>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import CombinedButton from "./UI/CombinedButton.vue";
import CardTitle from "./UI/BaseCardTitle.vue";
import protectedResources from "../resources/protectedResources.json";
export default {
  components: {
    BaseCard,
    CombinedButton,
    CardTitle
  },
  data() {
    return {
      protectedResources
    };
  }
};
</script>

<style>
.protectedResource {
  background-color: #8d400c;
}
</style>
