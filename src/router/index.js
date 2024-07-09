import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import TrendPage from '@/pages/TrendPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import ArticlePage from '../pages/ArticlePage.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path: '/trend',
            name: 'trend',            
            children: [
                {
                    path: ':name/:id',
                    name: 'trend-article',               
                    component: ArticlePage,
                },
                {
                    path: ':name',
                    name: 'trend-page',               
                    component: TrendPage,
                },
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/blog',
            name: 'blog',
            children: [              
                {
                    path: '',
                    name: 'blog-page',                    
                    component: BlogPage,
                },
                {
                    path: 'article/:id',
                    name: 'blog-article',                    
                    component: ArticlePage,
                },
            ]
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                top: 0, behavior: 'smooth',
            }
        }
    }
})

export default router
