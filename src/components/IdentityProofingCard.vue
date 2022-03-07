<template>
  <vertical-card class="identityProofing">
    <popover-button
      v-for="identityProofing in identityProofings"
      :id="identityProofing.id"
      :description="identityProofing.description"
      :title="identityProofing.title"
      :key="identityProofing.id"
    >
      {{ identityProofing.title }}
    </popover-button>
  </vertical-card>
</template>

<script>
import VerticalCard from "./UI/VerticalCard.vue";
import PopoverButton from "./UI/PopoverButton.vue";
import identityProofing from "../resources/identityProofing.json";

export default {
  components: {
    VerticalCard,
    PopoverButton
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
  width: 12rem;
  margin: 13rem 0.5rem 2rem;
  transform-origin: 0 0;
  transform: rotate(-90deg);
}
#sponsorship {
  width: 30rem;
  margin: 27rem 0.5rem 2rem;
  transform-origin: 0 0;
  transform: rotate(-90deg);
}
</style>
