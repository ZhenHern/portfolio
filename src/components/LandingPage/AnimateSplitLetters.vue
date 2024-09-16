<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps<{
    text: string;
}>();

var splitLetters = props.text.split('');

// Watch for changes in the text prop
watch(() => props.text, (newText) => {
    splitLetters = props.text.split('');
    restartAnimation();
});

// Function to restart animations
function restartAnimation() {
    // Select all elements with the class 'animation'
    const animatedElements = document.querySelectorAll('.animation');
    animatedElements.forEach((element) => {
        (element as HTMLElement).style.animation = 'none';
        (element as HTMLElement).offsetHeight;
        (element as HTMLElement).style.animation = '';
    });
}

const minScreenWidthToDisplayAnimation = 800;
const smallDevice = window.innerWidth <= minScreenWidthToDisplayAnimation;

function restartAnimationHover(event: Event) {
    const element = event.target! as HTMLElement;
    element.style.animation = 'none';
    // eslint-disable-next-line ts/no-unused-expressions
    element.offsetHeight; /* trigger reflow */
    element.style.animation = '';
}

</script>

<template>
    <span v-if="smallDevice">{{ props.text }}</span>

    <span
        v-for="(letter, index) in splitLetters"
        v-else
        :key="index"
        :style="{ animationDelay: `${index / 10}s` }"
        class="animation"
        @mouseover="restartAnimationHover($event);"
    >
        {{ letter }}
    </span>
</template>

<style lang="less">
.animation {
    position: relative;
    opacity: 0;
    animation: move-text 0.6s forwards;
}

@keyframes move-text {
    0% { bottom: 0; opacity: 1; }
    50% { bottom: 0.2em; }
    100% { bottom: 0; opacity: 1; }
}
</style>
