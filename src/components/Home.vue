<template>
  <div class="container-fluid">
    <div class="alert alert-primary" role="alert">
      <fa icon="circle-exclamation"></fa> Click title to see details, mouse over
      buttons to see description.
    </div>
    <div class="row">
      <div class="col-2">
        <div class="row">
          <div class="col-6">
            <resource-consumers-card />
          </div>
          <div class="col-2">
            <img
              src="assets/arrowSmall.png"
              alt="Arrow"
              style="margin-top: 7rem; width: 3rem"
            />
            <img
              src="assets/arrowCross.png"
              alt="Arrow"
              style="margin-top: 5rem; margin-left: -2rem; width: 5rem"
            />
            <img
              src="assets/arrowSmall.png"
              alt="Arrow"
              style="margin-top: 9rem; width: 3rem"
            />
            <img
              src="assets/arrowSmall.png"
              alt="Arrow"
              style="margin-top: 7rem; width: 3rem"
            />
            <img
              src="assets/arrowSmall.png"
              alt="Arrow"
              style="margin-top: 7rem; width: 3rem"
            />
          </div>
          <div class="col-4">
            <identity-proofing-card />
          </div>
        </div>
      </div>
      <div class="col-10">
        <governance-systems-card />
        <div class="row">
          <div class="col-2">
            <div class="linkLine" />
            <authoritative-sources-card />
            <img
              src="assets/arrowSmall.png"
              alt="Arrow"
              style="
                margin-left: -12rem;
                margin-top: -35rem;
                width: 3rem;
                height: 1rem;
              "
            />
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-5">
                <identity-management-card />
              </div>
              <div class="col-3">
                <federation-card />
                <level-assurance />
              </div>
              <div class="col-4">
                <access-management-card />
              </div>
            </div>
            <credential-management-card />
          </div>
          <div class="col-2">
            <protected-resources-card />
          </div>
        </div>
      </div>
    </div>
    <modal-card :modalHead="modalHead" :modalBody="modalBody" />
  </div>
</template>
<script>
import GovernanceSystemsCard from "./GovernanceSystemsCard.vue";
import IdentityManagementCard from "./IdentityManagementCard.vue";
import { Popover } from "bootstrap/dist/js/bootstrap.esm.min.js";
import AuthoritativeSourcesCard from "./AuthoritativeSourcesCard.vue";
import FederationCard from "./FederationCard.vue";
import AccessManagementCard from "./AccessManagementCard.vue";
import ProtectedResourcesCard from "./ProtectedResourcesCard.vue";
import IdentityProofingCard from "./IdentityProofingCard.vue";
import ResourceConsumersCard from "./ResourceConsumersCard.vue";
import CredentialManagementCard from "./CredentialManagementCard.vue";
import LevelAssurance from "./LevelAssurance.vue";
import ModalCard from "./UI/ModalCard.vue";

export default {
  components: {
    GovernanceSystemsCard,
    IdentityManagementCard,
    AuthoritativeSourcesCard,
    FederationCard,
    AccessManagementCard,
    ProtectedResourcesCard,
    IdentityProofingCard,
    ResourceConsumersCard,
    CredentialManagementCard,
    LevelAssurance,
    ModalCard,
  },
  data() {
    return {
      modalHead: "Level of Assurance",
      modalBody: `<p>
            There are four Levels of Assurance (LoAs) ranging from LoA 1 (the
            lowest level) to LoA 4 (the highest level) associated with identity,
            credentials and authentication as defined in the following GC policy
            instruments and guidance documents:
          </p>
          <ul>
            <li>
              <a
                href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32612&section=html"
                target="_blank"
              >
                Directive on Identity Management - Appendix A: Standard on
                Identity and Credential Assurance
              </a>
              which defines the four assurance levels associated with identity
              assurance and credential assurance
            </li>
            <li>
              <a
                href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=26262&section=html"
                target="_blank"
                >Guideline on Defining Authentication Requirements</a
              >, which describes a methodology for determining the minimum
              assurance level needed for user authentication in a given context
            </li>
            <li>
              <a
                href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=30678&section=html"
                target="_blank"
                >Guideline on Identity Assurance</a
              >, which specifies the minimum requirements to establish the
              identity of an individual for a given level of assurance
            </li>
            <li>
              <a
                href="https://www.cyber.gc.ca/en/guidance/user-authentication-guidance-information-technology-systems-itsp30031-v3"
                target="_blank"
                >User Authentication Guidance for Information Technology
                Systems</a
              >, which provides technical guidance on user authentication
              requirements at each level of assurance.
            </li>
          </ul>`,
    };
  },
  mounted() {
    Array.from(document.querySelectorAll('[data-bs-toggle="popover"]')).forEach(
      (popoverNode) => new Popover(popoverNode)
    );
  },
};
</script>

<style scoped>
.linkLine {
  margin: 1rem -1rem;
  border: dotted 0.1rem black;
  height: 0rem;
}
</style>
