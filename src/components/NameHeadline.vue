<template>
    <span>
        <template v-if="names?.length > 0">
            <span v-for="n in names" :key="n" class="name-headline-text">{{ n }}</span>
        </template>
    </span>
</template>

<script setup>
const props = defineProps(['names']);
</script>

<style>
.name-headline-text::after {
    content: "\00A0/\00A0";
}
.name-headline-text:last-child::after {
    content: "";
}
</style>