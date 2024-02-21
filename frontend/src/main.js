import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// allows user to store cookies in the frontend
import  vueCookies  from 'vue-cookies'

createApp(App).use(store).use(router).use(vueCookies).mount('#app')
