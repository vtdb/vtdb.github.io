<template>
    <div class="group-tooltip">
        <div>
            <div class="group-tooltip-name">
                <router-link :to="{ name: PAGE_TYPE_GROUP, params: { id } }">
                    <NameHeadline :names="groupsStore.getNamesByFormat(id)" />
                </router-link>
            </div>
            <GroupAbout :id="id" class="group-tooltip-about" />
            <div class="group-tooltip-description">
                {{ groupsStore.getDescription(id).text }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed, onBeforeMount } from '@vue/runtime-core';
import { useGroupsStore } from '@/stores/groups';
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS } from '@/utils/consts/listTypes';
import { PAGE_TYPE_VTUBER, PAGE_TYPE_GROUP } from '@/utils/consts/pageTypes';
import NameHeadline from '@/components/NameHeadline.vue';
import GroupAbout from '@/components/GroupAbout.vue'
import TileSet from '@/components/TileSet.vue';

const { t } = useI18n({ useScope: 'global' })

const props = defineProps({ 'id': [Number, String], 'showPoster': { type: Boolean, defautl: false } });

const groupsStore = useGroupsStore();

onBeforeMount(() => {
    if (!groupsStore.listOnceLoaded)
        groupsStore.requestList();
    if (!groupsStore.namesOnceLoaded)
        groupsStore.requestNames();
    if (!groupsStore.namesOnceLoaded)
        groupsStore.requestDescriptions();
});

</script>

<style scoped>
.group-tooltip {
    width: 300px;
    text-align: start;
}

.group-tooltip-name,
.group-tooltip-about,
.group-tooltip-description {
    margin-bottom: 5px;
}
</style>