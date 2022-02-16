<template>
  <GovernanceSystems />
</template>

<script>
import GovernanceSystems from './components/GovernanceSystems.vue'

export default {
  name: 'App',
  components: {
    GovernanceSystems
  },
  data(){
    return {
      storedResources: [
        {
          id: '',
          title: '',
          description: '',
        },
        {
          id: '',
          title: '',
          description: '',
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
