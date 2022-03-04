<template>
  <div class="resourceConsumers">
    <h5>
      <router-link to="/resource-consumers"
        >Resource <br />Consumers</router-link
      >
    </h5>
    <popover-button
      v-for="resourceConsumer in resourceConsumers"
      :description="resourceConsumer.description"
      :title="resourceConsumer.title"
      :key="resourceConsumer.id"
    >
      <icon-button
        :srcUrl="resourceConsumer.iconImg"
        :srcAlt="resourceConsumer.iconAlt"
        :class="resourceConsumer.id === 'devices' ? 'wider' : ''"
      />
      {{ resourceConsumer.title }}
    </popover-button>
  </div>
</template>

<script>
import IconButton from "./UI/IconButton.vue";
import PopoverButton from "./UI/PopoverButton.vue";
import resourceConsumers from "../resources/resourceConsumers.json";

export default {
  components: {
    PopoverButton,
    IconButton
  },
  data() {
    return {
      resourceConsumers
    };
  },
  computed: {
    makeWider(id) {
      if (id === "devices") {
        return "wider";
      }
      return "";
    }
  }
};
</script>

<style scoped>
.resourceConsumers {
  background-color: #fff;
}
h5,
h5 a {
  color: black;
}
h5 a:hover {
  color: #7030a0;
}
button {
  border: none;
  background-color: #fff;
}
.wider {
  width: 8rem;
  margin-left: -1rem;
}
</style>
