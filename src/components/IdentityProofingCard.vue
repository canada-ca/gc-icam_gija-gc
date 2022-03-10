<template>
  <vertical-card class="identityProofing">
    <combined-button
      v-for="identityProofing in identityProofings"
      :id="identityProofing.id"
      :buttonInfo="identityProofing"
      :key="identityProofing.id"
      @click="this.$parent.showDetail(identityProofing)"
    >
    </combined-button>
  </vertical-card>
</template>

<script>
import VerticalCard from "./UI/VerticalCard.vue";
import CombinedButton from "./UI/CombinedButton.vue";
import identityProofing from "../resources/identityProofing.json";

export default {
  components: {
    VerticalCard,
    CombinedButton
  },
  data() {
    return {
      identityProofings: identityProofing
    };
  }
};
</script>

<style scoped>
.identityProofing {
  background-color: #c00000;
}
#identity-proofing {
  width: 14rem;
  margin-top: 14rem;
  transform-origin: 0 0;
  transform: rotate(-90deg);
}
#sponsorship {
  width: 30rem;
  margin-top: 26rem;
  transform-origin: 0 0;
  transform: rotate(-90deg);
}
</style>
