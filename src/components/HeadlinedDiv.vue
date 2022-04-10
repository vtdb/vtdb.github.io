<template>
    <div>
        <Headline :text="text" :to="to" />
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import Headline from './Headline.vue';

const props = defineProps(['text', 'to']);
</script>

<style>
</style>