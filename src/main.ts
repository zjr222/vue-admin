import { createApp } from 'vue'
import router from '@/routes'
import App from './App.vue'
import { createPinia } from 'pinia'
import * as Api from '@/https'

const store = createPinia()
const app = createApp(App)
app.config.globalProperties.$request = Api
app.use(store).use(router).mount('#app')
