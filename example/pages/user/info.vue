<template>
    <section>
        <vue-router-transition 
            forward-name="move-right-to-left"
            backward-name="move-left-to-right"
        >
            <router-view class="app-router-view"></router-view>
        </vue-router-transition>
    </section>
</template>

<script>
export default{

}
</script>