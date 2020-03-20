import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import login from './components/login'
import home from './components/home'
import notFoundPage from './components/notFoundPage'

Vue.config.productionTip = false


var router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: 'login'
            }

        },

        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path : '*',
            name : '404',
            component : notFoundPage
        }
    ]
})

Vue.use(VueRouter)
new Vue({
    router: router,

    render: h => h(App),
}).$mount('#app')
