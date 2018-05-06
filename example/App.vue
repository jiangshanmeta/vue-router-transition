<template>
    <div id="app">
        <vue-router-transition 
            forward-name="move-right-to-left" 
            backward-name="move-left-to-right"
            v-on:after-enter="afterEnter"
        >
            <router-view class="app-router-view"></router-view>
        </vue-router-transition>
    </div>
</template>

<script>
export default{
    methods:{
        afterEnter(){
            // console.log("test hook")
        }
    }
}
</script>

<style>
html,body,#app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
#app {
    perspective: 1200px;
}

#app .app-router-view {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    visibility: visible;
}
</style>