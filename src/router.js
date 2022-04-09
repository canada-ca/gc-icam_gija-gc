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
      path: '/:lang/resource-consumers',
      component: ResourceConsumers
    },
    {
      path: '/:lang/governance-systems',
      component: GovernanceSystems
    },
    {
      path: '/:lang/authoritative-sources',
      component: AuthoritativeSources
    },
    {
      path: '/:lang/identity-management',
      component: IdentityManagement
    },
    {
      path: '/:lang/federation',
      component: Federation
    },
    {
      path: '/:lang/access-management',
      component: AccessManagement
    },
    {
      path: '/:lang/protected-resources',
      component: ProtectedResources
    },
    {
      path: '/:lang/credential-management',
      component: CredentialManagement
    },
    {
      path: '/:lang',
      name: 'home',
      component: Home
    }
  ]
});

export default router;