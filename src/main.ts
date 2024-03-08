import './assets/main.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'

import VueQrcode from '@chenfengyuan/vue-qrcode';

import App from './App.vue'
import router from './router'

import { useUserStore } from "@/stores/users";
import { useClubStore } from "@/stores/club"

const app = createApp(App);

app.component(VueQrcode.name, VueQrcode);

app.use(createPinia());

app.use(router)


app.mount('#app')

let store = useUserStore();

watch(
 store.$state,
 (state) => {
    localStorage.setItem("user", JSON.stringify(state.user));
 },  
 { deep: true }
);