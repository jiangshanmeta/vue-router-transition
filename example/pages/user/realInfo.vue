<template>
    <section>
        <button @click="$router.go(-1)">返回列表页</button>
        个人信息
        {{$route.query.id}}
        <button @click="gotoMoreInfo">更多</button>
    </section>
</template>

<script>
export default{
    methods:{
        gotoMoreInfo(){
            this.$router.push({
                path:'/user/info/moreInfo',
                query:{
                    id:this.$route.query.id,
                }
            });
        },
    },
}
</script>