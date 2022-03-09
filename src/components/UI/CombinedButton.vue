<template>
  <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
    ><popover-button
      :description="buttonInfo.description"
      :title="buttonInfo.title"
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
  }
};
</script>

<style scoped>
a {
  width: 100%;
}
</style>
