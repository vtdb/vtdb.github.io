<template>
    <div>
        <h1>{{ t("components.PageNotFound.notFound") }}</h1>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>

<style>
</style>