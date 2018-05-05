<template>
    <div id="app">
        <transition name="move-right-to-left">
            <router-view id="app-router-view"></router-view>
        </transition>
    </div>
</template>

<script>

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

#app #app-router-view {
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