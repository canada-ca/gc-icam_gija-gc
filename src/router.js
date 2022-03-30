import { createRouter, createWebHistory } from 'vue-router'

import ResourceConsumers from './components/ResourceConsumers.vue'
import GovernanceSystems from './components/GovernanceSystems.vue'
import AuthoritativeSources from './components/AuthoritativeSources.vue'
import IdentityManagement from './components/IdentityManagement.vue'
import Federation from './components/Federation.vue'
import AccessManagement from './components/AccessManagement.vue'
import ProtectedResources from './components/ProtectedResources.vue'
import CredentialManagement from './components/CredentialManagement.vue'
import Home from './components/Home.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "home"
    },
    {
      path: '/:lang',
      name: 'home',
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
});

export default router;