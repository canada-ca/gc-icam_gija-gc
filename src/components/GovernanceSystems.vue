<template>
  <div class="governance container">
    <h4><a href="/governance-systems" style="color:white; text-decoration:none">Governance Systems and Processes</a></h4>
    <div class="row">
    <div class="col" v-for="governanceSystem in governanceSystems" :key="governanceSystem.id">
      <popover-button :description="governanceSystem.description" :title="governanceSystem.title" >
      {{governanceSystem.title}}
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
      governanceSystems: [
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
  border-radius: 2rem;
}
</style>
