<template>
  <Description :header="header" :mode="federation" :items="federations" />
</template>

<script>
import Description from "./UI/Description.vue";
import federations from "../resources/federation.json";
export default {
  components: {
    Description
  },
  data() {
    return {
      header: "Federation",
      federation: "federation",
      federations
    };
  }
};
</script>
