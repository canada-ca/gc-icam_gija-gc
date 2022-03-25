<template>
  <description
    :header="$t('identityManagement')"
    :mode="identity"
    :items="identityManagements"
  />
</template>

<script>
import Description from "./UI/Description.vue";
import identityManagement from "../resources/identityManagement.json";
import identityProofing from "../resources/identityProofing.json";

export default {
  components: {
    Description
  },
  data() {
    return {
      identity: "identity",
      identityManagements: [...identityProofing, ...identityManagement]
    };
  }
};
</script>
