<template>
  <div class="row align-items-center">
    <div class="col-2 identity">
      <base-button>{{ title }}</base-button>
    </div>
    <div class="col-1">
      <fa icon="right-long"></fa>
    </div>
    <div class="col-9 text-start">{{ description }}</div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["title", "description"],
};
</script>
