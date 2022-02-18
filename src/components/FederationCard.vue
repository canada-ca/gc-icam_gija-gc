<template>
  <base-card class="federation">
    <card-title>Federation</card-title>
    <popover-button v-for="federation in federations" :description="federation.description" :title="federation.title" :key="federation.id">
      {{federation.title}}
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
      federations:[
        {
          id:"centralized-authentication",
          title:"Centralized Authentication / SSO Broker",
          description:"a component that enables organizations to connect multiple service providers with different identity providers (IdP), while also providing a single sign-on (SSO) capability on behalf of users"
        },
        {
          id:"trust-frameworks",
          title:"Trust Frameworks",
          description:"a set of agreed on principles, definitions, standards, specifications, conformance criteria, and assessment approach"
        },
        {
          id:"translation-between",
          title:"Translation between Parties",
          description:"translation functions such as protocol conversion and attribute mappings to allow parties in different domains to share information appropriately and effectively"
        },
        {
          id:"federation-management",
          title:"Federation Management",
          description:"life cycle management of trust relationships between federated domains"
        },
      ]
    }    
  }
}
</script>

<style scoped>
.federation {
  background-color: #7030A0;
}
</style>