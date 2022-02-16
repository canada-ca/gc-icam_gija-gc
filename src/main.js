import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseCard from './components/UI/BaseCard.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.mount('#app')
