<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ header }}
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-2 identity start pt-3">
        <h5>{{ header }}</h5>
      </div>
    </div>
    <description-card
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :description="item.description"
    ></description-card>
    <div class="row">
      <div class="col-2 identity end">&nbsp;</div>
    </div>
  </div>
</template>

<script>
import DescriptionCard from "./DescriptionCard.vue";
export default {
  components: {
    DescriptionCard,
  },
  props: ["header"],
  data() {
    return {
      items: [
        {
          id: "identity-proofing",
          title: "Identity Proofing",
          description:
            "the function of collecting evidence [identity attributes] which supports a claim of identity [for a specific entity] and the validation and verification of that evidence so as to determine the veracity (or otherwise) of the claim",
        },
        {
          id: "sponsorship",
          title: "Sponsorship",
          description:
            "to formally establish that an organization or Non-Person Entities (NPE) entity requires access to GC resources",
        },
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

<style scoped>
.start {
  border-start-start-radius: 2rem;
  border-start-end-radius: 2rem;
}
.end {
  border-end-start-radius: 2rem;
  border-end-end-radius: 2rem;
}
</style>
