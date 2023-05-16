
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import all of Bootstrap's CSS
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
