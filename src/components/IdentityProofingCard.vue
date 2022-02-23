<template>
  <vertical-card class="identityProofing">
    <popover-button :id="identityProofing.id" v-for="identityProofing in identityProofings" :description="identityProofing.description" :title="identityProofing.title" :key="identityProofing.id">
      {{identityProofing.title}}
    </popover-button>
  </vertical-card>
</template>

<script>
import VerticalCard from './UI/VerticalCard.vue'
import PopoverButton from './UI/PopoverButton.vue'
export default {
  components: {
    VerticalCard,
    PopoverButton,
  },
  data(){
    return {
      identityProofings:[
        {
          id:"identity-proofing",
          title:"Identity Proofing",
          description:"the function of collecting evidence [identity attributes] which supports a claim of identity [for a specific entity] and the validation and verification of that evidence so as to determine the veracity (or otherwise) of the claim"
        },
        {
          id:"sponsorship",
          title:"Sponsorship",
          description:"to formally establish that an organization or Non-Person Entities (NPE) entity requires access to GC resources"
        },
      ]
    }    
  }
}
</script>

<style scoped>
.identityProofing {
  background-color: #c00000;
}
#identity-proofing{
  width: 12rem;
  margin: 12rem 0.5rem 2rem;
  transform-origin: 0 0;
  transform: rotate(-90deg);
}
#sponsorship{
  width: 25rem;
  margin: 25rem 0.5rem 2rem;
  transform-origin: 0 0;
  transform: rotate(-90deg);
}
</style>