import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from './components/UI/BaseCard.vue'
import ResourceConsumers from './components/ResourceConsumers.vue'
import GovernanceSystems from './components/GovernanceSystems.vue'
import AuthoritativeSources from './components/AuthoritativeSources.vue'
import IdentityManagement from './components/IdentityManagement.vue'
import Federation from './components/Federation.vue'
import AccessManagement from './components/AccessManagement.vue'
import ProtectedResources from './components/ProtectedResources.vue'
import CredentialManagement from './components/CredentialManagement.vue'
import Home from './components/Home.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

library.add(fas)

const router = createRouter({
  history: createWebHistory('/gc-icam_gijia-gc/'),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/resource-consumers',
      component: ResourceConsumers
    },
    {
      path: '/governance-systems',
      component: GovernanceSystems
    },
    {
      path: '/authoritative-sources',
      component: AuthoritativeSources
    },
    {
      path: '/identity-management',
      component: IdentityManagement
    },
    {
      path: '/federation',
      component: Federation
    },
    {
      path: '/access-management',
      component: AccessManagement
    },
    {
      path: '/protected-resources',
      component: ProtectedResources
    },
    {
      path: '/credential-management',
      component: CredentialManagement
    }
  ]
})
const app = createApp(App)

app.use(router)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
