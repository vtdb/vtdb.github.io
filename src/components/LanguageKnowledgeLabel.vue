<template>
    <div @mouseover="tooltip?.show()" @mouseleave="tooltip?.hide()" class="lang-knowledge-label-container">
        <div class="lang-knowledge-link-wrapper">
            <SearchLink :to="{ name: LIST_TYPE_VTUBERS, query: { lang: langKnowledge.lang } }"
                :title="languageStore.getName(langKnowledge.lang)" />
        </div>
        <Tooltip ref="tooltip" vertical>
            <div class="lang-knowledge-tooltip-content">
                <div>{{ t('dictionaries.language.usageLabel') }}:
                    {{ t(`dictionaries.language.usage.${langKnowledge.usage ?? 0}`) }}</div>
                <div>{{ t('dictionaries.language.levelLabel') }}:
                    {{ t(`dictionaries.language.level.${langKnowledge.level ?? 0}`) }}</div>
            </div>
        </Tooltip>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/stores/language';
import { onBeforeMount, ref } from '@vue/runtime-core';
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS } from '@/utils/consts/listTypes';
import Tooltip from './Tooltip.vue';
import SearchLink from './SearchLink.vue';

const { t } = useI18n({ useScope: 'global' })

const props = defineProps({ 'langKnowledge': Object });
const tooltip = ref(null);

const languageStore = useLanguageStore();

onBeforeMount(() => {
    if (!languageStore.langNamesAreSet)
        languageStore.setLangNames();
})
</script>

<style scoped>
.lang-knowledge-label-container,
.lang-knowledge-link-wrapper {
    display: inline-block;
    position: relative;
}

.lang-knowledge-label-container::after {
    content: ',\00A0';
}

.lang-knowledge-label-container:last-child::after {
    content: '';
}

.lang-knowledge-tooltip-content {
    width: 200px;
}
</style>