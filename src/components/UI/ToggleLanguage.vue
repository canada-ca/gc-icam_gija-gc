<template>
  <a
    href="#"
    title="Français - Version française de cette page"
    lang="fr"
    @click="toggleLang"
    >{{ computedLang }}</a
  >
</template>

<script>
export default {
  methods: {
    toggleLang() {
      if (this.$i18n.locale == "fr") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "fr";
      }
      let locale = this.$i18n.locale;
      localStorage.setItem("locale", locale);
      this.$router.push({ params: { lang: locale } });
    }
  },
  computed: {
    computedLang() {
      return this.$i18n.locale == "fr" ? "English" : "Français";
    }
  }
};
</script>
