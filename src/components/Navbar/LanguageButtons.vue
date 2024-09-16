<script setup lang="ts">
import { useLanguageSwitcher } from '@/composables/useLanguageSwitcher';
// import { useCursorHover } from '@/directives/useCursorHover';
import { EnglishLanguage, ChineseLanguage } from '@/constants/app';

const { t, changeLanguage } = useLanguageSwitcher();

// const vCursorHover = useCursorHover();
</script>

<template>
    <div data-aos="zoom-in-up">
        <button
            v-cursor-hover
            class="change-language-button"
            @click="changeLanguage(ChineseLanguage);"
        >
            <img
                :src="require(`@/assets/images/flags/zh.png`)"
                class="flag"
                width="50"
                height="50"
                :alt="t('navbar.images.chineseFlag')"
            >
        </button>

        <button
            v-cursor-hover
            class="change-language-button"
            @click="changeLanguage(EnglishLanguage);"
        >
            <img
                :src="require(`@/assets/images/flags/en.png`)"
                class="flag"
                width="50"
                height="50"
                :alt="t('navbar.images.greatBritainFlag')"
            >
        </button>
    </div>
</template>

<style lang="less" scoped>
@import '@/styles/variables.less';

.change-language-button {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    color: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
.flag {
    max-width: 80%;
    height: auto;
}

@media (min-width: @first-breakpoint) {
    .change-language-button {
        width: 3rem;
        height: 3rem;
    }
}
</style>
