<template>
  <Description :header="header" :mode="access" />
</template>

<script>
import Description from "./UI/Description.vue";
export default {
  components: {
    Description,
  },
  data() {
    return {
      header: "Access Management",
      access: "access",
      identityManagements: [
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
