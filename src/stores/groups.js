import { defineStore } from 'pinia'
import { useTranslationStore } from '@/stores/translation'
import { useVtuberGroupRelationsStore } from '@/stores/vtuber-group-relations'
import axios from 'axios';

export const useGroupsStore = defineStore('groups', {
  state: () => ({
    list: [],
    listOnceLoaded: false,
    listLoading: false,
    listError: null,

    names: [],
    namesOnceLoaded: false,
    namesLoading: false,
    namesError: null,

    descriptions: [],
    descriptionsOnceLoaded: false,
    descriptionsLoading: false,
    descriptionsError: null,
  }),
  getters: {
    getList: (state) => state.list,
    getChunk() {
      return (size, offset = 0) => this.getList.slice(offset, size);
    },
    getById: (state) => (id) => state.list.find(v => v.id == id),
    getByIds: (state) => (ids) => ids ? state.list.filter(g => ids.includes(g.id)) : [],
    getNamesByFormat: (state) => (id) => {
      const translation = useTranslationStore();
      return translation.getTranslationsByFormat(state.names, id);
    },
    getFormattedName: (state) => (id) => {
      const translation = useTranslationStore();
      return translation.getFormattedName(state.names, id);
    },
    getDescription: (state) => (id) => {
      const translation = useTranslationStore();
      return translation.getTranslation(state.descriptions, id);
    },
    getParentGroups: (state) => (id) => [],
    getChildGroups: (state) => (id) => [],
    getVtubers: (state) => (id) => {
      const relationStore = useVtuberGroupRelationsStore();
      return relationStore.getVtubersByGroup(id);
    },
  },
  actions: {
    requestList() {
      this.listLoading = true;
      axios.get('groups.json').then((response) => {
        this.list = response.data;
        this.listOnceLoaded = true;
        this.listLoading = false;
        this.listError = null;
      }).catch((err) => {
        this.listError = err;
        this.listLoading = false;
      });
    },
    requestNames() {
      this.namesLoading = true;
      axios.get('groups-names.json').then((response) => {
        this.names = response.data;
        this.namesOnceLoaded = true;
        this.namesLoading = false;
        this.namesError = null;
      }).catch((err) => {
        this.namesError = err;
        this.namesLoading = false;
      });
    },
    requestDescriptions() {
      this.descriptionsLoading = true;
      axios.get('groups-descriptions.json').then((response) => {
        this.descriptions = response.data;
        this.descriptionsOnceLoaded = true;
        this.descriptionsLoading = false;
        this.descriptionsError = null;
      }).catch((err) => {
        this.descriptionsError = err;
        this.descriptionsLoading = false;
      });
    },
    requestTranslations() {
      this.requestNames();
      this.requestDescriptions();
    },
    requestListWithTranslations() {
      this.requestList();
      this.requestTranslations();
    }
  }
})
