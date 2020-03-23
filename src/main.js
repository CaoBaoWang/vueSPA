import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import login from './components/login'
import home from './components/home'
import notFoundPage from './components/notFoundPage'

import HelloWorld from './components/HelloWorld'
import HomeMain from "./components/homeMain";


Vue.component('HelloWorld', HelloWorld);

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
            path: '',
            component: home,
            children: [

                {
                    name: 'home',
                    path: 'home',
                    component: HomeMain

                },
                {
                    name: 'helloWorld',
                    path: 'helloWorld',
                    component: HelloWorld
                },

            ]
        },
        {
            path: '*',
            name: '404',
            component: notFoundPage
        }
    ]
})

Vue.use(VueRouter)
new Vue({
    router: router,

    render: h => h(App),
}).$mount('#app')
