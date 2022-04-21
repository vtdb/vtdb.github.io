<template>
    <div>
        <div>
            {{ t("components.GroupAbout.type") }}:
            <SearchLink :to="{ name: LIST_TYPE_GROUPS, query: { type: group?.type ?? 0 } }"
                :title="t(`dictionaries.group.types.${group?.type ?? 0}`)" />
        </div>
        <div>
            {{ t("components.GroupAbout.status") }}:
            <SearchLink :to="{ name: LIST_TYPE_GROUPS, query: { status: group?.status ?? 0 } }"
                :title="t(`dictionaries.group.statuses.${group?.status ?? 0}`)" />
        </div>
    </div>

</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router';
import { useGroupsStore } from '@/stores/groups';
import { useLanguageStore } from '@/stores/language';
import { useVtubersStore } from '@/stores/vtubers';
import { computed, onBeforeMount } from '@vue/runtime-core';
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS } from '@/utils/consts/listTypes';
import { PAGE_TYPE_GROUP } from '@/utils/consts/pageTypes'
import SearchLink from '@/components/SearchLink.vue'

const { t } = useI18n({ useScope: 'global' })

const props = defineProps(['id']);

const route = useRoute();

const groupsStore = useGroupsStore();
const languageStore = useLanguageStore();
const vtubersStore = useVtubersStore();

onBeforeMount(() => {
    if (!groupsStore.listOnceLoaded)
        groupsStore.requestList();
    if (!groupsStore.namesOnceLoaded)
        groupsStore.requestNames();
    if (!groupsStore.descriptionsOnceLoaded)
        groupsStore.requestDescriptions();

    if (!vtubersStore.listOnceLoaded)
        vtubersStore.requestList();
    /*
    if (!vtubersStore.namesOnceLoaded)
        vtubersStore.requestNames();
    if (!vtubersStore.descriptionsOnceLoaded)
        vtubersStore.requestDescriptions();
    */
    /*
     if (!languageStore.langNamesAreSet)
         languageStore.setLangNames();
     if (!languageStore.knowledgeOnceLoaded)
         languageStore.requestKnowledge();
    */
});
const group = computed(() => groupsStore.getById(props.id));
</script>

<style>
</style>