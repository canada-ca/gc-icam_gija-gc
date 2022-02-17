<template>
  <div class="governance container">
    <h2><a href="/governance-systems" style="color:white; text-decoration:none">Governance Systems and Processes</a></h2>
    <div class="row">
    <div class="col" v-for="resource in resources" :key="resource.id">
      <popover-button :description="resource.description" :title="resource.title" >
      {{resource.title}}
    </popover-button></div>
    </div>
    </div>
</template>

<script>
import PopoverButton from './UI/PopoverButton.vue'
export default {
  components: {
    PopoverButton
  },
  data(){
    return {
      resources: [
        {
          id:"reporting-analytics",
          title:"Reporting & Analytics",
          description:"the process of organizing data into informational summaries in order to monitor how different ICAM components are performing and complying with policy"
        },
        {
          id:"access-certification",
          title:"Access Certification & Discovery",
          description:"the process of validating access rights within systems"
        },
        {
          id:"approval-workflows",
          title:"Approval Workflows",
          description:"processes used to manage the life cycle of a digital identity including provisioning, on-going maintenance and de-provisioning of identity attributes"
        },
        {
          id:"policy-compliance",
          title:"Policy and Compliance",
          description:"processes used to ensure compliance to applicable organizational policies and legislation"
        },
        {
          id:"monitoring-auditing",
          title:"Monitoring, Auditing and Logging",
          description:"processes and tools used to support ongoing evaluation and assessment that various information systems are operating properly and are being used as intended"
        }
      ]
    }
  },
  methods:{
  }
};
</script>

<style>
.governance{
  background-color:#012061;
  color: white;
  padding: 1rem;
  margin: 2rem auto;
  border-radius: 2rem;
}
h2{
  padding-bottom: 0.2em;
}
button.btn{
  background-color: white;
  margin:0 1em;
}
</style>
