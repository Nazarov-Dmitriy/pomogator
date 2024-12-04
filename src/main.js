import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/styles/style.scss'
import { createYmaps } from 'vue-yandex-maps'
import router from './router'
import App from './App.vue'
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue'
import directives from './common/directive/directives'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(CkeditorPlugin)
app.use(
    createYmaps({
        apikey: import.meta.env.VITE_YANDEX_API
    })
)
directives(app)
app.mount('#app')
