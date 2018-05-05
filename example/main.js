import Vue from 'vue'


import router from "@/router"
import App from './App'
import 'vue-transition.css'

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