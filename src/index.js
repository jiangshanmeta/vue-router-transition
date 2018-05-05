import routerProxy from './router-proxy'

export default {
    install(Vue,router){
        routerProxy(router)
    }
}