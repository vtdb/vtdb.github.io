<template>
    <div class="tiles">
        <Tile
            class="item-tile"
            v-for="item in items"
            :key="item.id"
            :imgSrc="item.avatarUrl"
            :names="store.getNamesByFormat(item.id)"
            :linkTo="{ name: linkName, params: { id: item.id } }"
        />
    </div>
</template>

<script setup>
import Tile from "./Tile.vue";
const props = defineProps(['items', 'store', 'linkName']);
</script>