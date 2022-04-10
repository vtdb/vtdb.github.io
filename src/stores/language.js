import { defineStore } from 'pinia'
import { useTranslationStore } from '@/stores/translation'
import axios from 'axios';

export const useLanguageStore = defineStore('language', {
    state: () => ({
        knowledge: [],
        knowledgeOnceLoaded: false,
        knowledgeLoading: false,
        knowledgeError: false,

        langNames: null,
        langNamesAreSet: false,
    }),
    getters: {
        getKnowledge: (state) => (vtuberId) => state.knowledge.filter(k => k.vtuber_id == vtuberId),
        getName: (state) => (lang) => state.langNames.of(lang),
        getAllSpokenLanguages: (state) => [...new Set(state.knowledge.map(k => ({ lang: k.lang })))],
    },
    actions: {
        setLangNames() {
            const translation = useTranslationStore();
            this.langNames = new Intl.DisplayNames([translation.getUserLang], { type: 'language' });
        },
        requestKnowledge() {
            this.knowledgeLoading = true;
            axios.get('language-knowledge.json').then((response) => {
                this.knowledge = response.data;
                this.knowledgeOnceLoaded = true;
                this.knowledgeLoading = false;
                this.knowledgeError = null;
            }).catch((err) => {
                this.knowledgeError = err;
                this.knowledgeLoading = false;
            });
        },
    },
})