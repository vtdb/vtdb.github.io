<template>
    <div class="search-link-container">
        <router-link class="search-link-text" :to="to">
            <slot>{{ title }}</slot>
        </router-link>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'to']);
</script>

<style>
.search-link-container {
    display: inline-block;
}

.search-link-container::after {
    content: ',\00A0';
}

.search-link-container:last-child::after {
    content: '';
}
</style>