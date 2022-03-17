<template>
  <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
    ><popover-button
      :description="buttonInfo.description"
      :title="computedTitle()"
      >{{ buttonInfo.title }}</popover-button
    ></a
  >
</template>

<script>
import PopoverButton from "./PopoverButton.vue";
export default {
  props: ["buttonInfo"],
  components: {
    PopoverButton
  },
  methods: {
    computedTitle() {
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
