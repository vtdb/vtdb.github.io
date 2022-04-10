import { defineStore } from 'pinia'
import { useTranslationStore } from '@/stores/translation'
import axios from 'axios';

export const useSpeciesStore = defineStore('species', {
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
        getById: (state) => (id) => state.list.find(s => s.id == id),
        getByIds: (state) => (ids) => ids ? state.list.filter(s => ids?.includes(s.id)) : [],
        getFormattedName: (state) => (id) => {
            const translation = useTranslationStore();
            return translation.getFormattedName(state.names, id);
        },
        getName: (state) => (id) => {
            const translation = useTranslationStore();
            return translation.getTranslation(state.names, id);
        },
        getNamesByFormat: (state) => (id) => {
            const translation = useTranslationStore();
            return translation.getTranslationsByFormat(state.names, id);
        },
        getDescription: (state) => (id) => {
            const translation = useTranslationStore();
            return translation.getTranslation(state.descriptions, id);
        }
    },
    actions: {
        requestList() {
            this.listLoading = true;
            axios.get('species.json').then((response) => {
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
            axios.get('species-names.json').then((response) => {
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
            axios.get('species-descriptions.json').then((response) => {
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