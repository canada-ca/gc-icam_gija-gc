<template>
  <fa icon="up-long"></fa>
  <div class="row align-middle">
    <div class="col-1 gx-0 gy-4">
      <fa icon="left-long"></fa>
    </div>
    <div class="col-10">
      <a
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="showDetail"
        ><popover-button
          id="levels"
          :description="levelOfAssurance[0].description[this.$i18n.locale]"
          :title="levelOfAssurance[0].title[this.$i18n.locale]"
          >{{ levelOfAssurance[0].title[this.$i18n.locale] }}</popover-button
        ></a
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
        this.levelOfAssurance[0].title[this.$i18n.locale],
        this.levelOfAssurance[0].detail[this.$i18n.locale]
      );
    }
  },
  computed: {
    getDescription() {
      console.log(this.levelOfAssurance);
      return this.levelOfAssurance[0].description[this.$i18n.locale];
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
