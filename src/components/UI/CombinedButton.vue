<template>
  <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
    ><popover-button :description="getDescription" :title="getTitle">{{
      getTitle
    }}</popover-button></a
  >
</template>

<script>
import PopoverButton from "./PopoverButton.vue";
export default {
  props: ["buttonInfo"],
  components: {
    PopoverButton
  },
  computed: {
    getDescription() {
      return this.buttonInfo.description[this.$i18n.locale];
    },
    getTitle() {
      return this.buttonInfo.title[this.$i18n.locale];
    }
  }
};
</script>

<style scoped>
a {
  width: 100%;
}
</style>
