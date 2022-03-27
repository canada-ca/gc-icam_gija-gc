import { createApp } from 'vue'
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

app.use(router)
app.use(i18n)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
