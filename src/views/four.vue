<template>
    <div class="four-page">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "FourPage"
    }
</script>

<style scoped>
    .four-page{
        background: darkorange;
        width:100%;
        height:100%;
    }
</style>