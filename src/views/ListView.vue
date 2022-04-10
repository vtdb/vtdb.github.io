<template>
    <div>
        <h1>{{ title }}</h1>
        <TileSet :store="store" :linkName="linkName"/>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { reactive, ref, computed, watch } from 'vue'
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS, LIST_TYPE_SPECIES } from '@/utils/consts/listTypes';
import { PAGE_TYPE_VTUBER, PAGE_TYPE_GROUP, PAGE_TYPE_SPECIES } from '@/utils/consts/pageTypes';
import { useVtubersStore } from '@/stores/vtubers'
import { useGroupsStore } from '@/stores/groups'
import Tile from '@/components/Tile.vue'
import TileSet from '@/components/TileSet.vue';

const { t, locale } = useI18n({ useScope: 'global' })

const route = useRoute();

const store = ref({});
const title = computed(() => {
    switch (route.params.type) {
        case LIST_TYPE_VTUBERS:
            return t('views.VtubersListView.header');
        case LIST_TYPE_GROUPS:
            return t('views.GroupsListView.header');
        case LIST_TYPE_SPECIES:

        default:
            return '';
    }
});
const linkName = computed(() => {
    switch (route.params.type) {
        case LIST_TYPE_VTUBERS:
            return PAGE_TYPE_VTUBER;
        case LIST_TYPE_GROUPS:
            return PAGE_TYPE_GROUP;
        case LIST_TYPE_SPECIES:

        default:
            return '';
    }
});


function setListType(type) {
    switch (type) {
        case LIST_TYPE_VTUBERS:
            store.value = useVtubersStore();
            store.value.requestListWithTranslations();
            break;
        case LIST_TYPE_GROUPS:
            store.value = useGroupsStore();
            store.value.requestListWithTranslations();
            break;
        case LIST_TYPE_SPECIES:

        default:
            break;
    }
}

setListType(route.params.type);

watch(
    () => route.params.type,
    setListType
)
watch(
    () => locale.value,
    setListType
)
</script>