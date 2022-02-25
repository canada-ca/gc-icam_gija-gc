<template>
  <base-card class="identity">
    <card-title
      ><router-link to="/identity-management"
        >Identity <br />Management</router-link
      ></card-title
    >
    <popover-button
      v-for="identityManagement in identityManagements"
      :description="identityManagement.description"
      :title="identityManagement.title"
      :key="identityManagement.id"
    >
      {{ identityManagement.title }}
    </popover-button>
  </base-card>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
import CardTitle from "./UI/BaseCardTitle.vue";
import PopoverButton from "./UI/PopoverButton.vue";
export default {
  components: {
    BaseCard,
    PopoverButton,
    CardTitle,
  },
  data() {
    return {
      identityManagements: [
        {
          id: "identity-establishment",
          title: "Identity Establishment",
          description:
            "the creation of an authoritative record of identity that is relied on by others for subsequent government activities",
        },
        {
          id: "entitlements-and",
          title: "Entitlements and Roles",
          description:
            "the set of privileges or entitlements associated with an entity that support informed access control decisions",
        },
        {
          id: "identity-lifecycle",
          title: "Identity Lifecycle Management",
          description:
            "the provisioning, ongoing maintenance and de-provisioning of identity attributes",
        },
        {
          id: "authoritative-attribute",
          title: "Authoritative Attribute Exchange Service",
          description:
            "a broker between multiple, disparate Authoritative Sources and the consumers of the identity information",
        },
        {
          id: "identity-repositories",
          title: "Identity Repositories",
          description: "any data repository that stores identity information",
        },
        {
          id: "delegated-administration",
          title: "Delegated Administration",
          description:
            "the de-centralization of certain system administration functions",
        },
        {
          id: "user-self",
          title: "User Self-Service",
          description:
            "the ability to allow users to specify or change certain identity attributes",
        },
      ],
    };
  },
};
</script>

<style>
.identity {
  background-color: #c00000;
}
</style>
