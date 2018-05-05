<template>
    <section>
        这里是首页
        <div style="margin-top:10px;">
            <button @click="gotoUserList">进入用户列表页面</button>
        </div>

    </section>
</template>

<script>
export default{
    methods:{
        gotoUserList(){
            this.$router.push({
                path:'/user/index',
            })
        },
    }
}
</script>