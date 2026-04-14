import { createWebHistory, createRouter } from 'vue-router'

import App from '../App.vue'
import Navbar from '../components/Navbar.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Navbar,
        },
        {
            path: '/about',
            name: 'about',
            component: Navbar,
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: App,
        },
    ]
})

export default router