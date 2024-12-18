import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import TrendPage from '@/pages/TrendPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import ArticlePage from '../pages/ArticlePage.vue'
import CabinetPage from '../pages/cabinet/CabinetPage.vue'
import CabinetProfile from '../pages/cabinet/CabinetProfile.vue'
import CabinetFavorites from '../pages/cabinet/CabinetFavorites.vue'
import CabinetCertificates from '../pages/cabinet/CabinetCertificates.vue'
import CabinetMaterials from '../pages/cabinet/CabinetMaterials.vue'
import RegisterPage from '../pages/auth/RegisterPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import WebinarsPage from '@/pages/webinar/WebinarsPage.vue'
import CurrentWebinar from '@/pages/webinar/CurrentWebinar.vue'
import NotFound from '@/pages/not-found/NotFound.vue'
import EditMaterialPage from '@/pages/edit-material/EditMaterialPage.vue'
import ErrorPage from '@/pages/error/ErrorPage.vue'
import ForgotPassword from '@/pages/auth/ForgotPassword.vue'
import AdministratorPage from '@/pages/administrator/AdministratorPage.vue'
import { useUserStore } from '@/stores/userStore'

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
                    component: ArticlePage
                },
                {
                    path: ':name',
                    name: 'trend-page',
                    component: TrendPage
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/blog',
            name: 'blog',
            children: [
                {
                    path: '',
                    name: 'blog-page',
                    component: BlogPage
                },
                {
                    path: 'article/:id',
                    name: 'blog-article',
                    component: ArticlePage
                }
            ]
        },
        {
            path: '/auth',
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: LoginPage
                },
                {
                    path: 'register',
                    name: 'register',
                    component: RegisterPage
                },
                {
                    path: 'for-got-password',
                    name: 'for-got-password',
                    component: ForgotPassword
                }
            ]
        },
        {
            path: '/lk',
            component: CabinetPage,
            meta: { protected: true },
            children: [
                {
                    path: 'profile',
                    name: 'profile',
                    component: CabinetProfile,
                    meta: { protected: true }
                },
                {
                    path: 'favorites',
                    name: 'favorites',
                    component: CabinetFavorites,
                    meta: { protected: true }
                },
                {
                    path: 'certificates',
                    name: 'certificates',
                    component: CabinetCertificates,
                    meta: { protected: true }
                },
                {
                    path: 'materials',
                    name: 'materials',
                    component: CabinetMaterials,
                    meta: { protected: true }
                }
            ]
        },
        {
            path: '/material',
            children: [
                {
                    path: 'add',
                    name: 'add',
                    component: EditMaterialPage
                },
                {
                    path: 'edit/article/:id',
                    name: 'edit-article',
                    component: EditMaterialPage
                },
                {
                    path: 'edit/webinar/:id',
                    name: 'edit-webinar',
                    component: EditMaterialPage
                }
            ]
        },

        {
            path: '/webinars',
            name: 'webinars',
            component: WebinarsPage
        },
        {
            path: '/webinar/:id',
            name: 'webinar',
            component: CurrentWebinar
        },
        {
            path: '/error',
            name: 'error',
            component: ErrorPage
        },
        {
            path: '/administrator',
            name: 'administrator',
            component: AdministratorPage,
            meta: { protected: true, admin: true }
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                top: 0,
                behavior: 'smooth'
            }
        }
    }
})

router.beforeEach((to, from, next) => {
    const user = useUserStore()
    if (to.matched.some((route) => route.meta.protected && route.meta.admin)) {
        if (
            localStorage.getItem('token') &&
            (user.getUser?.role === 'ROLE_ADMIN' || user.getUser?.role === 'ROLE_MODERATOR')
        ) {
            next()
            return
        }
        next('/')
    } else if (to.matched.some((route) => route.meta.protected)) {
        if (localStorage.getItem('token')) {
            next()
            return
        }
        next('/')
    } else {
        next()
    }
})

export default router
