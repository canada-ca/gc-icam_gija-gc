<template>
    <div class="container">
      <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Identity Management</li>
  </ol>
</nav>
      <div class="row">
      <identity-management-card></identity-management-card>
      <div class="col-10" style="padding-top:7.5rem;">
        <div class="row">
      <div class="col-1"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></div>
      <div class="col-11">  
        <p class="text-start">the function of collecting evidence [identity attributes] which supports a claim of identity [for a specific entity] and the validation and verification of that evidence so as to determine the veracity (or otherwise) of the claim</p>
      </div></div>
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
.identity {
  background-color: #c00000;
}
</style>