<template>
  <div class="governance container"  style="cursor:pointer">
    <h2><a href="https://ancentury.github.io/ICAM/identityManagement-en.html" style="color:white">Governance Systems and Processes</a></h2>
    <button type="button" class="btn example-popover" data-bs-trigger="hover focus" data-bs-toggle="popover" data-bs-content="the process of organizing data into informational summaries in order to monitor how different ICAM components are performing and complying with policy" title="Reporting & Analytics">
      Reporting & Analytics
    </button>
    <button type="button" class="btn">
      Access Certification & Discovery
    </button>
    <button type="button" class="btn">
      Approval Workflows
    </button>
    <button type="button" class="btn">
      Reporting & Analytics
    </button>
    <button type="button" class="btn">
      Reporting & Analytics
    </button>
  </div>
</template>

<script>
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js'
export default {
  data(){
    return {
      resources: [{

      }]
    }
  },
  mounted(){
    Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
        .forEach(popoverNode => new Popover(popoverNode));
  },
  methods:{
    governance(){
    },
    showDesc(){
      
    } 
  }
};
</script>

<style>
.governance{
  background-color:darkblue;
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
