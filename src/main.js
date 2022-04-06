import { createApp } from 'vue'
import { createGtm } from '@gtm-support/vue-gtm'
import router from './router.js'
import i18n from './i18n.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from './components/UI/BaseCard.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

library.add(fas)

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(
  createGtm({
    id: 'GTM-PC8ZFZK',
    queryParams: {
      // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
      // gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
      // gtm_preview: 'env-4',
      // gtm_cookies_win: 'x'
    },
    defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    nonce: '2726c7f26c', // Will add `nonce` to the script tag
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    vueRouter: router, // Pass the router instance to automatically sync with router (optional)
    ignoredViews: ['homepage'], // Don't trigger events for specified router names (optional)
    trackOnNextTick: false // Whether or not call trackView in Vue.nextTick
  })
)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
