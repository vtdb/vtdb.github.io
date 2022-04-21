<template>
    <div v-if="groupsStore.listLoading">Loading</div>
    <div v-else-if="!group">
        <PageNotFound />
    </div>
    <div v-else>
        <header>
            <h1>
                <NameHeadline :names="groupsStore.getNamesByFormat(group?.id)" />
            </h1>
            <h5>
                <router-link :to="{ name: LIST_TYPE_GROUPS }">{{ t("views.GroupView.tofulllistlink") }}</router-link>
                / {{ t("views.GroupView.header") }}
            </h5>
        </header>
        <main class="the-grid">

            <div class="left-grid">
                <div class="poster">
                    <img class :src="group?.avatarUrl" :alt="groupsStore.getFormattedName(group?.id)"
                        :title="groupsStore.getFormattedName(group?.id)" />
                </div>

                <HeadlinedDiv class="about" :text="t('views.GroupView.about')">
                    <GroupAbout :id="group?.id" />
                </HeadlinedDiv>

                <TileSetWithHeadline class="parent-groups" v-if="displayedParentGroups.length > 0"
                    :type="PAGE_TYPE_GROUP" :headlineText="t('views.GroupView.parentGroups')"
                    :headlineTo="parentGroups.length > maxParentGroupsCount ? { name: LIST_TYPE_GROUPS, query: { child: group?.id } } : null"
                    :store="groupsStore" :tilesetTo="PAGE_TYPE_GROUP" :items="displayedParentGroups" />

            </div>

            <div class="mid-grid">

                <HeadlinedDiv class="description" :text="t('views.GroupView.description')">{{
                        groupsStore.getDescription(group?.id).text
                }}</HeadlinedDiv>

                <TileSetWithHeadline class="vtubers" v-if="displayedVtubers.length > 0" :type="PAGE_TYPE_VTUBER"
                    :headlineText="t('views.GroupView.vtubers')"
                    :headlineTo="childVtubers.length > maxVtubersCount ? { name: LIST_TYPE_VTUBERS, query: { group: group?.id } } : null"
                    :store="vtubersStore" :tilesetTo="PAGE_TYPE_VTUBER" :items="displayedVtubers" />

                <TileSetWithHeadline class="child-groups" v-if="displayedChildGroups.length > 0" :type="PAGE_TYPE_GROUP"
                    :headlineText="t('views.GroupView.childGroups')"
                    :headlineTo="childGroups.length > maxChildGroupsCount ? { name: LIST_TYPE_GROUPS, query: { parent: group?.id } } : null"
                    :store="groupsStore" :tilesetTo="PAGE_TYPE_GROUP" :items="displayedChildGroups" />
            </div>

            <div class="right-grid">
                <HeadlinedDiv class="links" :text="t('views.GroupView.links')">
                    <ExternalLink v-for="l in group?.links" :key="l.url" :url="l.url" :title="l.name" />
                </HeadlinedDiv>

                <HeadlinedDiv class="tags" :text="t('views.GroupView.tags')">
                    <span v-for="tag in tags" :key="tag">{{ tag }},</span>
                </HeadlinedDiv>
            </div>
        </main>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { computed, onBeforeMount } from '@vue/runtime-core';
import { useGroupsStore } from '@/stores/groups';
import { useVtubersStore } from '@/stores/vtubers';
import { useVtuberGroupRelationsStore } from '@/stores/vtuber-group-relations'
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS } from '@/utils/consts/listTypes';
import { PAGE_TYPE_VTUBER, PAGE_TYPE_GROUP } from '@/utils/consts/pageTypes';
import NameHeadline from '@/components/NameHeadline.vue';
import HeadlinedDiv from '@/components/HeadlinedDiv.vue';
import TileSetWithHeadline from '@/components/TileSetWithHeadline.vue'
import SearchLink from '@/components/SearchLink.vue';
import ExternalLink from '@/components/ExternalLink.vue';
import GroupAbout from '../components/GroupAbout.vue';
import PageNotFound from '../components/PageNotFound.vue';

const { t } = useI18n({ useScope: 'global' })

const route = useRoute();

const groupsStore = useGroupsStore();
const vtubersStore = useVtubersStore();
const vtuberGroupRelationsStore = useVtuberGroupRelationsStore();
//const languageStore = useLanguageStore();

onBeforeMount(() => {
    if (!groupsStore.listOnceLoaded)
        groupsStore.requestList();
    if (!groupsStore.namesOnceLoaded)
        groupsStore.requestNames();
    if (!groupsStore.descriptionsOnceLoaded)
        groupsStore.requestDescriptions();

    if (!vtubersStore.listOnceLoaded)
        vtubersStore.requestList();
    if (!vtubersStore.namesOnceLoaded)
        vtubersStore.requestNames();

    if (!vtuberGroupRelationsStore.listOnceLoaded)
        vtuberGroupRelationsStore.requestList();
    /*
        if (!languageStore.langNamesAreSet)
            languageStore.setLangNames();
        if (!languageStore.knowledgeOnceLoaded)
            languageStore.requestKnowledge();
    */

});

const group = computed(() => groupsStore.getById(route.params.id));

const maxParentGroupsCount = 2;
const parentGroups = computed(() => groupsStore.getParentGroups(group.value?.id));
const displayedParentGroups = computed(() => parentGroups.value.slice(0, maxParentGroupsCount));

const maxChildGroupsCount = 2;
const childGroups = computed(() => groupsStore.getChildGroups(group.value?.id));
const displayedChildGroups = computed(() => childGroups.value.slice(0, maxChildGroupsCount));

const maxVtubersCount = 6;
const childVtubers = computed(() => groupsStore.getVtubers(group.value?.id));
const displayedVtubers = computed(() => childVtubers.value.slice(0, maxVtubersCount));

const tags = [];
</script>

<style scoped>
.the-grid {
    display: grid;
    grid-template-columns: 256px 1fr 15%;
    gap: 15px;
}

.left-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 15px;
    align-content: flex-start;
}

.mid-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 15px;
    align-content: flex-start;
}

.right-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 15px;
    align-content: flex-start;
}

.poster {
    grid-row: 1 / span 1;
    grid-row: 1 / span 1;
}

.about {
    grid-row: 2;
    grid-column: 1 / span 1;
}

.poster>img {
    width: 100%;
}

.description {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
}

.vtubers {
    grid-row: 2;
    grid-column: 1 / span 1;
}
</style>