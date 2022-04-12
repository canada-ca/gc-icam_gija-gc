<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-11">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link :to="lang">{{ $t("home") }}</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ header }}
            </li>
          </ol>
        </nav>
      </div>
      <div class="col-1">
        <toggle-language></toggle-language>
      </div>
    </div>
    <div class="row">
      <div class="col-2 start pt-3" :class="mode">
        <h5>{{ header }}</h5>
      </div>
    </div>
    <description-card
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :detail="item.detail"
      @detail="showDetail(item)"
      :mode="mode"
    ></description-card>
    <div class="row">
      <div class="col-2 end" :class="mode">&nbsp;</div>
    </div>
    <modal-card :modalHead="modalHead" :modalBody="modalBody" />
  </div>
</template>

<script>
import DescriptionCard from "./DescriptionCard.vue";
import ToggleLanguage from "./ToggleLanguage.vue";
import ModalCard from "./ModalCard.vue";

export default {
  components: {
    DescriptionCard,
    ToggleLanguage,
    ModalCard
  },
  data() {
    return {
      modalHead: "",
      modalBody: ""
    };
  },
  props: ["header", "mode", "items"],
  computed: {
    lang() {
      return "/" + this.$i18n.locale;
    }
  },
  methods: {
    showDetail(info) {
      this.modalHead = info.title[this.$i18n.locale];
      this.modalBody = info.detail[this.$i18n.locale];
    }
  }
};
</script>

<style scoped>
.start {
  border-start-start-radius: 2rem;
  border-start-end-radius: 2rem;
}
.end {
  border-end-start-radius: 2rem;
  border-end-end-radius: 2rem;
}
</style>
