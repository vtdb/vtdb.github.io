<template>
    <div>
        <h1>{{ t('views.VtubersListView.header') }}</h1>
        <TileSet :type="PAGE_TYPE_VTUBER" :items="displayedVtubers" :store="vtubersStore"
            :linkName="PAGE_TYPE_VTUBER" />  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from '@vue/runtime-core';
import { useVtubersStore } from '@/stores/vtubers';
import { PAGE_TYPE_VTUBER } from '@/utils/consts/pageTypes';
import TileSet from '@/components/TileSet.vue';

const { t, locale } = useI18n({ useScope: 'global' })

const vtubersStore = useVtubersStore();
vtubersStore.requestListWithTranslations();

const displayedVtubers = computed(() => vtubersStore.list);
</script>

<style>
</style>