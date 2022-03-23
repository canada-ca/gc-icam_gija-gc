<template>
  <Description
    :header="$t('accessManagement')"
    :mode="access"
    :items="accessManagement"
  />
</template>

<script>
import Description from "./UI/Description.vue";
import accessManagement from "../resources/accessManagement.json";
export default {
  components: {
    Description
  },
  data() {
    return {
      access: "access",
      accessManagement
    };
  }
};
</script>
