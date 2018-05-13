import navigator from "./navigator"
import vueRouterTransition from "./vue-router-transition"
export default {
    install(Vue,router){
        navigator(router);
        Vue.component('vue-router-transition',vueRouterTransition);
    }
}