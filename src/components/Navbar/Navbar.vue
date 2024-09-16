<script setup lang="ts">
import Navigation from '@/components/Navbar/Navigation.vue';
</script>

<template>
    <div class="navbar">
        <Navigation />
    </div>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 100%;
    min-height: @navbar-height;
    border-top: @navbar-border solid @purple-color;
}

@media (min-width: @first-breakpoint) {
    .navbar {
        justify-content: space-evenly;
    }
}
</style>