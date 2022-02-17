<template>  
<div class="container">
  <div class="alert alert-primary" role="alert">Click title to see details, mouse over buttons to see description.</div>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-1"></div>
    <div class="col-10">
      <governance-systems />
      <div class="row">
        <div class="col-2"></div>
        <div class="col-2">
          <identity-management-card />
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
export default {  
  components: {
    GovernanceSystems,
    IdentityManagementCard
  },
  mounted(){
    Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
        .forEach(popoverNode => new Popover(popoverNode));
  },
}
</script>