<template>
  <Description
    :header="header"
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
      header: "Protected Resources",
      protectedResource: "protectedResource",
      protectedResources
    };
  }
};
</script>
