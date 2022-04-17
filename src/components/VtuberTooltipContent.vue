<template>
    <div>
        <div>
            <router-link :to="{ name: PAGE_TYPE_VTUBER, params: { id } }">
                <NameHeadline :names="vtubersStore.getNamesByFormat(id)" />
            </router-link>
        </div>
        <div>
            <VtuberAbout :id="id" />
        </div>  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useVtubersStore } from '@/stores/vtubers';
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS } from '@/utils/consts/listTypes';
import { PAGE_TYPE_VTUBER, PAGE_TYPE_GROUP } from '@/utils/consts/pageTypes';
import NameHeadline from '@/components/NameHeadline.vue';
import VtuberAbout from '@/components/VtuberAbout.vue'

const { t } = useI18n({ useScope: 'global' })

const props = defineProps(['id']);

const vtubersStore = useVtubersStore();
vtubersStore.requestListWithTranslations();
</script>

<style>
</style>