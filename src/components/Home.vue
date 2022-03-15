<template>
  <div class="container-fluid">
    <div class="alert alert-primary" role="alert">
      <fa icon="circle-exclamation"></fa> {{ $t("message") }}
      <a
        href="docs/GC ICAM Framework Diagrams with Expanded Definitions - 8 March 2022.pptx"
        target="_blank"
        >Download PPT</a
      >
      <a
        href="#"
        title="Français  - Version française de cette page"
        lang="fr"
        class="nav justify-content-end"
        >Français</a
      >
    </div>
    <div class="row">
      <div class="col-2">
        <div class="row">
          <div class="col-7">
            <resource-consumers-card />
          </div>
          <div class="col-1 gx-0">
            <fa icon="right-long" class="mediumMargin"></fa>
            <fa icon="right-long" class="shortMargin"></fa>
            <fa icon="right-long" class="shorterMargin"></fa>
            <fa icon="right-long" class="mediumMargin"></fa>
            <fa icon="right-long" class="mediumMargin"></fa>
            <fa icon="right-long" class="mediumMargin"></fa>
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
            <div class="row">
              <div class="col-1 mt-3 gx-0 gy-5">
                <fa icon="right-long"></fa>
                <fa icon="right-long" class="longMargin"></fa>
              </div>
              <div class="col-11">
                <authoritative-sources-card />
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-5">
                <identity-management-card />
              </div>
              <div class="col-3">
                <federation-card />
                <level-assurance @detail="getDetail" />
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
    ModalCard
  },
  methods: {
    getDetail(modalHead, modalBody) {
      this.modalHead = modalHead;
      this.modalBody = modalBody;
    },
    showDetail(info) {
      this.modalHead = info.title;
      this.modalBody = info.detail;
    }
  },
  data() {
    return {
      modalHead: "",
      modalBody: ""
    };
  },
  mounted() {
    Array.from(document.querySelectorAll('[data-bs-toggle="popover"]')).forEach(
      (popoverNode) => new Popover(popoverNode)
    );
  }
};
</script>

<style scoped>
.linkLine {
  margin: 1rem -1rem;
  border-top: dotted 0.2rem black;
  height: 0rem;
}
.longMargin {
  margin-top: 20rem;
}
.mediumMargin {
  margin-top: 7rem;
}
.shortMargin {
  margin-top: 5rem;
}
.shorterMargin {
  margin-top: 3rem;
}
</style>
