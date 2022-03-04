<template>
  <Description :header="header" :mode="resource" :items="resourceConsumers" />
</template>

<script>
import Description from "./UI/Description.vue";
import resourceConsumers from "../resources/resourceConsumers.json";

export default {
  components: {
    Description
  },
  data() {
    return {
      header: "Resource Consumers",
      resource: "resource",
      resourceConsumers
    };
  }
};
</script>

<style>
.resource {
  background-color: #000000;
}
</style>
