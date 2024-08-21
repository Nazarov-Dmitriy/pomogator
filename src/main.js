import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles/style.scss'
import { esc } from "./common/directive/v-esc.js";
import { createYmaps  } from 'vue-yandex-maps';
import router from './router'
import App from './App.vue'
const app = createApp(App);
app.use(createPinia());
app.use(router);

app.use(createYmaps({
    apikey: import.meta.env.VITE_YANDEX_API,
}));

app.directive("esc", { ...esc });
app.mount('#app')

