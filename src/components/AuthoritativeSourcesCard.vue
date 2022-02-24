<template>
  <base-card class="authoritative">
    <img
      src="assets/arrowSmall.png"
      alt="Arrow"
      style="margin-left: -12rem; width: 3rem"
    />
    <card-title>Authoritative <br />Sources</card-title>
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
export default {
  components: {
    BaseCard,
    PopoverButton,
    CardTitle,
  },
  data() {
    return {
      authoritativeSources: [
        {
          id: "directories-inventory",
          title: "Directories & Inventory Systems",
          description:
            "systems or data repositories that store information about users and NPEs",
        },
        {
          id: "hr-pay",
          title: "HR, Pay & Screening Systems",
          description:
            "sources of certain identity information associated with internal users",
        },
        {
          id: "international-sources",
          title: "International Sources",
          description:
            "sources of identity information for non-Canadian citizens",
        },
        {
          id: "other-levels",
          title: "Other Levels of Government",
          description:
            "sources of information for internal user, external users and businesses",
        },
        {
          id: "industry-sources",
          title: "Industry Sources",
          description:
            "sources of information for external users and businesses",
        },
        {
          id: "other-sources",
          title: "Other Sources",
          description:
            "sources of information for external users and businesses",
        },
      ],
    };
  },
};
</script>

<style scoped>
.authoritative {
  background-color: #555;
}
</style>
