import Vue from 'vue'
import VueRouter from "vue-router";

import login from './components/login'
import home from './components/home/'
import notFoundPage from './components/notFoundPage'
import Home from "./components/home/home";
import UsePower from './components/home/usePower'
import Discover from './components/home/discover'

import Me from './components/home/me'



Vue.use(VueRouter);


const routes =  [
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
                path: 'home',
                name: 'home',
                component: Home

            },
            {
                path: '/usePower',
                name: 'usePower',
                component: UsePower
            },
            {

                path: '/discover',
                name: 'discover',
                component: Discover

            },
            {
                path:'/me',
                name: 'me',
                component: Me
            },

        ]
    },

    {
        path: '*',
        name: '404',
        component: notFoundPage
    }
];


var router = new VueRouter({
    routes,
});



export {router};