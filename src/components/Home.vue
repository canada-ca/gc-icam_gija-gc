<template>  
<div class="container-fluid">
  <div class="alert alert-primary" role="alert">Click title to see details, mouse over buttons to see description.</div>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-1">
      <identity-proofing-card />
    </div>    
    <div class="col-10">
      <governance-systems />
      <div class="row">
        <div class="col-2">
          <authoritative-sources-card />
        </div>
        <div class="col-3">
          <identity-management-card />
        </div>
        <div class="col-2">
          <federation-card />
        </div>  
        <div class="col-3">
          <access-management-card />
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
export default {  
  components: {
    GovernanceSystems,
    IdentityManagementCard,
    AuthoritativeSourcesCard,
    FederationCard,
    AccessManagementCard,
    ProtectedResourcesCard,
    IdentityProofingCard
  },
  mounted(){
    Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
        .forEach(popoverNode => new Popover(popoverNode));
  },
}
</script>