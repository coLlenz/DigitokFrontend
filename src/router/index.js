import Vue from 'vue';
import Router from 'vue-router';

import Login from './components/Login.vue';

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/login',
        component: Login,
        children: [
            //{ path: '/register', name: 'register', component: Register },
        ]
    },
    {
        path: '*',
        redirect: '/poppy-health/page/error_404',
        component: {
            render(c) { return c('router-view') }
        },
    }
    ]
});
