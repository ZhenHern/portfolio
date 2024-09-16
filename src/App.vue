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
    <div class="lamp">
        <div class="line"></div>
        <div class="shade">
            <div class="bulb"></div>
        </div>
    </div>
  </main>
</template>

<style lang="less">
@import '@/styles/variables.less';
@import '@/styles/main.less';
@import '@/styles/scrollbar.less';


#app {
    user-select: none;

    .container {
        min-height: 25vh;
        width: 100%;
        font-family: 'QuicksandRegular', serif;

        transition: background-color ease @theme-switch-time,
                    color ease @theme-switch-time;
    }
// background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

    .container-dark-theme {
        background: #dark[background];
        background-color: #dark[background-color];
        color: #dark[text-color];
    }

    .container-light-theme {
        background: #light[background];
        background-color: #light[background-color];
        color: #light[text-color];
    }

    img {
        width: 100%;
    }

    .lamp {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .line {
        width: 0.4rem;
        height: 8rem;
        background-color: @lamp-color; /* Line color */
        position: absolute;
        top: 0;
    }

    .shade {
        position: relative;
        top: 7rem;
        width: 0;
        height: 0;
        border-left: 1.6rem solid transparent;
        border-right: 1.6rem solid transparent;
        border-bottom: 2.1rem solid @lamp-color; /* Shade color */
        margin-bottom: 10px; /* Space between shade and bulb */
    }

    .bulb {
        position: relative;
        top: 2.05rem;
        left: 50%;
        transform: translateX(-50%);
        width: 1.5rem;
        height: 0.8rem; /* Half the height for semicircle */
        background-color: #f0f0f0; /* Bulb color */
        border-radius: 0 0 2.25rem 2.25rem; /* Rounded corners to create semicircle */
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3); /* Optional: glow effect */
    }
}
</style>
