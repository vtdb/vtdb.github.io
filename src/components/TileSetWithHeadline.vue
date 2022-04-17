<template>
    <HeadlinedDiv :text="headlineText" :to="headlineTo">
        <TileSet :type="type" :store="store" :linkName="tilesetTo" :items="items" />
        </HeadlinedDiv>
</template>

<script setup>
import TileSet from './TileSet.vue';
import HeadlinedDiv from './HeadlinedDiv.vue';

const props = defineProps(['type', 'items', 'store', 'tilesetTo', 'headlineText', 'headlineTo']);
</script>

<style>
</style>