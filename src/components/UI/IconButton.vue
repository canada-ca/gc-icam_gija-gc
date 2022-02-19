<template>
  <img :src="srcUrl" :alt="srcAlt">
</template>

<script>
export default {
  props: ['srcUrl', 'srcAlt'], 
}
</script>

<style scoped>
img{
  width:4rem;
  display:block;
  margin:0.5rem auto;
}
</style>