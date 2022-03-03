<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ header }}
        </li>
      </ol>
    </nav>
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
      :mode="mode"
    ></description-card>
    <div class="row">
      <div class="col-2 end" :class="mode">&nbsp;</div>
    </div>
  </div>
</template>

<script>
import DescriptionCard from "./DescriptionCard.vue";
export default {
  components: {
    DescriptionCard,
  },
  props: ["header", "mode", "items"],
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
