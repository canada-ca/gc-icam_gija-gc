<template>
  <Description
    :header="$t('credentialManagement')"
    :mode="credential"
    :items="credentialManagement"
  />
</template>

<script>
import Description from "./UI/Description.vue";
import credentialManagement from "../resources/credentialManagement.json";

export default {
  components: {
    Description
  },
  data() {
    return {
      credential: "credential",
      credentialManagement: credentialManagement
    };
  }
};
</script>
