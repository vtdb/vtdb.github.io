<template>
    <div class="tiles">
        <Tile class="item-tile" v-for="item in items" :key="item.id" :imgSrc="item.avatarUrl"
            :names="store.getNamesByFormat(item.id)" :linkTo="{ name: linkName, params: { id: item.id } }">
            <VtuberTooltipContent v-if="type == 'vtuber'" :id="item.id" />
            <GroupTooltipContent v-else-if="type == 'group'" :id="item.id" />
        </Tile>
    </div>
</template>

<script setup>
import Tile from "./Tile.vue";
import VtuberTooltipContent from "./VtuberTooltipContent.vue";
import GroupTooltipContent from "./GroupTooltipContent.vue";
const props = defineProps({
    'type': {
        type: String,
        default: ''
    }, 'items': Array, 'store': Object, 'linkName': [String, Array]
});
</script>