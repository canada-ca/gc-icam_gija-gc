<template>
  <base-card class="access">
    <card-title
      ><router-link :to="`/${this.$i18n.locale}/access-management`">{{
        $t("accessManagement")
      }}</router-link></card-title
    >
    <combined-button
      v-for="accessManagement in accessManagements"
      :buttonInfo="accessManagement"
      :key="accessManagement.id"
      @click="this.$parent.showDetail(accessManagement)"
    >
    </combined-button>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import CombinedButton from "./UI/CombinedButton.vue";
import CardTitle from "./UI/BaseCardTitle.vue";
import accessManagement from "../resources/accessManagement.json";

export default {
  components: {
    BaseCard,
    CombinedButton,
    CardTitle
  },
  data() {
    return {
      accessManagements: accessManagement
    };
  }
};
</script>

<style>
.access {
  background-color: #004cb1;
}
</style>
