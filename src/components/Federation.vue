<template>
  <Description
    :header="$t('federation')"
    :mode="federation"
    :items="federations"
  />
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
      federation: "federation",
      federations
    };
  }
};
</script>
