<template>
  <base-card class="protectedResources">
    <card-title>Protected <br>Resources</card-title>
    <popover-button v-for="protectedResource in protectedResources" :description="protectedResource.description" :title="protectedResource.title" :key="protectedResource.id">
      {{protectedResource.title}}
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
      protectedResources:[
        {
          id:"applications-services",
          title:"Applications, Services and APIs",
          description:"GC applications and services consumed by internal and external entities"
        },
        {
          id:"cloud",
          title:"Cloud",
          description:"on demand computing resources used by the GC to deliver services to internal and external entities"
        },
        {
          id:"devices",
          title:"Devices",
          description:"any managed device used to support GC operations"
        },
        {
          id:"platforms-middleware",
          title:"Platforms / Middleware",
          description:"the operating system and the computer that it runs on, combined with software that acts as a bridge between the operating system (or database) and various programs/applications"
        },
        {
          id:"infrastructure",
          title:"Infrastructure",
          description:"a wide range of technologies that include network components, appliances, servers and data centres"
        },
        {
          id:"facilities",
          title:"Facilities",
          description:"GC buildings or restricted areas that require controlled physical access"
        },
      ]
    }    
  }
}
</script>

<style scoped>
.protectedResources {
  background-color: #8D400C;
}
</style>