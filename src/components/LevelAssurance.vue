<template>
  <img
    src="assets/arrowUp.png"
    alt="Arrow"
    style="margin-top: -1rem; height: 5rem"
  />
  <div class="row">
    <img
      src="assets/arrowLeft.png"
      class="col g-0"
      alt="Left Arrow"
      style="margin-left: -2rem; width: 4rem; height: 2rem; margin-top: 1rem"
    />
    <popover-button
      id="levels"
      class="col g-0"
      :description="levelOfAssurance.description"
      :title="levelOfAssurance.title"
      ><a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
        >Levels of Assurance</a
      ></popover-button
    >
    <img
      src="assets/arrowRight.png"
      class="col g-0"
      alt="Right Arrow"
      style="margin-right: -2rem; width: 4rem; height: 2rem; margin-top: 1rem"
    />
  </div>
  <img
    src="assets/arrowDown.png"
    alt="Arrow"
    style="margin-bottom: -1rem; height: 5rem"
  />
</template>

<script>
import PopoverButton from "./UI/PopoverButton.vue";
export default {
  components: {
    PopoverButton,
  },
  data() {
    return {
      levelOfAssurance: {
        title: "Levels of Assurance",
        description:
          "There are four Levels of Assurance (LoAs) ranging from LoA 1 (the lowest level) to LoA 4 (the highest level) associated with identity, credentials and authentication as defined in the applicable GC policy instruments and guidance documents",
      },
    };
  },
};
</script>

<style scoped>
button {
  border-radius: 50%;
  background-color: #00b0f0;
  color: black;
  padding: 1rem;
  line-height: 1rem;
  margin: 0;
}
button:hover,
button:active {
  background-color: yellow;
  border-color: #270041;
}
</style>
