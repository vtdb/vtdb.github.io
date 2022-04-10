<template>
  <div>
    <h1>{{ t('views.AboutView.header') }}</h1>
    <br/>
    <p>{{ t('views.AboutView.text') }}</p>
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>
