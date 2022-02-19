<template>
  <div class="credential container">
    <base-card-title>Credential Management</base-card-title> 
    <div class="row">
    <div class="col" v-for="credentialManagement in credentialManagements" :key="credentialManagement.id">
      <popover-button :description="credentialManagement.description" :title="credentialManagement.title" >
      {{credentialManagement.title}}
    </popover-button></div>
    </div>
    </div>
</template>

<script>
import BaseCardTitle from './UI/BaseCardTitle.vue';
import PopoverButton from './UI/PopoverButton.vue'
export default {
  components: {
    PopoverButton,
    BaseCardTitle
  },
  data(){
    return {
      credentialManagements: [
        {
          id:"credential-service",
          title:"Credential Service Providers",
          description:"a trusted entity that issues or registers subscriber authenticators and issues electronic credentials to subscribers"
        },
        {
          id:"credential-repositories",
          title:"Credential Repositories",
          description:"any data repository or system that stores credentials"
        },
        {
          id:"credential-lifecycle",
          title:"Credential Lifecycle Management",
          description:"the creation, issuance and ongoing maintenance of credentials and authenticators"
        },
      ]
    }
  },
  methods:{
  }
};
</script>

<style>
.credential{
  background-color:#008000;
  color: white;
  padding: 1rem;
  border-radius: 2rem;
}
</style>
