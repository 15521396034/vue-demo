import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: () => import('./pages/Index.vue'),
            children: [
                {
                    path: '/',
                    component: () => import('./pages/home.vue'),
                }
            ]
        }
    ]
})

export default router