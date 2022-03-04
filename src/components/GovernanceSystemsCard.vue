<template>
  <base-card class="governance container">
    <base-card-title
      ><router-link to="/governance-systems"
        >Governance Systems and Processes</router-link
      ></base-card-title
    >
    <div class="row">
      <div
        class="col"
        v-for="governanceSystem in governanceSystems"
        :key="governanceSystem.id"
      >
        <popover-button
          :description="governanceSystem.description"
          :title="governanceSystem.title"
        >
          {{ governanceSystem.title }}
        </popover-button>
      </div>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import BaseCardTitle from "./UI/BaseCardTitle.vue";
import PopoverButton from "./UI/PopoverButton.vue";
import governanceSystems from "../resources/governanceSystems.json";

export default {
  components: {
    PopoverButton,
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
