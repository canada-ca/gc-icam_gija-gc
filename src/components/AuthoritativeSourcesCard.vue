<template>
  <base-card class="authoritative">
    <card-title
      ><router-link :to="`/${this.$i18n.locale}/authoritative-sources`">{{
        $t("authoritativeSources")
      }}</router-link></card-title
    >
    <combined-button
      v-for="authoritativeSource in authoritativeSources"
      :buttonInfo="authoritativeSource"
      :key="authoritativeSource.id"
      @click="this.$parent.showDetail(authoritativeSource)"
    >
    </combined-button>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import CombinedButton from "./UI/CombinedButton.vue";
import CardTitle from "./UI/BaseCardTitle.vue";
import authoritativeSources from "../resources/authoritativeSources.json";
export default {
  components: {
    BaseCard,
    CombinedButton,
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
