<template>
  <fa icon="up-long"></fa>
  <div class="row align-middle">
    <div class="col-1 gx-0 gy-4">
      <fa icon="left-long"></fa>
    </div>
    <div class="col-10">
      <popover-button
        id="levels"
        :description="levelOfAssurance.description"
        :title="levelOfAssurance.title"
        ><a
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="showDetail"
          >Levels of Assurance</a
        ></popover-button
      >
    </div>
    <div class="col-1 gx-0 gy-4 text-end">
      <fa icon="right-long"></fa>
    </div>
  </div>
  <fa icon="down-long"></fa>
</template>

<script>
import PopoverButton from "./UI/PopoverButton.vue";
import levelOfAssurance from "../resources/levelAssurance.json";
export default {
  emits: ["detail"],
  components: {
    PopoverButton
  },
  data() {
    return {
      levelOfAssurance
    };
  },
  methods: {
    showDetail() {
      this.$emit(
        "detail",
        this.levelOfAssurance.title,
        this.levelOfAssurance.detail
      );
    }
  }
};
</script>

<style scoped>
button {
  border-radius: 50%;
  background-color: #00b0f0;
  color: black;
  padding: 1rem;
  margin: 0;
  width: 100%;
}
button:hover,
button:active {
  background-color: yellow;
  border-color: #270041;
}
</style>
