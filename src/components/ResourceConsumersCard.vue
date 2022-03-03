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
export default {
  components: {
    PopoverButton,
    IconButton,
  },
  data() {
    return {
      resourceConsumers: [
        {
          id: "users",
          iconImg: "assets/user.png",
          iconAlt: "Users",
          title: "Users",
          description:
            "internal and external consumers of GC system and information resources",
        },
        {
          id: "businesses-and",
          iconImg: "assets/business.png",
          iconAlt: "Businesses and Organizations",
          title: "Businesses and Organizations",
          description:
            "businesses and other levels of government that interact with the GC",
        },
        {
          id: "devices",
          iconImg: "assets/devices.png",
          iconAlt: "Devices",
          title: "Devices",
          description:
            "any device that needs to be authenticated to gain access to GC system and information resources",
        },
        {
          id: "applications",
          iconImg: "assets/applications.png",
          iconAlt: "Applications",
          title: "Applications",
          description:
            "applications and services that interact with one another",
        },
        {
          id: "ai-robots",
          iconImg: "assets/robots.png",
          iconAlt: "AI/Robots",
          title: "AI/Robots",
          description:
            "advanced technologies that can act on behalf of a user or embedded in a device or application",
        },
      ],
    };
  },
  computed: {
    makeWider(id) {
      if (id === "devices") {
        return "wider";
      }
      return "";
    },
  },
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
