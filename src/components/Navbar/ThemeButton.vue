<script setup lang="ts">
import { onMounted, onUnmounted} from 'vue';
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
import { useThemeStore } from '@/stores/theme';
// import { useCursorHover } from '@/directives/useCursorHover';
import { DarkTheme, LightTheme } from '@/constants/app';

const { t } = useLanguageSwitcher();

const themeStore = useThemeStore();

// const vCursorHover = useCursorHover();

function applyRandomBlinking() {
    const bulb = document.querySelector('.bulb') as HTMLElement;
    if (bulb) {
        // Generate random duration and delay
        const randomDuration = Math.random() * (3 - 1) + 1; // Between 1s and 3s
        const randomInterval = Math.random() * (5 - 2) + 2; // Between 2s and 5s
        bulb.style.animation = `flicker ${randomDuration}s infinite`;
        bulb.style.background = 'red';
        // Clear previous animation and apply new random intervals
        bulb.style.animationTimingFunction = 'steps(1)'; // Adjust if necessary
    }
}

onMounted(() => {
    // applyRandomBlinking();
    // Update animation periodically
    // const intervalId = setInterval(applyRandomBlinking, 5000);

    // Clean up the interval on component unmount
    onUnmounted(() => {
        clearInterval(intervalId);
    });
});

</script>

<template>
    <button
        data-aos="fade-down"
        class="change-theme-button"
        @click="themeStore.toggle();"
    >
        <div class="lamp">
            <div class="line"></div>
            <div class="shade">
                <div class="bulb"></div>
            </div>
        </div>
    </button>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.change-theme-button {
    width: 3rem;
    height: 3rem;
    font-size: 3rem;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;

}

@media (min-width: @first-breakpoint) {
    .change-theme-button {
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
            box-shadow: 0 0 1rem 0.35rem rgba(250, 119, 250, 0.6);
            animation: flicker 1.5s infinite; /* Apply flicker animation */
            // animation: none;
        }
    }
}

@keyframes flicker {
    0%, 100% {
        box-shadow: 0 0 0rem 0rem rgba(250, 119, 250, 0.6); /* Purple shadow effect */
    }
    50% {
        // opacity: 0.5;
        box-shadow: 0 0 1rem 0.35rem rgba(250, 119, 250, 0.6); /* Slightly lighter purple shadow */
    }
    25%, 75% {
        // opacity: 0.7;
        box-shadow: 0 0 1rem 0.35rem rgba(250, 119, 250, 0.6); /* Slightly darker purple shadow */
    }
}
</style>
