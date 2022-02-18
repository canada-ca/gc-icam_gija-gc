<template>
  <base-card class="access">
    <card-title>Access <br>Management</card-title>
    <popover-button v-for="accessManagement in accessManagements" :description="accessManagement.description" :title="accessManagement.title" :key="accessManagement.id">
      {{accessManagement.title}}
    </popover-button>
  </base-card>
</template>

<script>
import BaseCard from './UI/BaseCard.vue'
import PopoverButton from './UI/PopoverButton.vue'
import CardTitle from './UI/BaseCardTitle.vue'
export default {
  components: {
    BaseCard,
    PopoverButton,
    CardTitle
  },
  data(){
    return {
      accessManagements:[
        {
          id:"authentication",
          title:"Authentication",
          description:"verification of the identity of a user, process or device, often as a prerequisite to allowing access to resources in an information system"
        },
        {
          id:"authorization",
          title:"Authorization",
          description:"the process of determining whether or not an authenticated entity has permission to access a particular resource"
        },
        {
          id:"privilege-access",
          title:"Privilege Access Management",
          description:"a specialized area of ICAM that deals specifically with the protection of privileged accounts"
        },
        {
          id:"policy-repository",
          title:"Policy Repository",
          description:"a data repository or system that stores the rules/policies that define which attributes a requester must have in order to access a particular resource"
        },
        {
          id:"physical-and",
          title:"Physical and Logical Access Control Systems",
          description:"a Physical Access Control System deals with controlling access to physical facilities and a Logical Access Control system controls an entity’s ability to access system and information resources"
        },
        {
          id:"consent-management",
          title:"Consent Management",
          description:"provides users control over how their personal information is collected, used, retained, and disclosed"
        },
        {
          id:"e-signature",
          title:"e-Signature",
          description:"an electronic representation of a individual’s signature that links that person to an electronic document or transaction and provides evidence of that person’s intent to approve or to be legally bound by its contents"
        },
      ]
    }    
  }
}
</script>

<style scoped>
.access {
  background-color: #004CB1;
}
</style>