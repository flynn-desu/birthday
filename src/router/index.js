import {createRouter, createWebHistory} from 'vue-router'
import stamp from "../components/Stamp.vue";
import cover from "../components/Cover.vue"
import photoWall from "../components/PhotoWall.vue";
import calendar from "../components/Calendar.vue";

const routes = [
    {
        path: '/',
        name: 'cover',
        component: cover
    },
    {
        path: '/stamp',
        name: 'stamp',
        component: stamp,
    },
    {
        path: '/photoWall',
        name: 'photoWall',
        component: photoWall
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: calendar
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router