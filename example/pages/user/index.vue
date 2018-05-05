<template>
    <section>
        用户列表页

        <button @click="back">返回</button>

        <ul>
            <li v-for="item in users" :key="item.id">
                <router-link :to="{path:'/user/info',query:{id:item.id}}">
                    {{item.name}}
                </router-link>
            </li>
        </ul>

    </section>
</template>

<script>
export default{
    data(){
        return {
            users:[
                {
                    name:'张三',
                    id:1,
                },
                {
                    name:'李四',
                    id:2,
                },
                {
                    name:'王五',
                    id:3,
                }
            ],
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
            // this.$router.replace({
            //     path:'/'
            // })
        },
    },
}
</script>