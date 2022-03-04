<template>
  <base-card class="protectedResource">
    <card-title
      ><router-link to="/protected-resources"
        >Protected <br />Resources</router-link
      ></card-title
    >
    <popover-button
      v-for="protectedResource in protectedResources"
      :description="protectedResource.description"
      :title="protectedResource.title"
      :key="protectedResource.id"
    >
      {{ protectedResource.title }}
    </popover-button>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import PopoverButton from "./UI/PopoverButton.vue";
import CardTitle from "./UI/BaseCardTitle.vue";
import protectedResources from "../resources/protectedResources.json";
export default {
  components: {
    BaseCard,
    PopoverButton,
    CardTitle
  },
  data() {
    return {
      protectedResources
    };
  }
};
</script>

<style>
.protectedResource {
  background-color: #8d400c;
}
</style>
