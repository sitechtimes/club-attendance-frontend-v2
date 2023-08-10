import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueQrcode from '@chenfengyuan/vue-qrcode';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component(VueQrcode.name, VueQrcode);

app.use(createPinia())
app.use(router)


app.mount('#app')
