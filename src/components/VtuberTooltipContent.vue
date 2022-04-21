<template>
    <div class="vtuber-tooltip">
        <div class="info">
            <div class="vtuber-tooltip-name">
                <router-link :to="{ name: PAGE_TYPE_VTUBER, params: { id } }">
                    <NameHeadline :names="vtubersStore.getNamesByFormat(id)" />
                </router-link>
            </div>
            <VtuberAbout :id="id" class="vtuber-tooltip-about" />
            <div class="vtuber-tooltip-description">
                {{ vtubersStore.getDescription(id).text }}
            </div>
        </div>
        <div class="groups">
            <span>{{ t('views.VtuberView.groups') }}</span>
            <TileSet :type="PAGE_TYPE_GROUP" :items="displayedGroups" :store="groupsStore"
                :linkName="PAGE_TYPE_GROUP" />
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, onBeforeMount } from '@vue/runtime-core';
import { useVtubersStore } from '@/stores/vtubers';
import { useGroupsStore } from '@/stores/groups';
import { useVtuberGroupRelationsStore } from '@/stores/vtuber-group-relations';
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS } from '@/utils/consts/listTypes';
import { PAGE_TYPE_VTUBER, PAGE_TYPE_GROUP } from '@/utils/consts/pageTypes';
import NameHeadline from '@/components/NameHeadline.vue';
import VtuberAbout from '@/components/VtuberAbout.vue'
import TileSet from '@/components/TileSet.vue';

const { t } = useI18n({ useScope: 'global' })

const props = defineProps({ 'id': [Number, String], 'showPoster': { type: Boolean, defautl: false } });

const vtubersStore = useVtubersStore();
const groupsStore = useGroupsStore();
const vtuberGroupRelationsStore = useVtuberGroupRelationsStore();

onBeforeMount(() => {
    if (!vtubersStore.listOnceLoaded)
        vtubersStore.requestList();
    if (!vtubersStore.namesOnceLoaded)
        vtubersStore.requestNames();
    if (!vtubersStore.descriptionsOnceLoaded)
        vtubersStore.requestDescriptions();

    if (!groupsStore.listOnceLoaded)
        groupsStore.requestList();
    if (!groupsStore.namesOnceLoaded)
        groupsStore.requestNames();

    if (!vtuberGroupRelationsStore.listOnceLoaded)
        vtuberGroupRelationsStore.requestList();
});

const maxGroupCount = 2;
const displayedGroups = computed(() => vtubersStore.getGroups(props.id).slice(0, maxGroupCount));
</script>

<style scoped>
.vtuber-tooltip {
    display: grid;
    width: 400px;
    gap: 10px;
    grid-template-columns: 5fr 1fr;
}

.info {
    grid-column: 1;
}

.groups {
    grid-column: 2;
    text-align: center;
}

.vtuber-tooltip-name,
.vtuber-tooltip-about,
.vtuber-tooltip-description {
    margin-bottom: 5px;
}
</style>