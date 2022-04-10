<template>
    <div>
        <button @click="setUserLang">{{ translationStore.getUserLang }}</button>
    </div>
</template>

<script setup>
import { useTranslationStore } from '@/stores/translation';
const translationStore = useTranslationStore();
function setUserLang() {
    translationStore.setUserLang(translationStore.getUserLang == 'ru' ? 'en' : 'ru');
}
</script>

<style>
</style>