<template>  
<div class="container-fluid">
  <div class="alert alert-primary" role="alert">Click title to see details, mouse over buttons to see description.</div>
  <div class="row">
    <div class="col-2">
      <div class="row">
        <div class="col-8">
          <resource-consumers-card />
        </div>
        <div class="col-4">
          <identity-proofing-card />
        </div>
      </div>
    </div>    
    <div class="col-10">
      <governance-systems />
      <div class="row">
        <div class="col-2">
          <div class="linkLine" />                    
          <authoritative-sources-card />
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
          <credential-management />     
        </div>        
        <div class="col-2">
          <protected-resources-card />
        </div>       
      </div>
    </div>
  </div>
</div>  
</template>
<script>
import GovernanceSystems from './GovernanceSystems.vue'
import IdentityManagementCard from './IdentityManagementCard.vue'
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'
import AuthoritativeSourcesCard from './AuthoritativeSourcesCard.vue'
import FederationCard from './FederationCard.vue'
import AccessManagementCard from './AccessManagementCard.vue'
import ProtectedResourcesCard from './ProtectedResourcesCard.vue'
import IdentityProofingCard from './IdentityProofingCard.vue'
import ResourceConsumersCard from './ResourceConsumersCard.vue'
import CredentialManagement from './CredentialManagement.vue'
import LevelAssurance from './LevelAssurance.vue'

export default {  
  components: {
    GovernanceSystems,
    IdentityManagementCard,
    AuthoritativeSourcesCard,
    FederationCard,
    AccessManagementCard,
    ProtectedResourcesCard,
    IdentityProofingCard,
    ResourceConsumersCard,
    CredentialManagement,
    LevelAssurance
  },
  mounted(){
    Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
        .forEach(popoverNode => new Popover(popoverNode));
  },
}
</script>

<style scoped>
.linkLine{
  margin: 1rem -1rem;
  border: dotted 0.1rem black;
  height: 0rem;
}
</style>