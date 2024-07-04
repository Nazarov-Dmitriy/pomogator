import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles/style.scss'
import { esc } from "./common/directive/v-esc.js";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
app.directive("esc", { ...esc });

