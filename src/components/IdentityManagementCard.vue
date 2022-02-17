<template>
      <base-card class="identity col-2">
        <h2 class="text-center text-white w-100"><a href="/identity-management" style="color:white; text-decoration:none">Identity <br>Management</a></h2>
        <base-button>Identity Proofing</base-button>
        <base-button>Sponsorship</base-button>
        <base-button>Identity Establishment</base-button>
        <base-button>Entitlements and Roles</base-button>
        <base-button>Identity Lifecycle Management
        </base-button>
        <base-button>Authoritative Attribute Exchange Service
        </base-button>
        <base-button>Identity Repositories
        </base-button>
        <base-button>Delegated Administration
        </base-button>
        <base-button>User Self-Service
        </base-button>
      </base-card>
</template>

<script>
import BaseCard from './UI/BaseCard.vue'
import BaseButton from './UI/BaseButton.vue'
export default {
  components: {
    BaseCard,
    BaseButton
  }
}
</script>

<style scoped>
.identity {
  background-color: #c00000;
}
</style>