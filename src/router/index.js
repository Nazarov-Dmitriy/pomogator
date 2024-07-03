import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import TrendPage from '@/pages/TrendPage.vue'
import AboutPage from '../pages/AboutPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path: '/trend/:name',
            name: 'trend',
            component: TrendPage
        },
        {
            path: '/about',
            name: 'trend',
            component: AboutPage
        }
    ]
})

export default router
