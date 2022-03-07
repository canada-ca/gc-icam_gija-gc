<template>
  <base-card class="authoritative">
    <card-title
      ><router-link to="/authoritative-sources"
        >Authoritative Sources</router-link
      ></card-title
    >
    <popover-button
      v-for="authoritativeSource in authoritativeSources"
      :description="authoritativeSource.description"
      :title="authoritativeSource.title"
      :key="authoritativeSource.id"
    >
      {{ authoritativeSource.title }}
    </popover-button>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import PopoverButton from "./UI/PopoverButton.vue";
import CardTitle from "./UI/BaseCardTitle.vue";
import authoritativeSources from "../resources/authoritativeSources.json";
export default {
  components: {
    BaseCard,
    PopoverButton,
    CardTitle
  },
  data() {
    return {
      authoritativeSources: authoritativeSources
    };
  }
};
</script>

<style>
.authoritative {
  background-color: #555;
}
</style>
