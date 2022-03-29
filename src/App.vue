<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  created() {
    const locale = localStorage.getItem("locale");
    if (locale) {
      this.$i18n.locale = locale;
    } else if (navigator.language) {
      this.$i18n.locale = navigator.language.substring(0, 2);
    }
    this.$router.push({
      params: {
        lang: this.$i18n.locale
      }
    });
  }
};
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
