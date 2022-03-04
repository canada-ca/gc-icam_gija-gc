<template>
  <Description
    :header="header"
    :mode="authoritative"
    :items="authoritativeSources"
  />
</template>

<script>
import Description from "./UI/Description.vue";
import authoritativeSources from "../resources/authoritativeSources.json";
export default {
  components: {
    Description
  },
  data() {
    return {
      header: "Authoritative Sources",
      authoritative: "authoritative",
      authoritativeSources
    };
  }
};
</script>
