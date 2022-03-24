<template>
  <Description
    :header="$t('governanceSystems')"
    :mode="governance"
    :items="governanceSystems"
  />
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
      governance: "governance",
      governanceSystems
    };
  }
};
</script>
