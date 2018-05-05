import Vue from 'vue'


import router from "@/router"
import App from './App'
import 'vue-transition.css'

import vueRouterTransition from "src"
Vue.use(vueRouterTransition,router)

new Vue({
    el: '#app',
    router,
    render(h){
        return h('App');
    },
    components:{
        App,
    },
})