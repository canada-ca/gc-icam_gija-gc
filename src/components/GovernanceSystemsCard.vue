<template>
  <base-card class="governance container">
    <base-card-title
      ><router-link :to="`/${this.$i18n.locale}/governance-systems`">{{
        $t("governanceSystems")
      }}</router-link></base-card-title
    >
    <div class="row gx-0">
      <div
        class="col"
        v-for="governanceSystem in governanceSystems"
        :key="governanceSystem.id"
      >
        <combined-button
          :buttonInfo="governanceSystem"
          @click="this.$parent.showDetail(governanceSystem)"
        >
        </combined-button>
      </div>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import BaseCardTitle from "./UI/BaseCardTitle.vue";
import CombinedButton from "./UI/CombinedButton.vue";
import governanceSystems from "../resources/governanceSystems.json";

export default {
  components: {
    CombinedButton,
    BaseCardTitle,
    BaseCard
  },
  data() {
    return {
      governanceSystems
    };
  },
  methods: {}
};
</script>

<style>
.governance {
  background-color: #012061;
}
</style>
