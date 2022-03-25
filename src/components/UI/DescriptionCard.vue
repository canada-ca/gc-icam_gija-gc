<template>
  <div class="row align-items-center">
    <div class="col-2" :class="mode">
      <base-button>{{ title[this.$i18n.locale] }}</base-button>
    </div>
    <div class="col-1">
      <fa icon="right-long"></fa>
    </div>
    <div class="col-9 text-start">{{ description[this.$i18n.locale] }}</div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["title", "description", "mode"]
};
</script>
