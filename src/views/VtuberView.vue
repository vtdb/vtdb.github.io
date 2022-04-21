<template>
    <div v-if="vtubersStore.listLoading">Loading</div>
    <div v-else-if="!vtuber">
        <PageNotFound />
    </div>
    <div v-else>
        <header>
            <h1>
                <NameHeadline :names="vtubersStore.getNamesByFormat(vtuber.id)" />
            </h1>
            <h5>
                <router-link :to="{ name: LIST_TYPE_VTUBERS }">{{ t("views.VtuberView.tofulllistlink") }}</router-link>
                / {{ t("views.VtuberView.header") }}
            </h5>
        </header>
        <main class="vtuber-info">
            <div class="poster">
                <img class :src="vtuber.avatarUrl" :alt="vtubersStore.getFormattedName(vtuber.id)"
                    :title="vtubersStore.getFormattedName(vtuber.id)" />
            </div>

            <HeadlinedDiv class="about" :text="t('views.VtuberView.about')">
                <VtuberAbout :id="vtuber.id" />
            </HeadlinedDiv>

            <TileSetWithHeadline class="groups" :headlineText="t('views.VtuberView.groups')" :type="PAGE_TYPE_GROUP"
                :headlineTo="displayedGroups.length > maxGroupCount ? { name: LIST_TYPE_GROUPS, query: { vtuber: vtuber.id } } : null"
                :store="groupsStore" :tilesetTo="PAGE_TYPE_GROUP" :items="displayedGroups" />

            <HeadlinedDiv class="description" :text="t('views.VtuberView.description')">{{
                    vtubersStore.getDescription(vtuber.id).text
            }}</HeadlinedDiv>

            <HeadlinedDiv class="links" :text="t('views.VtuberView.links')">
                <ExternalLink v-for="l in vtuber.links" :key="l.url" :url="l.url" :title="l.name" />
            </HeadlinedDiv>

            <HeadlinedDiv class="tags" :text="t('views.VtuberView.tags')">
                <span v-for="tag in tags" :key="tag">{{ tag }},</span>
            </HeadlinedDiv>
        </main>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed, ref } from '@vue/reactivity'
import { useLanguageStore } from '@/stores/language'
import { useVtubersStore } from '@/stores/vtubers'
import { useGroupsStore } from '@/stores/groups'
import { useSpeciesStore } from '@/stores/species'
import { useVtuberSpeciesRelationsStore } from '@/stores/vtuber-species-relations'
import { useVtuberGroupRelationsStore } from '@/stores/vtuber-group-relations'
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS } from '@/utils/consts/listTypes';
import { PAGE_TYPE_GROUP } from '@/utils/consts/pageTypes'
import { onBeforeMount } from '@vue/runtime-core'
import ExternalLink from '@/components/ExternalLink.vue'
import SearchLink from '@/components/SearchLink.vue'
import NameHeadline from '@/components/NameHeadline.vue'
import TileSetWithHeadline from '@/components/TileSetWithHeadline.vue'
import HeadlinedDiv from '@/components/HeadlinedDiv.vue'
import Tile from '@/components/Tile.vue'
import VtuberAbout from '@/components/VtuberAbout.vue'
import PageNotFound from '@/components/PageNotFound.vue'

const { t } = useI18n({ useScope: 'global' })

const route = useRoute();
const languageStore = useLanguageStore();
const vtubersStore = useVtubersStore();
const groupsStore = useGroupsStore();
const speciesStore = useSpeciesStore();
const vtuberSpeciesRelationsStore = useVtuberSpeciesRelationsStore();
const vtuberGroupRelationsStore = useVtuberGroupRelationsStore();

onBeforeMount(() => {
    if (!vtubersStore.listOnceLoaded)
        vtubersStore.requestList();
    if (!vtubersStore.namesOnceLoaded)
        vtubersStore.requestNames();
    if (!vtubersStore.descriptionsOnceLoaded)
        vtubersStore.requestDescriptions();

    if (!languageStore.langNamesAreSet)
        languageStore.setLangNames();
    if (!languageStore.knowledgeOnceLoaded)
        languageStore.requestKnowledge();

    if (!speciesStore.listOnceLoaded)
        speciesStore.requestList();
    if (!speciesStore.namesOnceLoaded)
        speciesStore.requestNames();

    if (!vtuberSpeciesRelationsStore.listOnceLoaded)
        vtuberSpeciesRelationsStore.requestList();

    if (!groupsStore.listOnceLoaded)
        groupsStore.requestList();
    if (!groupsStore.namesOnceLoaded)
        groupsStore.requestNames();

    if (!vtuberGroupRelationsStore.listOnceLoaded)
        vtuberGroupRelationsStore.requestList();
});

const vtuber = computed(() => vtubersStore.getById(route.params.id))

const languages = computed(() => languageStore.getKnowledge(vtuber.value.id));

const species = computed(() => vtubersStore.getSpecies(vtuber.value.id));

const maxGroupCount = 2;

const displayedGroups = computed(() => vtubersStore.getGroups(vtuber.value.id).slice(0, maxGroupCount));

const tags = [];

</script>

<style scoped>
.vtuber-info {
    display: grid;
    grid-gap: 15px;
    /*grid-template-columns: 15% calc(35% - 15px) calc(35% - 15px) calc(15% - 15px);*/
    grid-template-columns: 256px 2fr 2fr 1fr;
}

.poster {
    grid-row: 1 / span 2;
}

.poster>img {
    width: 100%;
}

.about {
    grid-column: 2 / span 1;
}

.groups {
    grid-column: 3 / span 1;
}

.groups-div {
    display: flex;
    justify-content: start;
}

.group-tile {
    min-width: 25%;
    width: 128px;
    max-width: 100%;
    margin: 15px 0;
}

.description {
    grid-column: 2 / span 2;
}

.links {
    grid-row: 1;
    grid-column: 4 / span 1;
}

.tags {
    grid-row: 2;
    grid-column: 4 / span 1;
}

@media screen and (max-width: 1199px) {
    .vtuber-info {
        grid-template-columns: 1fr 2fr;
    }

    .poster {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }

    .about {
        grid-column: 2 / span 1;
        grid-row: 1 / span 1;
    }

    .description {
        grid-column: 1 / span 2;
        grid-row: 2 / span 1;
    }

    .groups {
        grid-column: 1 / span 2;
        grid-row: 3 / span 1;
    }

    .links {
        grid-column: 1 / span 2;
        grid-row: 4;
    }

    .tags {
        grid-column: 1 / span 2;
        grid-row: 5;
    }
}
</style>