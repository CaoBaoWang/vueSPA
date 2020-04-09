import Vue from 'vue'
import App from './App.vue'
import {router as router} from './router'
import {api} from  './modules/index';
import store from './vuex/store'


// Vue.use(VueRouter);
Vue.prototype.$api = api ;
Vue.config.productionTip = false;








new Vue({
    router,
    store ,
    render: h => h(App),
}).$mount('#app')
