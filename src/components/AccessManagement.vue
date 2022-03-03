<template>
  <Description :header="header" :mode="access" :items="accessManagement" />
</template>

<script>
import Description from "./UI/Description.vue";
import accessManagement from "../resources/accessManagement.json";
export default {
  components: {
    Description,
  },
  data() {
    return {
      header: "Access Management",
      access: "access",
      accessManagement,
    };
  },
};
</script>
