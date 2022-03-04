<template>
  <Description :header="header" :mode="governance" :items="governanceSystems" />
</template>

<script>
import Description from "./UI/Description.vue";
import governanceSystems from "../resources/governanceSystems.json";

export default {
  components: {
    Description
  },
  data() {
    return {
      header: "Governance Systems",
      governance: "governance",
      governanceSystems
    };
  }
};
</script>
