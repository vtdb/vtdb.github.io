<template>
    <div>
        <div>
            {{ t("views.VtuberView.languages") }}:
            <SearchLink v-for="l in languages" :key="l.lang" :to="{ name: LIST_TYPE_VTUBERS, query: { lang: l.lang } }"
                :title="languageStore.getName(l.lang)" />
        </div>
        <div>
            {{ t("views.VtuberView.sex") }}:
            <SearchLink :to="{ name: LIST_TYPE_VTUBERS, query: { sex: vtuber.sex } }"
                :title="t(`dictionaries.vtuber.sexes.${vtuber.sex ?? 0}`)" />
        </div>
        <div>
            {{ t("views.VtuberView.species") }}:
            <SearchLink v-for="s in species" :key="s.id" :to="{ name: LIST_TYPE_VTUBERS, query: { spec: s.id } }"
                :title="speciesStore.getName(s.id).text" />
        </div>
        <div>
            {{ t("views.VtuberView.status") }}:
            <SearchLink :to="{ name: LIST_TYPE_VTUBERS, query: { status: vtuber.status ?? 0 } }"
                :title="t(`dictionaries.vtuber.statuses.${vtuber.status ?? 0}`)" />
        </div>  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router';
import { useLanguageStore } from '@/stores/language';
import { useVtubersStore } from '@/stores/vtubers';
import { useSpeciesStore } from '@/stores/species';
import { useVtuberSpeciesRelationsStore } from '@/stores/vtuber-species-relations';
import { computed, onBeforeMount } from '@vue/runtime-core';
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS } from '@/utils/consts/listTypes';
import { PAGE_TYPE_GROUP } from '@/utils/consts/pageTypes'
import SearchLink from '@/components/SearchLink.vue'

const { t } = useI18n({ useScope: 'global' })

const props = defineProps(['id']);

const route = useRoute();
const languageStore = useLanguageStore();
const vtubersStore = useVtubersStore();
const speciesStore = useSpeciesStore();
const vtuberSpeciesRelationsStore = useVtuberSpeciesRelationsStore();

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
});

const vtuber = computed(() => vtubersStore.getById(props.id))

const languages = computed(() => languageStore.getKnowledge(vtuber.value.id));

const species = computed(() => vtubersStore.getSpecies(vtuber.value.id));

</script>

<style>
</style>