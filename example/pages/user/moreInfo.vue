<template>
    <section>
        更多信息
        <button @click="back">返回</button>
    </section>
</template>

<script>
export default{
    methods:{
        back(){
            this.$router.go(-1);
        },
    },
}
</script>