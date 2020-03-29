import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: () => import('./pages/Index.vue'),
            children: [
                {
                    path: '/',
                    meta:{title: '首页'},
                    component: () => import('./pages/home.vue'),
                },
                {
                    path: 'category',
                    meta:{title: '分类'},
                    component: () => import('./pages/category.vue'),
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});

export default router;