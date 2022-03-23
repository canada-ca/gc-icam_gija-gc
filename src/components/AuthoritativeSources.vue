<template>
  <Description
    :header="$t('authoritativeSources')"
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
      authoritative: "authoritative",
      authoritativeSources
    };
  }
};
</script>
