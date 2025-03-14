import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import stamp from "../components/Stamp.vue";
import cover from "../components/Cover.vue"
import photoWall from "../components/PhotoWall.vue";
import calendar from "../components/Calendar.vue";
import cake from "../components/Cake.vue";
import gift from "../components/Gift.vue";

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
    },
    {
        path: '/cake',
        name: 'cake',
        component: cake
    },
    {
        path: '/gift',
        name: 'gift',
        component: gift
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router