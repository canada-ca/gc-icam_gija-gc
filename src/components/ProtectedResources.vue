<template>
  <Description
    :header="$t('protectedResources')"
    :mode="protectedResource"
    :items="protectedResources"
  />
</template>

<script>
import Description from "./UI/Description.vue";
import protectedResources from "../resources/protectedResources.json";

export default {
  components: {
    Description
  },
  data() {
    return {
      protectedResource: "protectedResource",
      protectedResources
    };
  }
};
</script>
