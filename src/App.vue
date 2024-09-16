<script setup lang="ts">
import Navbar from '@/components/Navbar/Navbar.vue';
import { DarkTheme, LightTheme } from '@/constants/app';

import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
</script>

<template>
  <main
        class="container"
        :class="{ 'container-dark-theme': themeStore.theme === DarkTheme,
                  'container-light-theme': themeStore.theme === LightTheme }"
    >
    <!-- <img src="https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg" alt="Falling Stars"> -->

        <Navbar />
  </main>
</template>

<style lang="less">
@import '@/styles/variables.less';
@import '@/styles/main.less';
@import '@/styles/scrollbar.less';


#app {
    user-select: none;

    .container {
        min-height: 200vh;
        width: 100%;
        font-family: 'QuicksandRegular', serif;

        transition: color ease @theme-switch-time;
    }

    .section1 {
        position: relative;
        transition: background ease @theme-switch-time,
    }

    .container-dark-theme {
        background: #dark[background];
        // background-color: #dark[background-color];
        color: #dark[text-color];
    }

    .container-light-theme {
        background: #light[background];
        // background-color: #light[background-color];
        color: #light[text-color];
    }

    .pattern {
        position: absolute;
        top: 50px;
        transform: scaleX(-1);
    }
}
</style>
