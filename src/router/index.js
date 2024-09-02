import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import TrendPage from '@/pages/TrendPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import ArticlePage from '../pages/ArticlePage.vue'
import CabinetPage from '../pages/CabinetPage.vue'
import CabinetProfile from '../pages/CabinetProfile.vue'
import CabinetFavorites from '../pages/CabinetFavorites.vue'
import CabinetCertificates from '../pages/CabinetCertificates.vue'
import CabinetMaterials from '../pages/CabinetMaterials.vue'
import RegisterPage from '../pages/auth/RegisterPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import AddNewsPage from '../pages/moderator/AddNewsPage.vue'
import ModeratorPage from '../pages/moderator/ModeratorPage.vue'



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
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterPage,
        },     
        {
            path: '/lk',
            component: CabinetPage,
            children: [              
                {
                    path: 'profile',
                    name: 'profile',                    
                    component: CabinetProfile,
                },
                {
                    path: 'favorites',
                    name: 'favorites',                    
                    component: CabinetFavorites,
                },
                {
                    path: 'certificates',
                    name: 'certificates',                    
                    component: CabinetCertificates,
                },
                {
                    path: 'materials',
                    name: 'materials',                    
                    component: CabinetMaterials,
                },
            ]
        },
        {
            path: '/moderator',
            component: ModeratorPage,
            children: [      
                {
                    path: 'add-news',
                    name: 'add-news',                    
                    component: AddNewsPage,
                },
            ]
        },

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
