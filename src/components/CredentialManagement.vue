<template>
  <Description
    :header="header"
    :mode="credential"
    :items="credentialManagement"
  />
</template>

<script>
import Description from "./UI/Description.vue";
import credentialManagement from "../resources/credentialManagement.json";

export default {
  components: {
    Description,
  },
  data() {
    return {
      header: "Credential Management",
      credential: "credential",
      credentialManagement: credentialManagement,
    };
  },
};
</script>
