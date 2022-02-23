<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Identity Management</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-2">
        <identity-management-card></identity-management-card>
      </div>
      <div class="col-1" style="padding-top:7.5rem;">
        <fa icon="right-long"></fa>
      </div>
      <div class="col-9" style="padding-top:7rem;">  
        <p class="text-start">the function of collecting evidence [identity attributes] which supports a claim of identity [for a specific entity] and the validation and verification of that evidence so as to determine the veracity (or otherwise) of the claim</p>
      </div>
    </div>
  </div>
</template>

<script>
import IdentityManagementCard from './IdentityManagementCard.vue'
export default {
  components: {
    IdentityManagementCard
  }
}
</script>

<style scoped>
</style>