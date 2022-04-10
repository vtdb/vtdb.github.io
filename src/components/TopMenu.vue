<template>
    <div class="top-menu">
        <RouterLink class="logo-link" :to="{ name: 'main' }">{{ t('components.TopMenu.main') }}</RouterLink>

        <nav>
            <RouterLink
                class="m-auto"
                :to="{ name: LIST_TYPE_VTUBERS }"
            >{{ t('components.TopMenu.vtubers') }}</RouterLink>
            <RouterLink
                class="m-auto"
                :to="{ name: LIST_TYPE_GROUPS }"
            >{{ t('components.TopMenu.groups') }}</RouterLink>
            <RouterLink class="m-auto" :to="{ name: 'about' }">{{ t('components.TopMenu.about') }}</RouterLink>
        </nav>
        <div class="m-auto">search bar</div>
        <LanguageSelector class="m-auto" />
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS, LIST_TYPE_SPECIES } from '@/utils/consts/listTypes';
import LanguageSelector from './LanguageSelector.vue';

const { t } = useI18n({ useScope: 'global' })
</script>

<style scoped>
.top-menu {
    position: relative;
    padding: 0 15px;
    color: #fff;
    height: var(--top-menu-height);
    border-bottom: 1px solid var(--color-background-soft);

    display: grid;
    grid-template-columns: 1fr 2fr 3fr 1fr;
    justify-content: center;
    align-content: center;
    justify-items: center;
}
.logo-link {
    font-weight: 500;
    font-size: 1.8em;
}
nav {
    display: flex;
    flex-wrap: nowrap;
    justify-self: stretch;
    justify-content: space-around;
    align-content: center;
}
.m-auto {
    margin: auto;
}
</style>