<template>
    <div>
        <h1>{{ t('views.GroupsListView.header') }}</h1>
        <TileSet :type="PAGE_TYPE_GROUP" :items="displayedGroups" :store="groupsStore" :linkName="PAGE_TYPE_GROUP" />  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from '@vue/runtime-core';
import { useGroupsStore } from '@/stores/groups';
import { PAGE_TYPE_GROUP } from '@/utils/consts/pageTypes';
import TileSet from '@/components/TileSet.vue';

const { t, locale } = useI18n({ useScope: 'global' })

const groupsStore = useGroupsStore();
groupsStore.requestListWithTranslations();

const displayedGroups = computed(() => groupsStore.list);
</script>

<style>
</style>