import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)


export default new vueRouter({
    routes:[
        {
            path:'/',
            component:()=>import("@/pages/index/index"),
        },
        {
            path:'/user/index',
            component:()=>import("@/pages/user/index"),
        },
        {
            path:'/user/info',
            component:()=>import("@/pages/user/info"),
            children:[
                {
                    path:'',
                    component:()=>import("@/pages/user/realInfo"),
                },
                {
                    path:'moreInfo',
                    component:()=>import("@/pages/user/moreInfo"),
                }

            ],
        }
    ],
})