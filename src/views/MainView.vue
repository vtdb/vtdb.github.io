<template>
  <div>
    <h1>{{ t('views.MainView.header') }}</h1>
    <br />

    <div class="the-grid">
      <div class="main-grid">
        <TileSetWithHeadline class="vtubers" :headlineText="t('views.MainView.vtubers')"
          :headlineTo="{ name: LIST_TYPE_VTUBERS }" :store="vtubersStore" :tilesetTo="PAGE_TYPE_VTUBER"
          :items="displayedVtubers" />
        <TileSetWithHeadline class="groups" :headlineText="t('views.MainView.groups')"
          :headlineTo="{ name: LIST_TYPE_GROUPS }" :store="groupsStore" :tilesetTo="PAGE_TYPE_GROUP"
          :items="displayedGroups" />
      </div>

      <div class="side-grid">
        <div>
          <Headline :text="t('views.MainView.languages')" />
          <div class="search-links-container">
            <div class="text-search-link" v-for="l in languageStore.getAllSpokenLanguages" :key="l.lang">
              <SearchLink :to="{ name: LIST_TYPE_VTUBERS, query: { lang: l.lang } }"
                :title="languageStore.getName(l.lang)" />
            </div>
          </div>
        </div>
        <div>
          <Headline :text="t('views.MainView.tags')" />
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useVtubersStore } from '@/stores/vtubers'
import { useGroupsStore } from '@/stores/groups';
import { useLanguageStore } from '@/stores/language';
import { LIST_TYPE_VTUBERS, LIST_TYPE_GROUPS, LIST_TYPE_SPECIES } from '@/utils/consts/listTypes';
import { PAGE_TYPE_VTUBER, PAGE_TYPE_GROUP, PAGE_TYPE_SPECIES } from '@/utils/consts/pageTypes';
import TileSet from '../components/TileSet.vue';
import Headline from '../components/Headline.vue';
import TileSetWithHeadline from '../components/TileSetWithHeadline.vue';
import SearchLink from '../components/SearchLink.vue';
import { computed } from '@vue/runtime-core';

const { t } = useI18n({ useScope: 'global' })

const vtubersStore = useVtubersStore();
vtubersStore.requestListWithTranslations();

const groupsStore = useGroupsStore();
groupsStore.requestListWithTranslations();

const languageStore = useLanguageStore();
languageStore.requestKnowledge();
languageStore.setLangNames();
const languages = computed(() => languageStore.getAllSpokenLanguages);//[{ lang: 'ru' }, { lang: 'en' }, { lang: 'ja' }];

const maxVtuberCount = 6;
const maxGroupCount = 6;


const displayedVtubers = computed(() => vtubersStore.list.slice(0, maxVtuberCount));
const displayedGroups = computed(() => groupsStore.list.slice(0, maxGroupCount));

</script>

<style scoped>
.the-grid {
  display: grid;
  grid-template-columns: 1fr 15%;
  grid-template-rows: auto;
  gap: 15px;
}

.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 15px;
  align-content: flex-start;
}

.vtubers {
  grid-column: 1;
  grid-row: 1;
}

.groups {
  grid-column: 1;
  grid-row: 2;
}

.side-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 15px;
  align-content: flex-start;
}

.search-links-container {
  margin-top: 5px;
}

.text-search-link {
  padding-left: 15px;
}

@media screen and (max-width: 1199px) {
  .the-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}
</style>