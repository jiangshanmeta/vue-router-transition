import routerProxy from './router-proxy'
import vueRouterTransition from "./vue-router-transition"
export default {
    install(Vue,router){
        routerProxy(router);
        Vue.component('vue-router-transition',vueRouterTransition);
    }
}