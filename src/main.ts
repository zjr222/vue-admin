import { createApp } from 'vue'
import router from '@/routes'
import './style.css'
import App from './App.vue'
import * as Api from '@/https'


const app = createApp(App);
app.config.globalProperties.$request = Api;
app.use(router);
app.mount('#app')
