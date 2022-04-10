import { defineStore } from 'pinia'
import { i18n } from '@/utils/i18n.js'
import { useLanguageStore } from './language';

export const useTranslationStore = defineStore('translation', {
    state: () => ({
        mainLang: null,
    }),
    getters: {
        getUserLangFromSettings: (state) => state.mainLang ?? localStorage.getItem('mainLang'),
        getUserLangFromBrowser: () => navigator.language.split('-')[0],
        getUserLang() {
            return this.getUserLangFromSettings ?? this.getUserLangFromBrowser;
        },
        getUserNameFormat: () => {
            //0 - original / userlang
            //1 - userlang / original
            //2 - only original
            //3 - only userlang
            if (localStorage.getItem("nameFormat")) localStorage.setItem("nameFormat", 0);

        },
        getDefaultTranslation: () => (translations, id) => translations.find(t => t.id == id && t.isDefault),
        getTranslationByLang: () => (translations, id, lang) => translations.find(t => t.id == id && t.lang == lang),
        getTranslation() {
            return (translations, id) => this.getTranslationByLang(translations, id, this.getUserLang) ?? this.getDefaultTranslation(translations, id) ?? { text: 'not found' };
        },
        getFormattedName() {
            return (translations, id) => {
                return this.getTranslationsByFormat(translations, id).join(' / ');
            }
        },
        getTranslationsByFormat() {
            return (translations, id) => {
                let nameFormat = this.getUserNameFormat;
                let userLang = this.getUserLang;

                let defTr = this.getDefaultTranslation(translations, id);

                if (!defTr) return ['default language not set'];

                if (defTr.lang == userLang || nameFormat == 2)
                    return [defTr.text];

                let userTr = this.getTranslationByLang(translations, id, userLang);
                if (nameFormat == 3) {
                    if (userTr?.text)
                        return [userTr.text];
                    else
                        return [defTr.text];
                }

                //if 0 or 1
                if (userTr.text == defTr.text)
                    return [defTr.text];
                if (nameFormat == 0)
                    return [defTr.text, userTr.text];
                else //1
                    return [userTr.text, defTr.text];
            }
        }
    },
    actions: {
        setUserLang(newLang) {
            localStorage.setItem('mainLang', newLang);
            i18n.global.locale.value = newLang;

            this.mainLang = newLang;

            const langStore = useLanguageStore();
            langStore.setLangNames();
        },
    },
})