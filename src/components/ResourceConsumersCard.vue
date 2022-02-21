<template>
  <div class="resourceConsumers">
    <h4>Resource <br>Consumers</h4>
    <popover-button v-for="resourceConsumer in resourceConsumers" :description="resourceConsumer.description" :title="resourceConsumer.title" :key="resourceConsumer.id">
      <icon-button :srcUrl="resourceConsumer.iconImg" :srcAlt="resourceConsumer.iconAlt" />
      {{resourceConsumer.title}}
    </popover-button>
  </div>
</template>

<script>
import IconButton from './UI/IconButton.vue'
import PopoverButton from './UI/PopoverButton.vue'
export default {
  components: {
    PopoverButton,
    IconButton,
  },
  data(){
    return {
      resourceConsumers:[
        {
          id:"users",
          iconImg:"/assets/user.png",
          iconAlt:"Users",
          title:"Users",
          description:"internal and external consumers of GC system and information resources"
        },
        {
          id:"businesses-and",
          iconImg:"/assets/business.png",
          iconAlt:"Businesses and Organizations",
          title:"Businesses and Organizations",
          description:"businesses and other levels of government that interact with the GC"
        },
        {
          id:"devices",
          iconImg:"/assets/user.png",
          iconAlt:"Users",
          title:"Devices",
          description:"any device that needs to be authenticated to gain access to GC system and information resources"
        },
        {
          id:"applications",
          iconImg:"/assets/user.png",
          iconAlt:"Users",
          title:"Applications",
          description:"applications and services that interact with one another"
        },
        {
          id:"ai-robots",
          iconImg:"/assets/user.png",
          iconAlt:"Users",
          title:"AI/Robots",
          description:"advanced technologies that can act on behalf of a user or embedded in a device or application"
        },
      ]
    }    
  }
}
</script>

<style scoped>
.resourceConsumers {
  background-color: #fff;
}
.resourceConsumers h4{
  color: black;
}
button{
  border:none;
  background-color: #fff;
}
</style>