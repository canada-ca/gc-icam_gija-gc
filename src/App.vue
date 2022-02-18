<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
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
}
</style>
