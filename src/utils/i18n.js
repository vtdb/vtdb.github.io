import { createI18n } from 'vue-i18n'
import { messages } from '@/translations/messages'

export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('mainLang') ?? 'ru', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n;